

/************************************
 * Jean-Christophe Taveau
 * Calendar
 * 2015
 ************************************/

var calendar_data = null;
var table = new TableCal();

initCalendar();


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
            processCalendarData();
        }
    };
    xhr.open("GET", "http://master-bioinfo-bordeaux.github.io/data/calendar.json", true);
    xhr.send(null);

}

function processCalendarData() {
    
    var y = parseInt(document.getElementById("calendar").dataset.year);
    var m = parseInt(document.getElementById("calendar").dataset.month);
    var d = parseInt(document.getElementById("calendar").dataset.day);

    updateCalendar(y,m,d);

}

function updateCalendar(y,m,d) {
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
    // console.log(calendar_data);
    var today = new Date(y,m,d);
    var weekevents = [];
    // Search events occuring during this week 
    for (var index in calendar_data) {
        var element = calendar_data[index];
        var startDate = new Date(
            parseInt(element.date_start.substr(0,4)),
            parseInt(element.date_start.substr(4,2)) - 1,
            parseInt(element.date_start.substr(6,2)),
            parseInt(element.date_start.substr(9,2)),
            parseInt(element.date_start.substr(11,2)) 
        );
        var endDate   = new Date(
            parseInt(element.date_end.substr(0,4)),
            parseInt(element.date_end.substr(4,2)) - 1,
            parseInt(element.date_end.substr(6,2)),
            parseInt(element.date_end.substr(9,2)),
            parseInt(element.date_end.substr(11,2))
        );
        
        // From MON to FRI
        for (var i = 1; i <=5; i++) {
            var day = new Date(y,m,d - today.getDay() + i);
            var dayD       = Math.ceil(day.getTime()/1000/3600/24);       // Days number since UTC
            var startDateD = Math.ceil(startDate.getTime()/1000/3600/24); // Days number since UTC
            var endDateD   = Math.ceil(endDate.getTime()/1000/3600/24);   // Days number since UTC
            
            if ( dayD >= startDateD && dayD <= endDateD ) { // HACK: What about multi-days event ?
                console.log(day + ' creates an event with ' + element.ID + ' ' +  element.summary);
                element.weekdayIndex = i;
                var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
                element.startDate = startDate;
                element.endDate   = endDate;
                element.duration     = Math.ceil(timeDiff / (1000 * 60));
                // parseInt(element.date_end.substr(9,4) - parseInt(element.date_start.substr(9,4)));
                weekevents.push(element);
            }
        }
    }
    // Sort events by time from 0800 to 1900
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

    console.log(weekdays) ;
    return weekdays;
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
    
    table.reset();
    updateCalendar(y,m,d);
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

    table.reset();
    updateCalendar(y,m,d);
}



// From pikaday 
// https://github.com/dbushell/Pikaday/blob/master/pikaday.js
// This formula follows the US norm 
function getWeekNum(y,m,d) {
    var firstjan = new Date(y, 0, 1);
    return Math.ceil((((new Date(y, m, d) - firstjan) / 86400000) + firstjan.getDay()+1)/7);
}

function getISOWeekNum(y,m,d) {
/**
 * Get the ISO week date week number
 * From http://techblog.procurios.nl/k/n618/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
 * By Taco van den Broek
 */
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
    var courseID = calendar_data[ID].summary;
    var the_course = course_data[courseID];
    var image = 'course_header';
    var lang = (navigator.language === 'fr') ? 'fr' : 'en';
    
    if (the_course.link !== undefined) {
        the_course = course_data[the_course.link];
    }

    var html = '';
    html += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+the_course.title+'<span class="pull-right"><i class="fa fa-graduation-cap"> </i>&nbsp;'+the_course.ects+' ECTS&nbsp;&nbsp;&nbsp;</span></h4>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/'+image+'.jpg" alt=""></p>';
    html += '';
    html += the_course.contents[lang];
    html += '<a class="pull-right" href="' + the_course.html + '" target="_blank"> <i class="fa fa-university fa-2x"></i></a>&nbsp;&nbsp;<br>';
    html += '</div>';
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog
    html += '</div>'; // modal

    return html;
}

function createEventModal(ID) {
    var html = '';
    html += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+title+'</h4>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/'+image+'.jpg" alt=""></p>';
    html += '';
    html += 'Here is the contents of the event'; // HACK
    html += '</div>';
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog
    html += '</div>'; // modal

    return html;
}

function createEventCells(events) {
    console.log("EVENTS OF THIS WEEK");
    console.log(events);
    var html='';
    // ROW 0 = ALL DAY events
    
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
            if (contents ==='' && table.cells[i][column] == 0) {
                html += createEmptyCell();
            }
            else {
                html += contents;
            }
        }
        html += '</tr>';
        console.log(table);
    }
    document.getElementById('calendar-lg-body').innerHTML=html;

}

function findEvent(events,start,day) {
    var html='';
    for (var i = 0; i < events.length; i++) {
        var startMin = events[i].startDate.getHours()*60+events[i].startDate.getMinutes();
        var startDay = events[i].weekdayIndex;
        if (startMin == start && startDay == day) {
            html += createEventCell(events[i]);
            for (var t=0; t < events[i].duration / 30; t++) {
                console.log('table ',(start - 480 )/30 +t,' ',day);
                table.cells[(start - 480 )/30 + t][day]++;
            }
        }
    }
    return html;
}

function createEmptyCell() {
    return '<td class="hidden-sm hidden-xs">&nbsp;</td>';

}


function createEventCell(cal_event) {
    console.log(cal_event);
    var ID = cal_event.ID;
    
    var html = '';
    if (ID[0] === 'C') {
        var courseID = calendar_data[ID].summary;
        var the_course = course_data[courseID];

        html += '<td rowspan="'+ (cal_event.duration / 60 * 2) +'" style="background-color: '+the_course.background_color+';">';
        html += '<div class="course" style="background-color: '+the_course.background+';">';
        html += '<ul class="list-unstyled">';
        html += '<li>';
        html += '<a data-toggle="modal" ';
        html += 'href="javascript:void(0)" ';
        html += 'class="btn btn-danger btn-xs" '; // Color is Red: 'required event' btn-danger and Blue: 'elective' btn-primary
        html += 'onclick="displayCalendarModal(\'' + cal_event.ID + '\')">';
        html += the_course.acronym + '</a>&nbsp;[' + cal_event.Nbsession +'] '; // Sessions number ??
        console.log(cal_event.startDate.getHours()  + ' '+ (parseInt(cal_event.startDate.getHours())   < 10) );
        var hh = (parseInt(cal_event.startDate.getHours())   < 10) ? ('0'+ cal_event.startDate.getHours())   : cal_event.startDate.getHours();
        var mm = (parseInt(cal_event.startDate.getMinutes()) < 10) ? ('0'+ cal_event.startDate.getMinutes()) : cal_event.startDate.getMinutes();
        html += '<span class="pull-right" style="font-weight: bold">' + hh + ':' + mm + '-';
        hh = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
        mm = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
        html += hh + ':' + mm + '</span>';
        html += '</li>';
        html += '<li>'+cal_event.lecturer+'</li>';
        html += '<li>'+cal_event.location+'</li>';
        html += '</ul>';
        html += '</div>';
        html += '</td>';
    }
    else {
        background_color = '#ccc';
        html += '<td rowspan="'+ (cal_event.duration / 60 * 2) +'" style="background-color: '+background_color+';">';
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
        html += '</td>';

    }

    return html;
}
