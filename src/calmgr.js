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
 
const calDB = {
  "days": [
    "--",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ],
  "hours": [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "00"
  ],
  "locations": [
    "None::None",
    "Peixotto::A9",
    "Peixotto::A21-OMEGA",
    "Peixotto::A22",
    "Peixotto::A28-CREMI",
    "Peixotto::A29",
    "Peixotto::A30-LaBRI",
    "Peixotto::A33",
    "Bordes::B5",
    "Bordes::B6",
    "Bordes::B7",
    "Bordes::B18", 
    "Carreire::Amphi",
    "Carreire::ED"
  ],
  "minutes": [
    "00",
    "10",
    "20",
    "30",
    "40",
    "50"
  ],
  "months": [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ],
  "people": [
    "------",
    "Baldacci F",
    "Beauvoit B",
    "Benois-Pineau J",
    "Benot ML",
    "Bernaulte JJ",
    "Beurton-Aimar M",
    "Beven L",
    "Bonnafous P",
    "Bouffier L",
    "Bourqui R",
    "Boussicault A",
    "Boutillier X",
    "Bujan S",
    "Carrere M",
    "Chaumette S",
    "Cl&eacute;ment L",
    "Cochard D",
    "Colombi&eacute; S",
    "de Daruvar A",
    "David V",
    "Delmas O",
    "Desbarats P",
    "Dieuaide M",
    "Domenger JP",
    "Drouineau H",
    "Dubois S",
    "Fi&eacute;vet V",
    "Garenne A",
    "Grelard A",
    "Gr&eacute;mare A",
    "Hanquiez V",
    "Hernould M",
    "Heric&eacute; C",
    "H&eacute;ric&eacute; C",
    "Karkar S",
    "Lubac B",
    "Master",
    "Melan&ccedil;on G",
    "Nogu&egrave;s X",
    "Normandin C",
    "Occala C",
    "Pinaud B",
    "Schurdi-Levraud V",
    "S&eacute;n&eacute;chal N",
    "Sirand-Pugnet P",
    "Taveau JC",
    "Th&eacute;bault P",
    "Uricaru R",
    "Zaragosi S"
  ],

  "status" : [
    "--",
    "Mr",
    "Ms",
    "Dr",
    "Pr"
  ],
  tracks : [
    {
        "key"  : 0,
        "value": "None"
    },
    {
        "key"  : 1,
        "value": "C++BIO[required]"
    },
    {
        "key"  : 2,
        "value": "GenOrg[required]"
    },
    {
        "key"  : 4,
        "value": "OrgEco[required]"
    },
    {
        "key"  : 8,
        "value": "BSC[required]"
    },
    {
        "key"  : 16,
        "value": "C++BIO[elective]"
    },
    {
        "key"  : 32,
        "value": "GenOrg[elective]"
    },
    {
        "key"  : 64,
        "value": "OrgEco[elective]"
    },
    {
        "key"  : 128,
        "value": "BSC[elective]"
    }
  ],

  "courses" : {
  // Semester 7
      "4TBI701U": {
        semester: "S07",
        source: "S7_IMAJS",
        acronym: "S07::IMAJS",
        apogee: "4TBI701U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI702U": {
        semester: "S07",
        source:"S7_APU",
        acronym: "S07::APU",
        apogee: "4TBI702U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI703U": {
        semester: "S07",
        source:"S7_OBI",
        acronym: "S07::OBI",
        apogee: "4TBI703U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI704U": {
        semester: "S07",
        source:"S7_ANGLAIS",
        acronym: "S07::Anglais",
        apogee: "4TBI704U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },
      "4TBI705U": {
        semester: "S07",
        source:"S7_BSTATS",
        acronym: "S07::BSTATS",
        apogee: "4TBI705U",
        isCourse: true,
        tracks: "0x0F",
        year: 1
      },

  // Semester 8
      "4TBA804U": {
        semester: "S08",
        source: "S8_BBP",
        acronym: "S08::BBP",
        apogee: "4TBA804U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBA806U": {
        semester: "S08",
        source: "S8_GENEPI",
        acronym: "S08::Genepi",
        apogee: "4TBA806U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBC801U": {
        semester: "S08",
        source: "S8_POO",
        acronym: "S08::POO",
        apogee: "4TBC801U",
        isCourse: true,
        tracks: "0x10",
        year: 1
      },
      "4TBE801U": {
        semester: "S08",
        source: "S8_BIODIV",
        acronym: "S08::BioDiv",
        apogee: "4TBE801U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBE802U": {
        semester: "S08",
        source: "S8_ECOTERR",
        acronym: "S08::EcoTerr",
        apogee: "4TBE802U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBE803U": {
        semester: "S08",
        source: "S8_ECOAQUA",
        acronym: "S08::EcoAqua",
        apogee: "4TBE803U",
        isCourse: true,
        tracks: "0x60",
        year: 1
      },
      "4TBI801U": {
        semester: "S08",
        source: "S8_ALGOPRG2",
        acronym: "S08::AlgoPrg2",
        apogee: "4TBI801U",
        isCourse: true,
        tracks: "0x01",
        year: 1
      },
      "4TBI802U": {
        semester: "S08",
        source: "S8_CPRD",
        acronym: "S08::CPRD",
        apogee: "4TBI802U",
        tracks: "0x07",
        year: 1
      },
      "4TBI803U": {
        semester: "S08",
        source: "S8_BDD",
        acronym: "S08::BDD",
        apogee: "4TBI803U",
        isCourse: true,
        tracks: "0x07",
        year: 1
      },
      "4TBI804U": {
        semester: "S08",
        source: "S8_NGS",
        acronym: "S08::NGS",
        apogee: "4TBI804U",
        isCourse: true,
        tracks: "0x07",
        year: 1
      },
      "4TBI806U": {
        semester: "S08",
        source: "S8_WEBMOD",
        acronym: "S08::WebMod",
        apogee: "4TBI806U",
        isCourse: true,
        tracks: "0x70",
        year: 1
      },

  // Semester 9
      "4TBI901U": {
        semester: "S09",
        source: "S9_STRUBIGL",
        acronym: "S09::StrubiGL",
        apogee: "4TBI901U",
        isCourse: true,
        tracks: "0x61",
        year: 2
      },
      "4TBI902U": {
        semester: "S09",
        source: "S9_FILBI",
        acronym: "S09::FILBI",
        apogee: "4TBI902U",
        isCourse: true,
        tracks: "0x0F",
        year: 2
      },
      "4TBI903U": {
        semester: "S09",
        source: "S9_GLOG",
        acronym: "S09::GLog",
        apogee: "4TBI903U",
        isCourse: true,
        tracks: "0x61",
        year: 2
      },
      "4TBI904U": {
        semester: "S09",
        source: "S9_DEA",
        acronym: "S09::DEA",
        apogee: "4TBI904U",
        isCourse: true,
        tracks: "0x07",
        year: 2
      },
      "4TBI905U": {
        semester: "S09",
        source: "S9_IRD",
        acronym: "S09::IRD",
        apogee: "4TBI905U",
        isCourse: true,
        tracks: "0x07",
        year: 2
      },
      "4TBI906U": {
        semester: "S09",
        source: "S9_MOCELL",
        acronym: "S09::MOCELL",
        apogee: "4TBI906U",
        isCourse: true,
        tracks: "0x70",
        year: 2
      },
      "4TBC901U": {
        semester: "S09",
        source: "S9_POO2",
        acronym: "S09::POO++",
        apogee: "4TBC901U",
        isCourse: true,
        tracks: "0x10",
        year: 2
      },
      "4TBA903U": {
        semester: "S09",
        source: "S9_QPG",
        acronym: "S09::QPG",
        apogee: "4TBA903U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      "4TBA904U": {
        semester: "S09",
        source: "S9_PDR",
        acronym: "S09::PDR",
        apogee: "4TBA904U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      "4TBIN01U": {
        semester: "S09",
        source: "S9_STGVOL",
        acronym: "S08::StgVol",
        apogee: "4TBIN01U",
        isCourse: true,
        tracks: "0xF0",
        year: 2
      },
      "4TBE901U": {
        semester: "S09",
        source: "S9_TDE2",
        acronym: "S09::TDE++",
        apogee: "4TBE901U",
        isCourse: true,
        tracks: "0x70",
        year: 2
      },
      "4TBE902U": {
        semester: "S09",
        source: "S9_EVOCOMM",
        acronym: "S09::EvoComm",
        apogee: "4TBE902U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      "4TDE901U": {
        semester: "S09",
        source: "S9_SIG",
        acronym: "S09::SIG",
        apogee: "4TDE901U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      "4TDE902U": {
        semester: "S09",
        source: "S9_IBS",
        acronym: "S09::IBS",
        apogee: "4TDE902U",
        isCourse: true,
        tracks: "0x60",
        year: 2
      },
      
  // Semester 10
      "4TBI001U": {
        semester: "S10",
        source: "S10_STAGE",
        acronym: "S10::Stage",
        apogee: "4TBI001U",
        isCourse: true,
        tracks: "0x0F",
        year: 2
      },

  // MS Events
      "4TBIEVNT": {
        semester: "MS",
        acronym: "Evt::Event",
        source: "MS_EVENTS",
        apogee: "4TBIEVNT",
        isCourse: false,
        tracks: "0x07",
        year: 3
      },
      "4TBIMEET": {
        acronym: "Evt::Conference",
        apogee: "4TBIMEET",
        isCourse: false,
        tracks: "0x00",
        year: 3
      },
      "4TBIPRSS": {
        acronym: "Evt::Press",
        apogee: "4TBIPRSS",
        isCourse: false,
        tracks: "0x07",
        year: 3
      },
      "4TBIVACA": {
        semester: "MS",
        source: "MS_VACANCES",
        acronym: "Evt::Holidays",
        apogee: "4TBIVACA",
        isCourse: false,
        tracks: "0x07",
        year: 3
      },
      "4TBIDFNS": {
        acronym: "Evt::Defense",
        apogee: "4TBIDFNS",
        isCourse: false,
        tracks: "0x0F",
        year: 3
      }
  },

  "events" : {
      "4TBIEVNT": {
        acronym: "Evt::Event",
        apogee: "4TBIEVNT",
        tracks: "0x00"
      },
      "4TBIMEET": {
        acronym: "Evt::Conference",
        apogee: "4TBIMEET",
        tracks: "0x00"
      },
      "4TBIPRSS": {
        acronym: "Evt::Press",
        apogee: "4TBIPRSS",
        tracks: "0x07"
      },
      "4TBIVACA": {
        acronym: "Evt::Holidays",
        apogee: "4TBIVACA",
        tracks: "0x0F"
      },
      "4TBIDFNS": {
        acronym: "Evt::Defense",
        apogee: "4TBIDFNS",
        tracks: "0x0F"
      },
      "Event": {
        acronym: "Evt::Event",
        apogee: "4TBIEVNT",
        tracks: "0x00"
      },
      "Conference": {
        acronym: "Evt::Conference",
        apogee: "4TBIMEET",
        tracks: "0x00"
      },
      "RevuePresse": {
        acronym: "Evt::Press",
        apogee: "4TBIPRSS",
        tracks: "0x07"
      },
      "Vacances": {
        acronym: "Evt::Holidays",
        apogee: "4TBIVACA",
        tracks: "0x0F"
      },
      "Soutenance": {
        acronym: "Evt::Defense",
        apogee: "4TBIDFNS",
        tracks: "0x0F"
      }

  },
  "eventTypes" : {
      "Conference"   : "4TBIMEET",
      "RevuePresse"  : "4TBIPRSS",
      "Event"        : "4TBIEVNT",
      "Vacances"     : "4TBIVACA",
      "Presentation" : "4TBIWRKG",
      "Soutenance"   : "4TBIDFNS"
  },

  "semesters": [
    "--",
    "S7",
    "S8",
    "S9",
    "S10"
  ],
  "students": [
    "All",
    "A",
    "B",
    "A1",
    "B1",
    "A2",
    "B2"
  ],
  "types": {
    "?": "Unknown",
    CONFERENCE: "Conference",
    CONF: "Conference",
    CI: "Cours+TD",
    COURS: "Cours",
    DISTANCIEL:"E-learning",
    ELEARN:"E-learning",
    MOOC:"E-learning",
    EVENT:"Evenement",
    EXAM:"Examen",
    PRESENTATION:"Presentation",
    PROJET:"Projet",
    PRESS:"RevuePresse",
    RENTREE:"Rentrée",
    SOUTENANCE:"Soutenance",
    STAGE:"Stage",
    TD:"TD",
    TDM:"TD machine",
    TM:"TD machine",
    TP:"TP",
    VACANCES:"Vacances"
  },
  "years": [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
  ]
} // End of calDB


