
/*
 *  calendarmgr: Calendar Manager for the Master of Sciences in BioInformatics, Bordeaux, France Web Site
 *  Copyright (C) 2015-2017  Jean-Christophe Taveau.
 *
 *  This file is part of calendarmgr
 *
 * This program is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by 
 * the Free Software Foundation, either version 2 of the License, or 
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, 
 * but WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with calendarmgr.  If not, see <http://www.gnu.org/licenses/>.
 *
 *../node_modules/.bin/babel tool_ics.js -o tool_ics_j5.js
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 

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
 
function setMasterOptions(extension) {
    if (typeof localStorage != undefined) {
        var e = document.getElementById('masterYear' + extension) || 1;
        var l = document.getElementById('masterTrack'+ extension) || 1;
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


function parseIcal(txt) {
  let json = [];
  // Parse ical
  
  
  return json;
}

/******************************************************
 *
 * C A L E N D A R
 *
 ******************************************************/


var calendar_data = {};
var table = new TableCal();
let EVENT_COUNT = 0;

initCalendar();

/**
 *
 * Constructor
 *
 **/
 
function initCalendar() {
    const now = new Date();
    
    let cal = document.getElementById("calendar");
    cal.dataset.year  = now.getFullYear();
    cal.dataset.month = now.getMonth();
    cal.dataset.day   = now.getDate();
    
    // Check Spring of Fall Semesters
    const semesters = (cal.dataset.month < 8) ? ['S08', 'S10'] : ['S07','S09'];
    // HACK console.log(semesters);
    
    // Load M1 + M2 events
    const ues = Object.values(calDB.courses).filter( c => semesters.includes(c.semester) );
    // HACK console.log(ues);
    for (let ue of ues) {
      loadCalendarICS(ue.source);
    }

    // Load M2 events
    loadCalendarICS('MS_VACANCES');

}

function loadCalendarICS(ueID) {
    // HACK console.log('LOAD ' + ueID);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            let data = parse_ics(ueID,xhr.responseText);
            // Merge events...
            Object.assign(calendar_data,data);
            updateCalendar();
        }
    };
    const path = "https://master-bioinfo-bordeaux.github.io/data/";
    xhr.open("GET", `${path}${ueID}.ics`, true);
    xhr.send(null);
}

function loadCalendarData(filename) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            let data = JSON.parse(xhr.responseText); // Données textuelles récupérées
            // Merge events...
            Object.assign(calendar_data,data); // ECMAScript 2015
            updateCalendar();
        }
    };
    xhr.open("GET", "https://master-bioinfo-bordeaux.github.io/data/"+ filename, true);
    xhr.send(null);

}


function updateCalendar() {

    // HACK console.log(calendar_data);
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
    var html = '<tr><th class="hidden-xs">Hour</th>';
    for (var i = 0; i < days.length;i++) {
        html +='<th class="centered">'+days[i]+'</th>';
    }
    html +='</tr>';
    element.innerHTML = html;
    
    // Update Week Number
    document.getElementById('weeknum').innerHTML = 'Week ' + getISOWeekNum(y,m,d);
    document.getElementById('weeknum-small').innerHTML = getISOWeekNum(y,m,d);
}

function updateCalendarBody(y,m,d) {
  const masterYear  = parseInt(localStorage.masterYear) || 1; // Default M1
  const masterTrack = parseInt(localStorage.masterTrack) || 1; // Default track: C++Bio=1; GenEco=2
  
  // HACK  console.log(calendar_data);
  var today = new Date(y,m,d);
  var weekdays = [];
  weekdays[0] = {events:[],boxes:[]}; // MON
  weekdays[1] = {events:[],boxes:[]}; // TUE
  weekdays[2] = {events:[],boxes:[]}; // WED
  weekdays[3] = {events:[],boxes:[]}; // THU
  weekdays[4] = {events:[],boxes:[]}; // FRI

  // Search events occuring during this week 
  
  for (let index in calendar_data) {
    const element = calendar_data[index];
    element.MSYear  = parseInt(element.ID[1]);
    element.MSTrack = parseInt(element.ID.substr(2,2),16);
    element.weekdayIndex = -1;
    // HACK: console.log(element);
    if (  (element.MSYear == masterYear || element.MSYear === 3) 
      && ((element.MSTrack & masterTrack) === masterTrack || (element.MSTrack & masterTrack*16) === masterTrack*16 ) ) {
      const startDate = new Date(
        element.start.year, element.start.month, element.start.day,
        element.start.hour,element.start.minute
      );
      const endDate = new Date(element.end.year, element.end.month, element.end.day,element.end.hour,element.end.minute);

      // HACK: console.log('START ' + element.allDay);
  
      // Gather events by weekdays from MON to FRI
      for (let i = 1; i < 6; i++) {
        const day = new Date(y,m,d - today.getDay() + i);
        const dayD       = day.toCalString().substr(0,10);  // Days number since UTC
        const startDateD = element.date_start.substr(0,10); // Days number since UTC
        const endDateD   = element.date_end.substr(0,10);   // Days number since UTC
        // HACK: console.log('DAYS',dayD,startDateD,endDateD,day, day.toCalString());
        if ( dayD >= startDateD && dayD <= endDateD ) { // HACK: What about multi-days event ?
          // HACK: console.log(day + ' creates an event with ' + element.ID + ' ' +  element.apogee);
          const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
          element.startDate = startDate;
          element.endDate   = endDate;
          element.overlap   = false;

          // Round to the nearest half hour (in minutes)
          element.duration  = Math.round(timeDiff / (1000 * 60 * 60) * 2 ) * 30; 
          if (element.weekdayIndex == -1) {
            element.weekdayIndex = i;
            weekdays[i-1].events.push(element);
          }
          else {
            // HACK console.log('MULTIDAY',element);
            // Already exists aka multiday event
            // Copy element
            var elementClone = element.constructor();
            for (let attr in element) {
                if (element.hasOwnProperty(attr)) elementClone[attr] = element[attr];
            }
            elementClone.weekdayIndex = i;
            weekdays[i-1].events.push(elementClone);
          }
        } // if
      } // for
    } // if
  } // for

  // Clean up daily events
  for (var i = 0; i < 5; i++) {
    // 1- Check Overlap(s)
    let a_day = weekdays[i];
    for (let j = 0; j < a_day.events.length; j++) {
      if (!a_day.events[j].allDay && !a_day.events[j].overlap) {
        var box = {
          startDate: a_day.events[j].startDate,
          endDate  : a_day.events[j].endDate,
          weekdayIndex : a_day.events[j].weekdayIndex,
          children: []
        };
        box.children.push(a_day.events[j]);
        a_day.boxes.push(box);
        var start = box.startDate.getTime();
        var end   = box.endDate.getTime();
        for (let k = j + 1; k < a_day.events.length; k++) {
          // HACK: console.log('OVERLAP ',k,start,end,a_day.events[k].acronym,a_day.events[k].startDate.getTime(),a_day.events[k].endDate.getTime() );
          if (start <= a_day.events[k].endDate.getTime() && end >= a_day.events[k].startDate.getTime() && !a_day.events[k].allDay) {
            a_day.events[k].overlap = true;
            box.startDate = new Date(Math.min(box.startDate,a_day.events[k].startDate) );
            box.endDate   = new Date(Math.max(box.endDate, a_day.events[k].endDate) );
            box.children.push(a_day.events[k]);
            start = box.startDate.getTime();
            end   = box.endDate.getTime();
          }
        }
        var timeDiff = Math.abs(box.endDate.getTime() - box.startDate.getTime());
        box.duration  = Math.round(timeDiff / (1000 * 60 * 60) * 2 ) * 30; // Round to the nearest half hour (in minutes)
      }
    }
      
      /*
      console.log('BOX ' +i+':');
      if (weekdays[i].boxes[0] !== undefined) {
          console.log(weekdays[i].boxes[0].startDate.toString() + ' - ' +  weekdays[i].boxes[0].endDate.toString());
           console.log(weekdays[i].boxes[0]);
      }
      */
      
    // 2- Sort events by time from 0800 to 1900
    weekdays[i].boxes.sort(function sort(a,b) {
        if (a.startDate.getTime() > b.startDate.getTime() ) {
            return 1;
        }
        else if (a.startDate.getTime() < b.startDate.getTime() ) {
            return -1;
        }
        else {
            return 0;
        }
    });
  }

  createEventCells(weekdays);
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

    // HACK  console.log(weekdays) ;
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
  const date = new Date(y,m,d);
  // Create a copy of this date object
  const target  = new Date(y,m,d);

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
    // HACK: console.log('event ' + eventID + ' ' + type);
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
    // HACK: console.log(el);
   
    // el.modal('show');
    $('#calendarModal').modal('show');
}

function createCourseModal(ID) {
    // HACK: console.log(calendar_data[ID]);
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
    html += '<h4 class="modal-title">'+the_course.short;
    html += '<span class="pull-right"><i class="fa fa-graduation-cap"> </i>&nbsp;'+the_course.ects+' ECTS&nbsp;&nbsp;&nbsp;</span>';
    html += '</h4>';
    html += '</div>'; // modal-header
    html += '<div class="modal-body">';
    html += '<div style="width:570px;height:80px;overflow:hidden">';
    html += '<img class="img-responsive" style="margin-top:-100px" src="img/'+image+'" alt="">';
    html += '</div>';
    html += '<h2>'+ the_course.title +'</h2>';
    html += '<ul class="nav nav-tabs">';
    html += '<li class="active"><a href="#en" data-toggle="tab">En</a></li>';
    html += '<li><a href="#fr" data-toggle="tab">Fr</a></li>';
    html += '<li><a href="#id" data-toggle="tab"><i class="fa fa-gears"></i></a></li></ul>';
    html += '<div class="tab-content clearfix">',
    html += '<div class="tab-pane active" id="en">'
    html += '<h3>Content</h3>' + (the_course.contents.en.program || 'Coming soon');
    html += '<h3>Objectives</h3>' + (the_course.contents.en.objectives || 'Coming soon');
    html += '<h3>Skills</h3>' + (the_course.contents.en.skills || 'Coming soon');
    html += '</div>';
    html += '<div class="tab-pane" id="fr">'
    html += '<h3>Programme</h3>' + (the_course.contents.fr.program || 'Bientôt disponible');
    html += '<h3>Objectifs</h3>' + (the_course.contents.fr.objectives || 'Bientôt disponible');
    html += '<h3>Compétences acquises</h3>' + (the_course.contents.fr.skills || 'Bientôt disponible');
    html += "</div>";
    html += '<div class="tab-pane" id="id">'
    html += '<br><dl class="dl-horizontal">';
    html += '<dt>Title:</dt><dd>'+ the_course.title +'</dd>';
    html += '<dt>Short Title:</dt><dd>'+ the_course.short +'</dd>';
    html += '<dt>Acronym:</dt><dd>'+ the_course.acronym +'</dd>';
    html += '<dt>Language:</dt><dd>'+ the_course.language +'</dd>';
    html += '<dt>Credits:</dt><dd>'+ the_course.ects +' ECTS</dd>';
    html += '<dt>Apogee:</dt><dd>'+ the_course.id +'</dd>';
    html += '</dl>';
    html += "</div>";
    html += "</div><hr>";
    html += '<a class="pull-right" href="' + (university_path + the_course.html) + '" target="_blank"> <i class="fa fa-university fa-2x"></i></a>&nbsp;&nbsp;';
    // html += '<button class="pull-right" href="' + (university_path + the_course.html) + '" target="_blank"> Moodle</button>&nbsp;&nbsp;<br>';
    html += '</div>'; // modal-body
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog

/*    var html = '';
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
*/

    return html;
}

function createEventModal(ID) {
    var the_event = course_data[calendar_data[ID].apogee];

    const html = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">${the_event.title} <span class="pull-right"><i class="${the_event.icon}"> </i>&nbsp;&nbsp;&nbsp;&nbsp;</span></h4>
        </div>
        <div class="modal-body">
          <p><img class="img-responsive" src="img/${the_event.image}" alt=""></p>
          <h2>${calendar_data[ID].title}</h2>'; 
          ${calendar_data[ID].description} 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div> 
    </div>`; 

    return html;
}

function createEventCells(days) {
    //console.log("EVENTS OF THIS WEEK");
    // HACK: console.log(days);
    
    var html='';
    // ROW 0 = ALL DAY events
    html +='<tr><td  class="hidden-xs">All Day</td>';
    for (var column = 0; column < 5; column++) {
        html +='<td>';
        // AllDay events
        for (var i = 0; i < days[column].events.length; i++) {
            if ( days[column].events[i].weekdayIndex == (column+1) && days[column].events[i].allDay === true) {
                html += createEventCell(days[column].events[i]);
            }
        }
        html +='</td>';
    }
    html +='</tr>';
    

    // ROW 1 to n = From 08:00 to 19:00 in minutes
    for (var i = 0; i < TableCal.NROWS; i++) {
        var row = i*30 + 480;
        html += '<tr>';
        // HACK: console.log(row);
        if ( (row % 60) == 0) {
            html += '<td class="hidden-xs" rowspan="2">'+ ( (Math.ceil(row/60) < 10) ? ('0'+Math.ceil(row/60) ) : Math.ceil(row/60) )+':00</td>';
        }
        for (var column = 0; column < 5; column++) {
            // Regular events
            var contents = findEvent(days[column].boxes,row,column);
            if (table.cells[i][column] === 0) {
                html += createEmptyCell();
            }
            else {
                html += contents;
            }
        }
        html += '</tr>';
        // HACK: console.log(table);
    }
    
    // Last ROW = EVENING events
    html +='<tr><td class="hidden-xs">Evening</td><td></td><td></td><td></td><td></td><td></td></tr>';
    

    document.getElementById('calendar-lg-body').innerHTML=html;

}

function findEvent(events,start,col) {
    var day = col + 1 // col#0 = MONDAY = day#1
    var html='';
    var stack = [];
    var max_duration = 0;
    var found;
    for (var i = 0; i < events.length; i++) {
        var startMin = Math.round((events[i].startDate.getHours() + events[i].startDate.getMinutes()/60.0) * 2 ) * 30; // round to the nearest half hour (in minutes)
        var startMax = startMin + events[i].duration;
        var startDay = events[i].weekdayIndex;
        
        // TODO: Take into account the overlapping events !!!!!!!!!!!!!!!!!!!!!!
        // Event #1: 14:00-18:00
        // Event #2: 15:00-16:30
        // if (startMin >= start && startDay == day) { <<<<<<<<<<<<< DOES NOT WORK
        if (startMin == start && startDay == day) {
            // HACK: console.log('findEvent ' + startMin +' ' + start + ' ' + events[i].startDate + ' ' + events[i].children.length);
            found = events[i];
            max_duration = Math.max(events[i].duration, max_duration);
            
        }
    }
    
    if (found !== undefined) {
        // Choose the duration max
        // <td> with gray  
        var background_color = (found.children.length > 1) ? '#eee' : course_data[found.children[0].apogee].background_color;
        html += '<td rowspan="'+ (found.duration / 60 * 2) +'" style="background-color: ' + background_color+';">';
        if (found.children.length > 1) {
            // HACK: console.log('Overlapping ',found.children);
            html+= '<a title="Overlapping Events"><i class="fa fa-2x fa-object-ungroup"></i></a>';
            for (let i=0; i < found.children.length; i++) {
                // Add each colliding event
                html += createEventCell(found.children[i]);
            }
        }
        else {
            html += createEventCell(found.children[0]);
        }

        // </td>
        html += '</td>';
        
        // Update cells
        for (let t=0; t < found.duration / 30; t++) {
            // HACK: console.log(max_duration + ' ' + 'table.cells[' + ( (start - 480 )/30 + t) +']['+col+']');
            // HACK: console.log(t,start,(start - 480 )/30 + t,col);
            table.cells[(start - 480 )/30 + t][col]++;
        }
        
    }
    


    return html;
}

function createEmptyCell() {
    return '<td>&nbsp;</td>';

}


function createEventCell(cal_event) {
    // HACK: console.log(JSON.stringify(cal_event) );
    var ID = cal_event.ID;
    
    var html = '';
    if (ID[0] === 'C' || ID[0] === 'E') {
        var courseID = calendar_data[ID].apogee;
        var the_course = course_data[courseID];
        var masterTrack = parseInt(localStorage.masterTrack) || 1; // Default track: C++Bio=1; GenEco=2,BAO=4;BSC=8
        // HACK: console.log('TRACK ' + masterTrack + ' ' + the_course.tracks + '='+parseInt(the_course.tracks,16) + ' '
        // +((parseInt(the_course.tracks,16) & masterTrack)) );

        html += '<div class="course" style="background-color: '+the_course.background_color+';">';
        html += '<ul class="list-unstyled">';
        html += '<li>';
        html += '<a data-toggle="modal" ';
        html += 'href="javascript:void(0)" ';
        if (ID[0] === 'C' && (parseInt(the_course.tracks,16) & masterTrack) === masterTrack) {
            html += 'class="btn btn-danger btn-xs" '; // Color is Red: 'required course' btn-danger 
        }
        else if (ID[0] === 'C' && (parseInt(the_course.tracks,16) & masterTrack*16) === masterTrack*16) {
            html += 'class="btn btn-primary btn-xs" '; // Color is Green: 'elective' btn-success
        }
        else {
            html += 'class="btn btn-info btn-xs" '; // Color is Light blue for Event
        }
        html += 'onclick="displayCalendarModal(\'' + ID + '\')">';
        html += the_course.acronym + '</a>'; // TODO: &nbsp;[' + cal_event.Nbsession +'] ' Sessions number ??
        // HACK: console.log(cal_event.startDate.getHours()  + ' '+ (parseInt(cal_event.startDate.getHours())   < 10) );
        var hh = (parseInt(cal_event.startDate.getHours())   < 10) ? ('0'+ cal_event.startDate.getHours())   : cal_event.startDate.getHours();
        var mm = (parseInt(cal_event.startDate.getMinutes()) < 10) ? ('0'+ cal_event.startDate.getMinutes()) : cal_event.startDate.getMinutes();
        
        if (hh !== "00") {
            var hh_lg = hh;
            var mm_lg = mm;
            html += '<span class="pull-right  hidden-sm hidden-xs" style="font-weight: bold">' + hh_lg + ':' + mm_lg + '-';
            hh_lg = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
            mm_lg = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
            html += hh_lg + ':' + mm_lg + '</span>';
            html += '<li class="hidden-lg hidden-md" style="font-weight: bold">' + hh + ':' + mm + '</li>';
            hh = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
            mm = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
            html += '<li class="hidden-lg hidden-md" style="font-weight: bold">' + hh + ':' + mm + '</li>';

        }
        else {
            html += '<span class="pull-right  hidden-sm hidden-xs" style="font-weight: bold">All Day</span>';
            html += '<li class="hidden-lg hidden-md" style="font-weight: bold">All Day</li>';
        }

        html += '</li>';
        //html += '<li>'+ cal_event.comment +'</li>';
        html += `<li class=" hidden-sm hidden-xs">${cal_event.lecturer}<span class="pull-right">${cal_event.type}</span></li>`;
        html += '<li">Grp: '+ cal_event.group+'</li>';
        
        // Location: Campus::Bldg@[Room\Amphi]_name
        if (cal_event.location.campus !== '-' 
          && cal_event.location.building !== '-' 
          && cal_event.location.type !== '-' 
          && cal_event.location.name !== '-' ) {
          
            let campus = cal_event.location.campus;
            let bldg = cal_event.location.building;
            let room = cal_event.location.type;
            let room_name = cal_event.location.name;
            html += '<li class="hidden-sm hidden-xs">Campus: '+ campus+'</li>';
            html += '<li class="hidden-sm hidden-xs">Bldg: '+ bldg  +'</li>';
            html += '<li class="hidden-lg hidden-md">'+ bldg  +'</li>';
            html += '<li>'+room +': '+ room_name  +'</li>';
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
        // HACK: console.log(cal_event.startDate.getHours()  + ' '+ (parseInt(cal_event.startDate.getHours())   < 10) );
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

