'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

/*****************  R E Q U I R E M E N T  *****************/

var fs = require('fs');
var calDB = require('./calmgr.json');

/***************** F U N C T I O N S  *****************/

function getIDs() {
  var acronym = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'None';

  var a = acronym;
  var apogee = '4TBI';
  if (a.indexOf('[') !== -1) {
    // This is an event
    apogee += a.substring(0, a.indexOf('['));
    return [calDB.courses[apogee].apogee, calDB.courses[apogee].acronym];
  }
  for (var i in calDB.courses) {
    if (calDB.courses[i].acronym.slice(5, calDB.courses[i].acronym.length).toUpperCase() === a.toUpperCase()) {
      return [calDB.courses[i].apogee, calDB.courses[i].acronym];
    }
  }
  return [a, a];
}

function getYearAndTracks(acronym) {
  var code = acronym.substr(acronym.indexOf('[') + 1, 3);
  return [code[0], code.substring(1)];
}

function getLecturer() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "------";

  for (var i in calDB.people) {
    var upeople = calDB.people[i].toUpperCase().replace(/&[E].*;/, 'E').replace(/&[C].*;/, 'C');
    if (upeople.indexOf(name) !== -1) {
      return calDB.people[i];
    }
  }
  return name;
}

function getCourseType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Cours+TD";

  /* CI = Cours+TD, CM, TD, TP, TDM */
  if (type === '' || type === '-' || type === 'CI') {
    return "Cours+TD";
  } else if (type === 'TDM') {
    // Synonym
    return 'TD machine';
  } else if (type === 'CM' || type === 'COURS') {
    // Synonym
    return 'Cours';
  } else if (type === 'CONFERENCE' || type === 'MEETING') {
    // Synonym
    return 'Conference';
  }
  return type;
}

function getLocation() {
  var loc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "None::None@Room_000";

  var keywords = { NONE: 'None', TALENCE: 'Talence', CARREIRE: 'Carreire', INRA: 'INRA', ISVV: 'ISVV', 'ROOM': 'Room', AMPHI: 'Amphi' };
  var buildings = { A21: 'A21-OMEGA', A29: 'A29-CREMI', A30: 'A30-LaBRI' };
  var campus = void 0;
  var building = void 0;
  var type = void 0;
  var name = void 0;
  // Check common mistakes - No separator or redundant separators/keywords
  if (loc.indexOf('@') === -1 || loc.indexOf('::') === -1 || loc.indexOf('_') === -1) {
    console.log('ERROR: Missing separators in >>> ' + loc + ' <<<');
    console.log('Syntax is <campus>::<building>@<Room|Amphi>_<number_or_name>');
    process.exit();
  } else if ((loc.match(/::/g) || []).length > 1 || (loc.match(/@/g) || []).length > 1 || (loc.match(/_/g) || []).length > 1) {
    console.log('ERROR: Redundant separators in >>> ' + loc + ' <<<');
    console.log('Syntax is <campus>::<building>@<Room|Amphi>_<number_or_name>');
    process.exit();
  } else if ((loc.toUpperCase().match(/ROOM/g) || []).length > 1 || (loc.toUpperCase().match(/AMPHI/g) || []).length > 1) {
    console.log('ERROR: Redundant words \'Room\' or \'Amphi\' in >>> ' + loc + ' <<<');
    console.log('Syntax is <campus>::<building>@<Room|Amphi>_<number_or_name>');
    process.exit();
  }
  // Correct values of each field?
  campus = loc.trim().substr(0, loc.indexOf('::'));
  building = loc.trim().substring(loc.indexOf('::') + 2, loc.indexOf('@'));
  type = loc.trim().substring(loc.indexOf('@') + 1, loc.indexOf('_'));
  name = loc.trim().substr(loc.indexOf('_') + 1);

  if ('NONE,TALENCE,CARREIRE,INRA,ISVV'.indexOf(campus.toUpperCase()) === -1) {
    console.log('ERROR: Unknown campus of >>> ' + campus + ' <<< in ' + loc);
    console.log('Available campus: None,Talence,Carreire,INRA,ISVV');
    process.exit();
  } else {
    campus = keywords[campus.toUpperCase()];
  }
  building = buildings[building.substring(0, 3)] || building;

  return campus + '::' + building + '@' + type + '_' + name;
}

function getDate(str) {
  // Format with TimeZone ID= DTSTART;TZID=Europe/Paris:20170908T140000
  // Format with GMT = DTSTART:20170908T140000

  var time = str.substr(str.indexOf(':') + 1).trim();
  if (time.indexOf('Z') !== -1) {
    // UTC Time
    // Timezone forced to Europe/Paris
    return new Date(Date.UTC(parseInt(time.substr(0, 4)), parseInt(time.substr(4, 2)) - 1, // Month from 0 to 11
    parseInt(time.substr(6, 2)), parseInt(time.substr(9, 2)), parseInt(time.substr(11, 2))));
  }

  return new Date(parseInt(time.substr(0, 4)), parseInt(time.substr(4, 2)) - 1, // Month from 0 to 11
  parseInt(time.substr(6, 2)), parseInt(time.substr(9, 2)), parseInt(time.substr(11, 2)));
}

function getDescription() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "None";

  return title;
}

function createCalendarID(e) {
  var login = 'import';
  var id = 'None@import';
  if (e.acronym) {
    var timestamp = new Date().toISOString().replace(/[-:.Z]/g, '');
    timestamp = timestamp.substr(0, timestamp.length - 3) + (++EVENT_COUNT).toString().padStart(3, '0');
    id = (e.isCourse ? "C" : "E") + e.year + e.tracks + timestamp + "@" + login;
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
 * Ex: Talence::A29-CREMI@Room_999
 *
 */
function createEvent(e) {

  var ev = {};
  ev.date_start = e.start.year + '-' + e.start.month.toString().padStart(2, '0') + '-' + e.start.day.toString().padStart(2, '0') + 'T';
  ev.date_end = ev.date_start;
  ev.date_start += e.start.time;
  ev.date_end += e.end.time;

  var words = e.content.split('**');
  //  let words = e.content.slice(0,e.content.length - 1).split('**'); 

  var _getIDs = getIDs(words[0]);

  var _getIDs2 = _slicedToArray(_getIDs, 2);

  ev.apogee = _getIDs2[0];
  ev.acronym = _getIDs2[1];

  ev.isCourse = true;
  if (ev.acronym.indexOf('Evt::') !== -1) {
    ev.isCourse = false;

    var _getYearAndTracks = getYearAndTracks(words[0]);

    var _getYearAndTracks2 = _slicedToArray(_getYearAndTracks, 2);

    ev.year = _getYearAndTracks2[0];
    ev.tracks = _getYearAndTracks2[1];
  } else {
    ev.year = ev.acronym.substr(0, 3) === "S07" || ev.acronym.substr(0, 3) === "S08" ? 1 : 2;
    // HACK:console.log(ev.apogee);
    ev.tracks = calDB.courses[ev.apogee].tracks.substr(2, 2);
  }
  ev.lecturer = getLecturer(words[1]);
  ev.type = getCourseType(words[2]);
  ev.location = getLocation(e.location);
  ev.title = getDescription(e.description);
  ev.ID = createCalendarID(ev);
  ev.group = words[3] || "All";
  return ev;
}

/**
 * Parse ics file
 *
 * @author: Jean-Christophe Taveau
 */
function parse_ics(data) {
  var all_events = [];
  var ev;
  var rows = data.split(/\r?\n/);
  for (var i = 0; i < rows.length; i++) {
    var str = rows[i];
    if (str.indexOf('BEGIN') !== -1 && str.indexOf('VEVENT') !== -1) {
      // New event
      ev = { sequence: 0, location: 'None::None@Room_000' };
    } else if (str.indexOf('DTSTART') !== -1 && ev !== undefined) {
      var date = getDate(str);
      ev.start = {};
      ev.start.year = date.getFullYear();
      ev.start.month = date.getMonth() + 1;
      ev.start.day = date.getDate();
      ev.start.time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
    } else if (str.indexOf('DTEND') !== -1) {
      var date = getDate(str);
      ev.end = {};
      ev.end.year = date.getFullYear();
      ev.end.month = date.getMonth() + 1;
      ev.end.day = date.getDate();
      ev.end.time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
    } else if (str.indexOf('SUMMARY') !== -1) {
      ev.content = str.substr(str.indexOf(':') + 1);
    } else if (str.indexOf('LOCATION') !== -1 && ev !== undefined) {
      ev.location = str.substr(str.indexOf('TION:') + 5) || 'None::None@Room_000';
    } else if (str.indexOf('DESCRIPTION') !== -1) {
      ev.description = str;
    } else if (str.indexOf('END') !== -1 && str.indexOf('VEVENT') !== -1) {
      all_events.push(createEvent(ev));
    }
  } // End of for each row
  return all_events;
}

/**
 * Display JSON events
 *
 * @author: Jean-Christophe Taveau
 */
function output_events(all) {
  console.log('{');
  // Display events
  for (var i in all) {
    var event = all[i];
    var txt = '';
    if (event.isCourse) {
      txt = '{\n        "ID"        :"' + event.ID + '",\n        "apogee"    :"' + event.apogee + '",\n        "acronym"   :"' + event.acronym + '",\n        "date_start":"' + event.date_start + '",\n        "date_end"  :"' + event.date_end + '",\n        "lecturer"  :"' + event.lecturer + '",\n        "location"  :"' + event.location + '",\n        "group"     :"' + event.group + '",\n        "type"      :"' + event.type + '",\n        "year"      :"' + event.year + '",\n        "tracks"    :"' + ("0x" + event.tracks) + '",\n        "comment"   :"' + comment + '"}';
    } else {
      txt = '{\n        "ID"         :"' + event.ID + '",\n        "apogee"     :"' + event.apogee + '",\n        "acronym"    :"' + event.acronym + '",\n        "date_start" :"' + event.date_start + '",\n        "date_end"   :"' + event.date_end + '",\n        "lecturer"   :"' + event.lecturer + '",\n        "location"   :"' + event.location + '",\n        "group"      :"' + event.group + '",\n        "type"       :"' + event.type + '",\n        "year"       :"' + event.year + '",\n        "tracks"     :"' + ("0x" + event.tracks) + '",\n        "title"      :"' + event.title + '",\n        "description":"",\n        "comment"    :"' + comment + '"}';
    }

    if (i != all.length - 1) {
      console.log('"' + event.ID + '": ' + txt + ',');
    } else {
      console.log('"' + event.ID + '": ' + txt);
    }
  }
  console.log('}');
}

/***************************
 *
 *        M  A  I  N 
 *
 ***************************/

var TRCK_BIOCOMP = 1;
var TRCK_GENECO = 2;
var EVENT_COUNT = 0;

if (process.argv.length <= 3) {
  console.log('ERROR: Wrong number of arguments');
  console.log('USAGE: nodejs tool_ics.js -[i|d]-i ../import/my_path/filename.ics > ../data/calendar_m<master_year>.json');
  console.log('USAGE: Option -i: input single ics filename');
  console.log('USAGE: Option -d: input directory containing ics files');
  process.exit();
}

var comment = 'Imported from ' + process.argv[3].substring(process.argv[3].indexOf(/\/[A-Z]/) + 1, process.argv[3].indexOf(/[A-Z\+]_/) + 1) + '.ics - ' + new Date();

var format = process.argv[2];

// Read one ics file. Option `-i` = input filename
if (format === '-i') {
  var filename = process.argv[3];
  // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    var events = parse_ics(data);
    output_events(events);
  });
}
// Read all ics files contained in directory. Option `-d`
else if (format === '-d') {
    var folder = process.argv[3];
    var agendas = [];
    var events = void 0;
    fs.readdir(folder, function (err, filenames) {
      if (err) {
        return console.log(err);
      }
      filenames.forEach(function (filename) {
        fs.readFile(folder + filename, 'utf8', function (err, data) {
          if (err) {
            return console.log(err);
          }
          agendas.push(parse_ics(data));
          console.log(agendas[0]);
        });

        output_events(events);
      });
    });
  }