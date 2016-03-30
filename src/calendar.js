
/************************************
 * Jean-Christophe Taveau
 * Calendar
 * 2015
 ************************************/


// Polyfill
if ( !Date.prototype.toCalString ) {
  ( function() {
    
    function pad(number) {
      if ( number < 10 ) {
        return '0' + number;
      }
      return number;
    }
 
    Date.prototype.toCalString = function() {
      return this.getFullYear() +
        '-' + pad( this.getMonth() + 1 ) +
        '-' + pad( this.getDate() ) +
        'T' + pad( this.getHours() ) +
        ':' + pad( this.getMinutes() ) +
        ':' + pad( this.getSeconds() ) +
        '.' + (this.getMilliseconds() / 1000).toFixed(3).slice(2, 5);
    };
  
  }() );
}

/******************************************************
 *
 * E V E N T S
 *
 ******************************************************/
 
function setMasterOptions() {
    if (typeof localStorage != undefined) {
        var e = document.getElementById('masterYear') || 1;
        var l = document.getElementById('masterTrack') || 1;
        localStorage.masterYear  = e.options[e.selectedIndex].value;
        localStorage.masterTrack = l.options[l.selectedIndex].value;
    } else {
        alert("html5:: localStorage not supported");
    }
    updateCalendar();
}


function previousWeek() {
    var cal = document.getElementById("calendar");
    var y = parseInt(cal.dataset.year);
    var m = parseInt(cal.dataset.month);
    var d = parseInt(cal.dataset.day);
    var date = new Date(y,m,d-7);
    cal.dataset.year  = date.getFullYear();
    cal.dataset.month = date.getMonth();
    cal.dataset.day   = date.getDate();
    
    updateCalendar();
}

function nextWeek() {
    var cal = document.getElementById("calendar");
    var y = parseInt(cal.dataset.year);
    var m = parseInt(cal.dataset.month);
    var d = parseInt(cal.dataset.day);
    var date = new Date(y,m,d+7);
    cal.dataset.year  = date.getFullYear();
    cal.dataset.month = date.getMonth();
    cal.dataset.day   = date.getDate();

    updateCalendar();
}


/******************************************************
 *
 * C A L E N D A R
 *
 ******************************************************/
 
var calendar_data = null;
var table = new TableCal();

initCalendar();

/**
 *
 * Constructor
 *
 **/
 
function initCalendar() {
    var now = new Date();
    
    var cal = document.getElementById("calendar");
    cal.dataset.year  = now.getFullYear();
    cal.dataset.month = now.getMonth();
    cal.dataset.day   = now.getDate();
    
    loadCalendarData();

}

function loadCalendarData() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            calendar_data = JSON.parse(xhr.responseText); // Données textuelles récupérées
            updateCalendar();
        }
    };
    xhr.open("GET", "http://master-bioinfo-bordeaux.github.io/data/calendar.json", true);
    xhr.send(null);

}


function updateCalendar() {

    table.reset();
    
    var y = parseInt(document.getElementById("calendar").dataset.year);
    var m = parseInt(document.getElementById("calendar").dataset.month);
    var d = parseInt(document.getElementById("calendar").dataset.day);

    updateCalendarHeader(y,m,d);
    updateCalendarBody(y,m,d);
}

function updateCalendarHeader(y,m,d) {
    
    // Update table header thead
    var days = getWeekDays(y, m, d);
    var element = document.getElementById('calendar-lg-head');
    var html = '<tr><th>Hour</th>';
    for (var i = 0; i < days.length;i++) {
        html +='<th class="centered">'+days[i]+'</th>';
    }
    html +='</tr>';
    element.innerHTML = html;
    
    // Update Week Number
    var weekNum = document.getElementById('weeknum').innerHTML = 'Week ' + getISOWeekNum(y,m,d);
}

function updateCalendarBody(y,m,d) {
    var masterYear  = localStorage.masterYear;
    var masterTrack = localStorage.masterTrack;
    
    // console.log(calendar_data);
    var today = new Date(y,m,d);
    var weekevents = [];

    // Search events occuring during this week 
    
    for (var index in calendar_data) {
        var element = calendar_data[index];
        element.MSYear  = parseInt(element.ID[1]);
        element.MSTrack = parseInt(element.ID[2],16);
        element.weekdayIndex = -1;
        console.log(element);
        if ( (element.MSYear == masterYear || element.MSYear == 3) && (element.MSTrack & masterTrack) == masterTrack ) {
            var startDate = new Date(
                parseInt(element.date_start.substr(0,4)),
                parseInt(element.date_start.substr(5,2)) - 1,
                parseInt(element.date_start.substr(8,2)),
                parseInt(element.date_start.substr(11,2)),
                parseInt(element.date_start.substr(14,2))
            );
            var endDate   = new Date(
                parseInt(element.date_end.substr(0,4)),
                parseInt(element.date_end.substr(5,2)) - 1,
                parseInt(element.date_end.substr(8,2)),
                parseInt(element.date_end.substr(11,2)),
                parseInt(element.date_end.substr(14,2))
            );
            
            if (parseInt(element.date_start.substr(11,2)) == 0) {
                element.allDay = true;
            }
            else {
                element.allDay = false;
            }
            // console.log('START ' + startDate);
        
            // From MON to FRI
            for (var i = 1; i < 6; i++) {
                var day = new Date(y,m,d - today.getDay() + i);
                var dayD       = day.toCalString().substr(0,10);  // Days number since UTC
                var startDateD = element.date_start.substr(0,10); // Days number since UTC
                var endDateD   = element.date_end.substr(0,10);   // Days number since UTC
                // console.log(dayD,startDateD,endDateD,day, day.toCalString());
                if ( dayD >= startDateD && dayD <= endDateD ) { // HACK: What about multi-days event ?
                    // console.log(day + ' creates an event with ' + element.ID + ' ' +  element.apogee);
                    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
                    element.startDate = startDate;
                    element.endDate   = endDate;
                    // element.duration  = Math.ceil(timeDiff / (1000 * 60)); // ms -> min
                    element.duration  = Math.round(timeDiff / (1000 * 60 * 60) * 2 ) * 30; // round to the nearest half hour (in minutes)
                    if (element.weekdayIndex == -1) {
                        element.weekdayIndex = i;
                        weekevents.push(element);
                    }
                    else {
                        // Already exists aka multiday event
                        // Copy element
                        var elementClone = element.constructor();
                        for (var attr in element) {
                            if (element.hasOwnProperty(attr)) elementClone[attr] = element[attr];
                        }
                        elementClone.weekdayIndex = i;
                        weekevents.push(elementClone);
                    }
                }
            }
        }
    }
    // Sort events by time from 0800 to 1900
    for (var i = 1; i < 6; i++) {
        weekevents.sort(function sort(a,b) {
            if (a.startDate.getTime() > b.startDate.getTime() ) {
                return 1;
            }
            else if (a.startDate.getTime() < b.startDate.getTime() ) {
                return -1;
            }
            else {
                if (a.weekdayIndex > b.weekdayIndex ) {
                    return 1;
                }
                else if (a.weekdayIndex < b.weekdayIndex ) {
                    return -1;
                }
                else
                    return 0;
            }
        });
    }

    createEventCells(weekevents);
}


function getWeekDays(y,m,d) {
    var months    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var shortdays = ['SUN','MON','TUE','WED','THU','FRI'];
    var weekdays=[];
    var date = new Date(y,m,d);
    for (var i=1; i<=5; i++) {
        var day = new Date(y,m,d - date.getDay() + i);
        weekdays.push(shortdays[day.getDay()] +' <sub>' + day.getDate() + ' ' + months[day.getMonth()] +'</sub>');
    }

    // console.log(weekdays) ;
    return weekdays;
}



function getYYYYMMDD(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() < 10) ? ('0'+ date.getMonth()) : date.getMonth();
    var day   = (date.getDate() < 10) ? ('0'+ date.getDate()) : date.getDate();
    return year + month + day;
}

/**
 * Get the ISO week date week number
 * From http://techblog.procurios.nl/k/n618/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
 * By Taco van den Broek
 */
function getISOWeekNum(y,m,d) {
    var date = new Date(y,m,d);
	// Create a copy of this date object
	var target  = new Date(y,m,d);

	// ISO week date weeks start on monday
	// so correct the day number
	var monday   = (date.getDay() + 6) % 7;

	// ISO 8601 states that week 1 is the week
	// with the first thursday of that year.
	// Set the target date to the thursday in the target week
	target.setDate(target.getDate() - monday + 3);

	// Store the millisecond value of the target date
	var firstThursday = target.valueOf();

	// Set the target to the first thursday of the year
	// First set the target to january first
	target.setMonth(0, 1);
	// Not a thursday? Correct the date to the next thursday
	if (target.getDay() != 4) {
		target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
	}

	// The weeknumber is the number of weeks between the 
	// first thursday of the year and the thursday in the target week
	return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000
}


function displayCalendarModal(eventID) {
    var type = eventID[0];  // C = Course or E = Event
    var html = ''; 
    console.log('event ' + eventID + ' ' + type);
    if (type === 'C') {
        html = createCourseModal(eventID);
    }
    else if (type === 'E') {
        html = createEventModal(eventID);    
    }
    else {
        // TODO = Problem ?
    }
    
    var el = document.getElementById('calendarModal');
    el.innerHTML = html;
    console.log(el);
   
    // el.modal('show');
    $('#calendarModal').modal('show');
}

function createCourseModal(ID) {
    console.log(calendar_data[ID]);
    var courseID = calendar_data[ID].apogee;
    var the_course = course_data[courseID];
    var image = the_course.image  || 'headinfo.jpg';
    var lang = /fr/i.test(navigator.language) ? 'fr' : 'en';
    
    // If the_course is a sub-course (ex: AEB-Info is a sub-part of AEB), then get the parent course for information
    if (the_course.link !== undefined) {
        the_course = course_data[the_course.link];
    }

    var html = '';
    html += '<div class="modal-dialog">';
    html +='<div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+the_course.title;
    html += '<span class="pull-right"><i class="fa fa-graduation-cap"> </i>&nbsp;'+the_course.ects+' ECTS&nbsp;&nbsp;&nbsp;</span>';
    html += '</h4>';
    html += '</div>'; // modal-header
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/'+image+'" alt=""></p>';
    html += '';
    html += the_course.contents[lang];
    html += '<a class="pull-right" href="' + (university_path + the_course.html) + '" target="_blank"> <i class="fa fa-university fa-2x"></i></a>&nbsp;&nbsp;<br>';
    html += '</div>'; // modal-body
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog

    return html;
}

function createEventModal(ID) {
    var the_event = course_data[calendar_data[ID].apogee];

    var html = '';
    html += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+the_event.title +'<span class="pull-right"><i class="' + the_event.icon +'"> </i>&nbsp;&nbsp;&nbsp;&nbsp;</span></h4>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/' + the_event.image + '" alt=""></p>';
    html += '';
    html += '<h2>' + calendar_data[ID].title + '</h2>'; 
    html += calendar_data[ID].description; 
    html += '</div>';
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog

    return html;
}

function createEventCells(events) {
    console.log("EVENTS OF THIS WEEK");
    console.log(events);
    var html='';
    // ROW 0 = ALL DAY events
    html +='<tr><td>All Day</td>';
    for (var column = 0; column < 5; column++) {
        html +='<td>';
        // AllDay events
        for (var i = 0; i < events.length; i++) {
            if ( events[i].weekdayIndex == (column+1) && events[i].allDay === true) {
                html += createEventCell(events[i]);
            }
        }
        html +='</td>';
    }
    html +='</tr>';
    
    // ROW 1 to n = From 08:00 to 19:00 in minutes
    for (var i = 0; i < TableCal.NROWS; i++) {
        var row = i*30 + 480;
        html += '<tr>';
        console.log(row);
        if ( (row % 60) == 0) {
            html += '<td  rowspan="2">'+ ( (Math.ceil(row/60) < 10) ? ('0'+Math.ceil(row/60) ) : Math.ceil(row/60) )+':00</td>';
        }
        for (var column = 0; column < 5; column++) {
            // Regular events
            var contents = findEvent(events,row,column);
            if (table.cells[i][column] == 0) {
                html += createEmptyCell();
            }
            else {
                html += contents;
            }
        }
        html += '</tr>';
        console.log(table);
    }
    
    // Last ROW = EVENING events
    html +='<tr><td>Evening</td><td></td><td></td><td></td><td></td><td></td></tr>';
    

    document.getElementById('calendar-lg-body').innerHTML=html;

}

function findEvent(events,start,col) {
    var day = col + 1 // col#0 = MONDAY = day#1
    var html='';
    var stack = [];
    var max_duration = 0;
    for (var i = 0; i < events.length; i++) {
        var startMin = Math.round((events[i].startDate.getHours() + events[i].startDate.getMinutes()/60.0) * 2 ) * 30; // round to the nearest half hour (in minutes)
        var startMax = startMin + events[i].duration;
        var startDay = events[i].weekdayIndex;
        
        // TODO: Take into account the overlapping events !!!!!!!!!!!!!!!!!!!!!!
        // Event #1: 14:00-18:00
        // Event #2: 15:00-16:30
        // if (startMin >= start && startDay == day) { <<<<<<<<<<<<< DOES NOT WORK
        if (startMin == start && startDay == day) {
            console.log('findEvent ' + startMin +' ' + start + ' ' + events[i].startDate);
            stack.push(events[i]);
            max_duration = Math.max(events[i].duration, max_duration);
            
        }
    }
    
    if (max_duration != 0) {
            // Choose the duration max
        // <td> with gray  
        var background_color = (stack.length > 1) ? '#eee' : course_data[stack[0].apogee].background_color;
        html += '<td rowspan="'+ (max_duration / 60 * 2) +'" style="background-color: ' + background_color+';">';
        if (stack.length > 1) {
            html+= '<a title="Warning!! Colliding Events"><i class="fa fa-2x fa-object-ungroup"></i></a>';
        }
        for (var i=0; i < stack.length; i++) {
            // Add each colliding? event
            html += createEventCell(stack[i]);
        }
        // </td>
        html += '</td>';
    }
    
    // Update cells
    for (var t=0; t < max_duration / 30; t++) {
        console.log(max_duration + ' ' + 'table.cells[' + ( (start - 480 )/30 + t) +']['+col+']');
        table.cells[(start - 480 )/30 + t][col]++;
    }

    return html;
}

function createEmptyCell() {
    return '<td class="hidden-sm hidden-xs">&nbsp;</td>';

}


function createEventCell(cal_event) {
    console.log(JSON.stringify(cal_event) );
    var ID = cal_event.ID;
    
    var html = '';
    if (ID[0] === 'C' || ID[0] === 'E') {
        var courseID = calendar_data[ID].apogee;
        var the_course = course_data[courseID];

        html += '<div class="course" style="background-color: '+the_course.background_color+';">';
        html += '<ul class="list-unstyled">';
        html += '<li>';
        html += '<a data-toggle="modal" ';
        html += 'href="javascript:void(0)" ';
        if (ID[0] === 'C') {
            html += 'class="btn btn-danger btn-xs" '; // Color is Red: 'required course' btn-danger and Green: 'elective' btn-success
        }
        else {
            html += 'class="btn btn-info btn-xs" '; // Color is Light blue for Event
        }
        html += 'onclick="displayCalendarModal(\'' + ID + '\')">';
        html += the_course.acronym + '</a>'; // TODO: &nbsp;[' + cal_event.Nbsession +'] ' Sessions number ??
        console.log(cal_event.startDate.getHours()  + ' '+ (parseInt(cal_event.startDate.getHours())   < 10) );
        var hh = (parseInt(cal_event.startDate.getHours())   < 10) ? ('0'+ cal_event.startDate.getHours())   : cal_event.startDate.getHours();
        var mm = (parseInt(cal_event.startDate.getMinutes()) < 10) ? ('0'+ cal_event.startDate.getMinutes()) : cal_event.startDate.getMinutes();
        
        if (hh !== "00") {
            html += '<span class="pull-right" style="font-weight: bold">' + hh + ':' + mm + '-';
            hh = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
            mm = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
            html += hh + ':' + mm + '</span>';
        }
        else {
            html += '<span class="pull-right" style="font-weight: bold">All Day</span>';
        }

        html += '</li>';
        //html += '<li>'+ cal_event.comment +'</li>';
        html += '<li>'+ cal_event.lecturer+'<span class="pull-right">'+cal_event.type+'</span></li>';
        
        // Location: Campus::Bldg@Room
        var tmp = cal_event.location.match(/(.+)::/);
        var campus = tmp[1];
        if (campus !== "None") {
            tmp = cal_event.location.match(/::(.+)@/);
            var bldg = tmp[1];
            tmp = cal_event.location.match(/@(\w+)/);
            var room = tmp[1];
            html += '<li>Campus: '+ campus+'</li>';
            html += '<li>Bldg: '+ bldg  +'</li>';
            html += '<li>Room/Amphi: '+ room  +'</li>';
        }

        html += '</ul>';
        html += '</div>';

    }
    else {
        html += '<div class="course">';
        html += '<ul class="list-unstyled">';
        html += '<li>';
        html += '<a href="javascript:void(0)" class="btn btn-success btn-xs" '; // Color is Red: 'required event' btn-danger and Blue: 'elective' btn-primary
        html += '>'+ cal_event.summary +'</a>';
        console.log(cal_event.startDate.getHours()  + ' '+ (parseInt(cal_event.startDate.getHours())   < 10) );
        var hh = (parseInt(cal_event.startDate.getHours())   < 10) ? ('0'+ cal_event.startDate.getHours())   : cal_event.startDate.getHours();
        var mm = (parseInt(cal_event.startDate.getMinutes()) < 10) ? ('0'+ cal_event.startDate.getMinutes()) : cal_event.startDate.getMinutes();
        html += '<span class="pull-right" style="font-weight: bold">' + hh + ':' + mm + '-';
        hh = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
        mm = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
        html += hh + ':' + mm + '</span>';
        html += '</li>';
        html += '<li>'+cal_event.location+'</li>';
        html += '</ul>';
        html += '</div>';
    }
    return html;
}

