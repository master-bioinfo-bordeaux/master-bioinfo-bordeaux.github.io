/************************************
 * Jean-Christophe Taveau
 * Calendar
 * 2015
 ************************************/

initCalendarHeader();


function initCalendarHeader() {
    var now = new Date();

    var cal = document.getElementById("calendar");
    cal.dataset.year  = now.getFullYear();
    cal.dataset.month = now.getMonth();
    cal.dataset.day   = now.getDate();
    
    updateCalendarHeader();
    
}

function updateCalendarHeader() {
    var y = parseInt(document.getElementById("calendar").dataset.year);
    var m = parseInt(document.getElementById("calendar").dataset.month);
    var d = parseInt(document.getElementById("calendar").dataset.day);
    
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
    updateCalendarHeader();
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

    updateCalendarHeader();
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


