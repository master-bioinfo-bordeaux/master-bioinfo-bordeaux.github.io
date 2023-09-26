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


/***************** F U N C T I O N S  *****************/


const capitalize = s => s && s[0].toUpperCase() + s.slice(1).toLowerCase();

const getCourseType = (type) => calDB.types[type.toUpperCase()] || 'Cours + TD';


function getLecturer(name = "------") {
  for (let i in calDB.people) {
    let upeople = calDB.people[i].toUpperCase().replace(/&[E].*;/,'E').replace(/&[C].*;/,'C');
    if (upeople.indexOf(name) !== -1) {
      return calDB.people[i];
    }
  }
  return name;
}


/**
 * General Syntax: <campus>::<building>@<Room|Amphi}_<name> 
 * Other simplified syntax are available:
 * <building>@<Room|Amphi}_<name> - The campus (Peixotto | Bordes) is deduced from the building's name
 * @<name> - Without specific building, it is assigned `CREMI (A28|A21)` with a `Room` whose name is <name>
 * @ - Returns an object with default props { campus: 'Peixotto', building: 'CREMI (A28|A21)', type: 'Room', name: '???' }
 * <nothing> - Returns an "empty" object with props { campus: '-', building: '-', type: '-', name: '-' }
 *           - The fields about location are not shown (mainly for events like holidays)
 */
function getLocation(loc) {

  const patterns = [
    /^@$/,
    /^@([A-Za-z0-9?]*)/,
    /^([AB][0-9]{1,2})@([A-Za-z0-9?\-]*)/,
    /^([AB][0-9]{2})@(\w*)_([A-Za-z0-9?]*)/,
    /^(\w*)\:\:([A-Za-z0-9?]*)@(\w*)\_([A-Za-z0-9?]*)/
  ];
  
  const props = [
    [],
    ['name'],
    ['building','name'],
    ['building','type','name'],
    ['campus','building','type','name'],
  ]

  const location = patterns.reduce( (accu,regex,i) => {
    const matched = loc.match(regex);
    if ( matched !== null) {
      accu.index = i;
      props[i].forEach( (prop,idx) => accu[prop] = matched[idx+1]);
    }
    return accu;
  }, {index: -1,campus:'-',building:'-',type: '-',name:'-', loc: loc});
  
  // Fill the missing props of `location`
  console.log('LOCATION:',location);
  
  // Must be improved
  if (location.index === 0) {
    location = {campus:'Peixotto',building:'CREMI (A28|A21)',type: 'Room',name:'???'};
  }
  else if (location.index === 1) {
    location.campus = 'Peixotto';
    location.building = 'CREMI (A28|A21)';
    location.type = 'Room';
  }
  else if (location.index === 2) {
    location.campus = (location.building[0].toUpperCase() === 'A') ? 'Peixotto' : 'Bordes';
    location.type = 'Room|Amphi';
  }
  else if (location.index === 3) {
    location.campus = (location.building[0].toUpperCase() === 'A') ? 'Peixotto' : 'Bordes';
  }

  // Check specific buildings { A21: 'A21-OMEGA', A28 : 'A28-CREMI',A30: 'A30-LaBRI'};
  if (location.building === 'A28') {
    location.building = 'A28-CREMI';
  }
  else if (location.building === 'A30') {
    location.building = 'A30-LaBRI';
  }
  
  return location;
}

function yyyymmdd(date) {
  return `${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2,'0')}${date.getDate().toString().padStart(2,'0')}`;
}

function getDate(datetime) {
  // Format with TimeZone ID= DTSTART;TZID=Europe/Paris:20170908T140000
  // Format with GMT = DTSTART:20170908T140000
  // HACK: console.log(datetime);
  const yyyy = parseInt(datetime.substr(0,4));
  const mm = parseInt(datetime.substr(4,2))-1; // Month from 0 to 11
  const dd = parseInt(datetime.substr(6,2));
  const HH = (datetime.length > 8) ? parseInt(datetime.substr(9,2)) : 0;
  const MM = (datetime.length > 8) ? parseInt(datetime.substr(11,2)) : 0;
  
  // UTC Time
  // Timezone forced to Europe/Paris
  const date = (datetime.indexOf('Z') !== -1) ? new Date( Date.UTC(yyyy,mm,dd,HH,MM)) : new Date(yyyy,mm,dd,HH,MM);
  
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    time: `${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`,
    date: date
  }
}

function getDescription(title = "None") {
  return title;
}

function createCalendarID(e) {
  let login = 'import';
  let id = 'None@import';
  if (e.acronym) {
    let timestamp = new Date().toISOString().replace(/[-:.Z]/g,'');
    timestamp = timestamp.substr(0,timestamp.length -3) + (++EVENT_COUNT).toString().padStart(3,'0');
    id = ( (e.isCourse) ? "C" : "E") + e.year + e.tracks + timestamp + "@" + login; 
  }
  return id;
}

/**
 * Create event for Master Agenda
 *
 * The syntax is the following for the event/course description:
 * - Course: <Acronym>**<Lecturer>**<Type>**<Group>
 * - Event : <Acronym>**<Description>**<Lecturer>
 *
 * For the location, the syntax is:
 * <campus>::<building>@<[Room|Amphi]_<number_or_name>
 * Ex: Talence::A28-CREMI@Room_999
 *
 */
function createEvent(ueID,e) {

  let ev = {};
  ev.date_start  = `${e.start.year}-${e.start.month.toString().padStart(2,'0')}-${e.start.day.toString().padStart(2,'0')}T`;
  ev.date_end    = `${e.end.year}-${e.end.month.toString().padStart(2,'0')}-${e.end.day.toString().padStart(2,'0')}T`;
  ev.date_start += e.start.time;
  ev.date_end   += e.end.time;

  ev.start = e.start;
  ev.end = e.end;
  
  const course = Object.values(calDB.courses).filter(c => c.source === ueID)[0];
  // HACK console.log(course);
  // HACK console.log(e);
  
  ev.apogee = course.apogee;
  ev.acronym = course.acronym;
  
  let words = e.content.split('**'); 

  ev.isCourse = calDB.courses[ev.apogee].isCourse;
  ev.year = calDB.courses[ev.apogee].year;
  ev.tracks = calDB.courses[ev.apogee].tracks.substr(2,2);

  ev.allDay = e.allDay;
  ev.lecturer = getLecturer(words[1]);
  ev.type = getCourseType(words[2]);
  ev.location = e.location || 'Unknown::Unknown@Room_unknown';
  ev.title = e.title;
  ev.description = e.description; // Sometimes used by Events
  ev.ID = createCalendarID(ev);
  ev.group = capitalize(words[3]) || "All";
  return ev;
}

/**
 * Parse ics file
 *
 * @author: Jean-Christophe Taveau
 */
function parse_ics(ueID,data) {
  var all_events = {};
  var ev;
  const rows = data.split(/\r?\n/);
  for (let i = 0; i < rows.length;i++) {
    var str = rows[i];
    if (str.indexOf('BEGIN:VEVENT') !== -1) {
      // New event
      ev = {sequence:0};
    }
    else if (str.indexOf('UID') !== -1) {
      console.log('Process Event ',str);
    }
    else if (str.indexOf('DTSTART') !== -1 && ev !== undefined) {
      const words = str.split(/[;:]+/);
      // Check if event is all the day
      ev.allDay =  (words.length === 3 && words[1] === 'VALUE=DATE') ? true : false;
      // HACK console.log(words);
      ev.start = getDate(words[words.length - 1]);
      console.info(ev);
    }
    else if (str.indexOf('DTEND') !== -1) {
      const words = str.split(/[;:]+/);
      // HACK console.log(words);
      ev.end = getDate(words[words.length - 1]);
    }
    else if (str.indexOf('SUMMARY') !== -1) {
      ev.content = str.substr(str.indexOf(':')+1);
    }
    else if (str.indexOf('LOCATION') !== -1 && ev !== undefined) {
      ev.location = getLocation(str.substr(str.indexOf('TION:')+5)) || {campus: 'None',building:'???', type: 'Room',name:'???'};
    }
    else if (str.indexOf('DESCRIPTION') !== -1) {
      if (ueID.includes('MS_')) {
        // Multiple Lines is possible
        const matches = data.match(/DESCRIPTION:.*?\'\'\'([\s\S]*?)\'\'\'/);
        if (Array.isArray(matches) && matches.length > 1) {
          const cleaned = matches[1].split(/[\n\r]\ /).join('').replaceAll('\r','');
          console.info('MULTILINE',cleaned);
          const splits = cleaned.trim().split(']');
          ev.title = splits[0].slice(1);
          ev.description = splits[1];
        }
        else {
          ev.title = str.substr(str.indexOf(':')+1);
          ev.description = '';
        }
      }
      // For course only
      else {
        ev.title = str.substr(str.indexOf(':')+1);
        ev.description = '';
      }

    }
    else if (str.indexOf('EXDATE') !== -1) {
      // Exception dates for periodicity (RRULE)
      const words = str.split(/[;:]+/).filter( w => /^[0-9T]+$/.test(w) );
      console.log('EXDATES',words);
      if (ev.exdates) {
        ev.exdates.push(words[0].split('T')[0]);
      }
      else {
        ev.exdates = [words[0].split('T')[0]];
      }
    }
    else if (str.indexOf('RRULE') !== -1) {
      // TODO
      const params = str
        .match(/RRULE:(.*)/)[1]
        .split(';')
        .reduce( (result,pair) => {
          const kv = pair.split('=');
          result[kv[0].trim().toLowerCase()] = kv[1].trim();
          return result;
        },{});
      ev.periodic = true;
      if (!ev.exdates) {
        ev.exdates = [];
      }
      ev = {...ev,...params};
      console.log('PERIODIC',ev);
    }
    else if (str.indexOf('END:VEVENT') !== -1) {
      if (ev.periodic && ev.freq === 'WEEKLY') {
        // Duplicate the event in function of periodicity
        const today = {
          y: ev.start.date.getFullYear(),
          m: ev.start.date.getMonth(),
          d: ev.start.date.getDate(),
        };
        for (let i=0; i < +ev.count;i++) {
          let days = 7 * i;
          let nextDate = new Date(today.y, today.m, today.d+days);
          // Check if exceptions
          if (!ev.exdates.includes(yyyymmdd(nextDate))) {
            //console.log(ev.start.date,nextDate, `${yyyymmdd(nextDate)}`);
            // Create copy of original event
            let evi = {...ev};
            // Update start and end dates
            evi.start.year = nextDate.getFullYear();
            evi.start.month = nextDate.getMonth() + 1;
            evi.start.day = nextDate.getDate();
            evi.start.date = nextDate;
            evi.end.year = nextDate.getFullYear();
            evi.end.month = nextDate.getMonth() + 1;
            evi.end.day = nextDate.getDate();
            evi.end.date = nextDate;
            // Create object
            let obj = createEvent(ueID,evi);
            all_events[obj.ID] = obj;
          }
        }

      }
      else {
        let obj = createEvent(ueID,ev);
        all_events[obj.ID] = obj;
      }

    }
  } // End of for each row
  return all_events;
}

/*
Example #1: Periodic (Daily) the whole day
----------------------------------------------
BEGIN:VEVENT
DTSTART;VALUE=DATE:20220221
DTEND;VALUE=DATE:20220222
RRULE:FREQ=DAILY;UNTIL=20220225
DTSTAMP:20220211T090705Z
UID:01t0itj2fm76mqkuqg97i9gdds@google.com
CREATED:20220211T090538Z
DESCRIPTION:
LAST-MODIFIED:20220211T090638Z
LOCATION:
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:Vacances Hiver
TRANSP:TRANSPARENT
END:VEVENT


Example #2: Periodic (Weekly) at a given time
-----------------------------------------------
BEGIN:VEVENT
DTSTART;TZID=Europe/Paris:20220906T080000
DTEND;TZID=Europe/Paris:20220906T100000
RRULE:FREQ=WEEKLY;WKST=MO;UNTIL=20221101T225959Z;BYDAY=TU
DTSTAMP:20220211T090357Z
UID:27dv9lqhhqdgodcapjcoq8m1ia@google.com
CREATED:20220211T090303Z
DESCRIPTION:
LAST-MODIFIED:20220211T090303Z
LOCATION:
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:OBI**TEST
TRANSP:OPAQUE
END:VEVENT

*/
