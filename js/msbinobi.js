/****************
Semester 7:
Anglais	                                                3   30h	
Projet tutoré : réalisation logicielle	                3   27h		
Approches expérimentales en biologie	                6	26h 28h	
Biomodélisation et simulation de processus biologiques	9	27h		
Algorithmique et Programmation                          9	27h
**********************************************/

var university_path = "http://www.u-bordeaux.fr/formation/2015/PRMABS_121/master-recherche-professionnel-mention-biologie-sante-specialite-bioinformatique/enseignement/";

var course_data = {

/**********************************************
Semester 7:
Anglais	                                                3   30h	
Projet tutoré : réalisation logicielle	                3   27h		
Approches expérimentales en biologie	                6	26h 28h	
Biomodélisation et simulation de processus biologiques	9	27h		
Algorithmique et Programmation                          9	27h
**********************************************/

    'UNKNOWN' : {
        'ID'        : "UNKNOWN",
        'acronym'   : "Anglais",
        'ects'      : 3,
        'semester'  : 7, // semester 7 and 8 = M1 			"<li>9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'visible', // <visible|hidden>     
        'title'     : "Anglais",
        'contents'  : {
            'fr':
                "<ul>"+
                "<li>Construire une communication scientifique orale en anglais à partir de l’analyse de documents "+
                "de divers genres scientifiques et répondre en anglais aux questions sur ce travail.</li>"+
                "<li>Prendre la parole et interagir dans des situations diverses.</li>"+
                "<li>Renforcer la compréhension écrite et orale.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul>"+
                "<li><span style=\"font-weight: bold\">Objectifs pédagogiques</span></li>"+
                "<li>développer les compétences de communication scientifique pertinentes aux contextes "+
                "professionnels de la recherche. Renforcer les quatre compétences langagières (compréhension "+
                "et production de l’anglais, orale et écrite).</li>"+
                "<li><span style=\"font-weight: bold\">Compétences acquises</span></li>"+
                "<li>Compétences langagières en anglais : à partir et en fonction du niveau initial vers "+
                "le niveau B2 et au delà selon les critères du Cadre Européen Commun de Référence.</li>"+
                "<li>Techniques de compréhension de l’anglais scientifique</li>"+
                "<liCommunication scientifique orale et écrite en anglais.</li>"+
                "</ul>",
            'en':
                "<ul>"+
                "<li>Construire une communication scientifique orale en anglais à partir de l’analyse de documents "+
                "de divers genres scientifiques et répondre en anglais aux questions sur ce travail.</li>"+
                "<li>Prendre la parole et interagir dans des situations diverses.</li>"+
                "<li>Renforcer la compréhension écrite et orale.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul>"+
                "<li><span style=\"font-weight: bold\">Objectifs pédagogiques</span></li>"+
                "<li>développer les compétences de communication scientifique pertinentes aux contextes "+
                "professionnels de la recherche. Renforcer les quatre compétences langagières (compréhension "+
                "et production de l’anglais, orale et écrite).</li>"+
                "<li><span style=\"font-weight: bold\">Compétences acquises</span></li>"+
                "<li>Compétences langagières en anglais : à partir et en fonction du niveau initial vers "+
                "le niveau B2 et au delà selon les critères du Cadre Européen Commun de Référence.</li>"+
                "<li>Techniques de compréhension de l’anglais scientifique</li>"+
                "<liCommunication scientifique orale et écrite en anglais.</li>"+
                "</ul>",
        },
        'html'      : "ENB1BS7M06_01/anglais",            
    },
    
    'UNKNOWN' : {
    	"ID": "UNKNOWN",
        "acronym"   : "Projet",
        "title"     : "Projet tutoré: réalisation logicielle",
        "ects"      : 3,
        "semester"  : 7,
        "students"  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'visible', // <visible|hidden>     
       "contents": {
            'fr': 
                "<ul><li>Mise à niveau notions et principes de base."+
                "<ul>"+
                "<li>Le système d'exploitation."+
                "</li><li>Les interpréteurs de commandes.</li>"+
                "</ul>"+
                "</li><li>Réseau et archivage</li><li>la veille "+
                "scientifique: utilisation de mots-clefs, méta-analyse des banques de données d’informations et "+
                "des brevets.</li><li>élaboration d'un projet scientifique: de l'idée à la formalisation du projet.</li>"+
                "</ul>",
            'en': ""
        },
        'html'      : "ENF1BS7201_01/projet-tutore-realisation-logicielle",    
    },

    
    'KM1BS10U' : {
        'ID'        : "KM1BS10U",
        'acronym'   : "AEB",
        'ects'      : 6,
        'semester'  : 7, // semester 7 and 8 = M1 			"<li>9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'hidden', // <visible|hidden>     
        'title'     : "Approches Expérimentales en Biologie",
        'contents'  : {
            'fr': "<h2>Programme</h2>"+
                "<h3>Les Omics (30 h)</h3>"+
                "<ul>"+
                "<li>Génome: Approche de sequençage haut débit et exploitation des données</li>"+
                "<li>Transcriptome: Étude des transcriptomes : les différentes technologies d’exploration "+
                "(méthode SAGE, Puces à ADN) et les méthodes d’analyse des données.</li>"+
                "<li>Protéome: Étude des protéomes: séparation (chromatographie, électrophorèse monodimensionnelle, "+
                "bidimensionnelle, Blue Native SDS-PAGE) et identification des protéines (séquençage d’Edman, "+
                "spectrométrie de masse, puces protéines).</li>"+
                "<li>Métabolome: Etude du métabolome en 6 points : design expérimental, méthodes d’extractions, "+
                "variétés et complémentarité des méthodes analytiques, traitement des données, outils de visualisation "+
                "pour l’exploitation des données, intégration des données.</li>"+
                "</ul>"+
                "<h3>Statistiques pour la biologie (14 h)</h3>"+
                "<ul>"+
                "<li>Evaluation des connaissances pré-requises: maîtrise du langage statistique (fréquence, "+
                "effectif, variable, diagramme de dispersion…), les méthodes univariées (tests d’hypothèse paramétriques), "+
                "la construction et la gestion de grands tableaux de données.</li>"+
                "<li>Analyse multidimensionnelle des données: régression linéaire, analyse de variance, analyse des "+
                "variables quantitatives en composantes principales (ACP), la classification.</li>"+
                "<li>La formation est faite en reprenant les notions de théorie indispensable à la compréhension et en "+
                "s’appuyant sur des exemples pédagogiques réels. Les deux tiers des enseignements seront réalisés sous "+
                "forme de travaux dirigés et pratiques dans une salle équipée du logiciel libre R et autres logiciels "+
                "accessibles en ligne.</li>"+
                "</ul>"+
                "<h3>Exploitation des bases de données (16 h)</h3>"+
                "<ul>"+
                "<li>Contenu des bases de données en biologie. Méthodes bioinformatiques.</li>"+
                "<li>Comparaison et analyse des séquences biologiques.</li>"+
                "<li>Prédictions de structure et de fonction (y compris structure 3D).</li>"+
                "</ul>",
            'en':
                "<h2>Omics (30 h)</h2>"+
                "<ul>"+
                "<li>Genomics: High throughput sequencing and data analysis.</li>"+
                "<li>Transcriptomics</li>"+
                "<li>Proteomics</li>"+
                "<li>Metabolomics</li>"+
                "</ul>"+
                "<h2>Statistics in biology (14 h)</h2>"+
                "<ul>li>Evaluation des connaissances pré-requises: maîtrise du langage statistique (fréquence, "+
                "effectif, variable, diagramme de dispersion…), les méthodes univariées (tests d’hypothèse paramétriques), "+
                "la construction et la gestion de grands tableaux de données.</li>"+
                "<li>Multidimensional analysis  of data: linear regression, variance analysis, analysis des "+
                "variables quantitatives en principal components (PCA), classification.</li>"+
                "<li>La formation est faite en reprenant les notions de théorie indispensable à la compréhension et en "+
                "s’appuyant sur des exemples pédagogiques réels. Les deux tiers des enseignements seront réalisés sous "+
                "forme de travaux dirigés et pratiques dans une classroom equipped du logiciel libre R et other softwares "+
                "available on-line.</li></ul>"+
                "<h2>Exploitation of databases (16 h)</h2>"+
                "<ul><li>Contenu des bases de données en biologie. Méthodes bioinformatiques.</li>"+
                "<li>Comparaison et analyse des séquences biologiques.</li>"+
                "<li>Prédictions de structure et de fonction (y compris structure 3D).</li></ul>",          
        },
        'html'      : "http://www.u-bordeaux.fr/formation/2015/PRMABS_121/master-recherche-professionnel-mention-biologie-sante-specialite-bioinformatique/enseignement/ENF6BS7M02_01/approches-experimentales-en-biologie",
    },
    'KM1BS10U-Omics' : {
        'ID'                : "KM1BS10U-Omics",
        'acronym'           : "AEB-Omics",
        'visibility'        : 'visible', // visible or hidden 
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "KM1BS10U"
    },
    'KM1BS10U-Stats' : {
        'ID'                : "KM1BS10U-Stats",
        'acronym'           : "AEB-Stats",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "KM1BS10U"
    },
    'KM1BS10U-Info' : {
        'ID'                : "KM1BS10U-Info",
        'acronym'           : "AEB-Info",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "KM1BS10U"
    },
    
    'J1BS7M01' : {
        'ID'        : "J1BS7M01",
        'acronym'   : "BioMod",
        'ects'      : 9,
        'semester'  : 7, // semester 7 and 8 = M1 			"<li>9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'hidden', // <visible|hidden>     
        'title'     : "Biomodélisation, simulation de processus biologiques",
        'contents'  : {
            'fr': "<h2>Programme</h2>"+
                "<h3>Statistiques</h3>"+
                "<ul>"+
			    "<li>Mise en œuvre d'une analyse statistique – utilisation d’un logiciel tel que R et élaboration de programme.</li>"+
			    "<li>Analyse descriptive : analyse des fréquences, des moyennes, analyse de "+
			    "variance, régression linéaire et corrélations, tests non paramétriques, analyse multi-variée.</li>"+
                "</ul>"+
			    "<h3>Programmation</h3>"+
                "<ul>"+
			    "<li>Développement de programmes en langage Python.</li></ul>"+
                "<h3>Imagerie</h3>"+
                "<ul><li>Partie théorique</li>"+
        			"<ul>"+
        			"<li>Image numérique. Formats d'images. Espaces de couleurs.</li>"+
        			"<li>Amélioration d'images et de traitements (filtrations en espace réel, en espace fréquentiel).</li>"+
        			"<li>Analyse des images: Mesures, Reconnaissance de formes.</li>"+
        			"<li>Notion de programmation en vue de l'automatisation de tâches pour le traitement et l'analyse de vidéos.</li>"+
        			"</ul>"+
                "<li>Partie pratique"+
                    "<ul>"+
        			"<li>Application à des images de microscopie optique et électronique et des vidéos.</li>"+
			        "<li>Utilisation d'ImageJ, installation de greffons (plugins).</li>"+
			        "<li>Programmation de Macros/Scripts.</li></ul>"+
			     "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<span style=\"font-weight: bold;\">Objectifs pédagogiques</span>"+
                "<ul><li>Donner les éléments nécessaires pour l'analyse et le traitement de données biologiques dans les domaines de:</li>"+
			        "<ul>"+
			            "<li>biostatistiques</li>"+
			            "<li>réalisation de programme de traitement de données.</li>"+
			            "<li>traitement et analyse d'images scientifiques.</li>"+
			        "</ul>"+
			     "</ul>"+
                "<span style=\"font-weight: bold;\">Compétences acquises</span>"+
			    "<ul><li>Modélisation: Elaborer un modèle pour les données biologiques et sa mise en oeuvre informatique.</li>"+
			    "<li>Programmation: Maitrise du langage Python.</li>"+
			    "<li>Imagerie: Appréhender les divers moyens d'amélioration des images scientifiques dans les "+
			    "domaines des microscopies (optique et électronique) en vue de leur analyse.</li>"+
                "<li>Imagerie: Savoir utiliser une librairie de traitement d'images.</li>"+
                "</ul>",			
            'en': ""
        },
        'html'      : "ENJ1BS7M01_01/biomodelisation-et-simulation-de-processus-biologiques",

    },
     'J1BS7M01-Prog' : {
        'ID'                : "J1BS7M01-Prog",
        'Acronym'           : "BioMod-Prog",
        'visibility'        : 'visible', // visible or hidden 
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Imag' : {
        'ID'                : "J1BS7M01-Imag",
        'Acronym'           : "BioMod-Imag",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Stats' : {
        'ID'                : "J1BS7M01-Stats",
        'Acronym'           : "BioMod-Stats",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    
    "UNKNOWN" : {
        "id": "UNKNOWN",
        "acronym": "AlgoProg",
        "title": "Algorithmique et Programmation",
        "ects": 9,
        "semester": 7,
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[required]',
        'visibility': 'visible', // <visible|hidden>     
        "link": "ENJ1BS7202_01/algorithmique-et-programmation",
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Algorithmique de base, structures itératives et prédicats.</li>"+
                "<li>Les tableaux : parcours, recherches séquentielle et dichotomique, tris.</li>"+
                "<li>Complexité : quelques notions à partir d'exemples</li><li>Programmation : "+
                "Mise en application des différents concepts vues en algorithmique : structures de contrôle, "+
                "tests logiques, boucles.</li><li>Traitement des accès fichiers séquentiels : lecture /écriture</li>"+
                "<li>Bases de la modélisation orientée objet : élaboration de classes, utilisation de bibliothèques "+
                "ou de modules prédéfinis.</li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul><li>"+
                "<h3>Objectifs pédagogiques</h3></li>"+
                "<li>Analyser un problème donné et concevoir l'algorithme correspondant.</li>"+
                "<li>Apprentissage de la programmation au travers de différents langages classiques ou orientés objet.</li>"+
                "<li>Conception de modules de traitement pour les données biologiques.</li><li>"+
                "<h3>Compétences acquises</h3></li>"+
                "<li>Convertir un problème concret en une suite d'instructions programmables.</li>"+
                "<li>Maitrise des concepts essentiels d'un langage de programmation.</li>"+
                "</ul>",
            "en": ""
        }
    },


/**********************************************
Semester 8:

Enseignements obligatoires                                                  ECTS	CM	TD	TP
Initiation à la Recherche et/ou Développement	                            12		45h	
Méthodes et outils pour la biologie des systèmes	                        9	27h		

Choix 1 UE de 9 ECTS                                                        ECTS	CM	TD	TP
Informatique appliquée à la biologie: modélisation et ima	                9	10h	5h	
Programmation orienté objet                             	                9	27h		

**********************************************/


/**********************************************
Semester 9:
Enseignements obligatoires                                                  ECTS	CM	TD	TP
Modélisation des systèmes biologiques	                                    3		15h	
Communication et conception d'un projet de recherche et/ou développement	9			
Connaissance de l'entreprise	                                            3		15h	
Visualisation de la Structure de Proteines	                                3			
Classification des données issues des banques de données biologiques	    3		15h	

Choix 1 UE de 3 ECTS                                                        ECTS	CM	TD	TP
Anglais	                                                                    3		60h	
Architecture du génome	                                                    3	10h	10h	
Génétique Humaine	                                                        3	10h	10h	
Division et cycle cellulaire	                                            3	10h	10h	
Algorithmique pour la bio-informatique et graphe	                        3		15h	

Choix 1 UE de 6 ECTS                                                        ECTS	CM	TD	TP
Programmation Objet Avancée	                                                6		30h	
Approche objet	                                                            6	28h	30h	
Outils d'indexation et de classification de l'information	                6		24h	
Systemes Autonomes	                                                        6		24h	
**********************************************/
    "J1BS9203" : {
        "id": "J1BS9203",
        "acronym": "PROT3D",
        "title": "Visualisation de la Structure de Proteines",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": "<h2>Programme</h2>"+
            "<p>Initier les étudiants à la visualisation et à l'exploration des structures 3D.</p"+
            "><p>Programme des enseignements théoriques</p><ul><li>Organisation structurale des macromolécules biologiques.</li>"+
            "<li>Banques de données structurales (Protein Data Bank, SCOP,etc.).</li>"+
            "<li>Format de fichier PDB (Protein Data Bank)</li>"+
            "<li>Principes de la représentation graphique d'un objet 3D avec OpenGL.</li>"+
            "<li>Algorithmes utilisés pour les divers types de représentation graphique.</li>"+
            "</ul><p>Programme des enseignements dirigés et pratiques</p>"+
            "<ul><li>Les enseignements pratiques et dirigés seront tous dispensés devant ordinateur.</li>"+
            "<li>Extraction des informations structurales à partir des banques de données.</li>"+
            "<li>Initiation à l'utilisation de la librairie OpenGL versions 3.x et supérieures pour la visualisation des structures protéiques 3D au format PDB.</li>"+
            "</ul>"+
            "<h2>Objectifs et compétences</h2>"+
            "<h3>Nécessaire:</h3>"+
            "<p>Notion de programmation acquises en master 1 de bioinformatique</p>",
            "en": ""
        },
        "link": "ENJ1BS9203_01/visualisation-de-la-structure-de-proteines"
    },
    
    
/**********************************************
Semester 10:
Réalisation d'un projet de recherche et/ou développement
**********************************************/

    "UNKNOWN" : {
        "id": "UNKNOWN",
        "acronym": "Stage",
        "title": "Réalisation d'un projet de recherche et/ou développement",
        "ects": 30,
        "semester": 10,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": "<h2>Programme</h2>"+
            "<ul><li>Stage en laboratoire de recherche ou en entreprise d'une durée de 5 à 6 mois.</li>"+
            "<li>Il repose sur un projet scientifique préalablement rédigé et soumis aux responsables de la spécialité.</li>"+
            "<li>Ce stage peut avoir lieu en France ou à l'étranger."+
                "<ul><li>Parcours recherche:"+
                "<ul><li>Sujet de stage proposé par le Maître de Stage après validation par la commission pédagogique de Master et choisi par l’étudiant en accord avec le responsable du stage.</li>"+
                "</ul>"+
                "</li>"+
                "<li>Parcours professionnel:"+
                "<ul><li>Sujet de stage défini par le Maître de Stage et l’étudiant en accord avec le responsable pédagogique.</li></ul>"+
                "</li></ul></li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul><li>Objectifs pédagogiques"+
                "<ul><li>Mise en situation dans un environnement professionnel pour la réalisation d'un projet de recherche et/ou développement en appliquant les notions fondamentales de gestion d'un projet de recherche et/ou développement:"+
                "<ul><li>préparation</li>"+
                "<li>réalisation</li>"+
                "<li>analyse critique des résultats</li>"+
                "<li>synthèse et présentation des résultats</li>"+
                "<li>Applications de \"bonnes pratiques\" et de la \"démarche qualité\".</li>"+
                "</ul></li>"+
                "</ul></li>"+
                "<li>Compétences acquises"+
                "<ul><li>Compétence dans la gestion d'un projet de recherche et/ou développement.</li>"+
                "<li>Acquérir l'autonomie nécessaire pour mener un projet de recherche et/ou de développement</li>"+
                "<li>Acquérir la notion de travail en équipe projet.</li>"+
                "<li>Compétences , à analyser et critiquer les résultats, à synthétiser des résultats, à présenter à l'écrit et à l'oral un projet et les résultats obtenus dans le cadre de ce projet.</li>"+
                "<li>Maîtrise de l’anglais pour les étudiants qui partent à l’étranger.</li>"+
                "</ul>"+
                "</li></ul>",
            "en": ""
        },
        "link": "ENF1BS0201_01/realisation-d-un-projet-de-recherche-et-ou-developpement"
    }
    
}
;/************************************
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


;
displayNews(1);

function NewsReader() {

}

function displayNews(old_index) {
    console.log(old_index +' '+ news_data.length);
    var html = '';
    // Most recent news
    var myDate = formatDate(news_data[0].date);
    var regexp = /(.*)\<!--more-->/;
    var text = news_data[0].contents.match(regexp);


    var el = document.getElementById('top_news');
    html += '<div id="mycarousel" class="carousel slide" data-ride="carousel">';
    html += '<div class="carousel-inner"><div class="item active">';
    html += '<img src="img/news/'+news_data[0].image+'.jpg" alt="" class="img-responsive">';
    html += '<div class="carousel-caption">';
    html += '<h5>'+news_data[0].title+'</h5>';
    html += '</div></div></div>';
    html += '<div class="media-body">';
    html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> '+ myDate +'</h4>';
    html += text[1];
    html += '</div> <!-- media-body -->';
    html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal(0)" class="btn btn-primary btn-sm">Read more</a></div>';

    el.innerHTML = html;
    
    // Four next news
    var max_news = Math.min(old_index + 4,news_data.length);
    var el = document.getElementById('news_old');
    html = '';
    for (var i=old_index; i < max_news; i++) {
        html += '<!-- NEWS #'+i+'-->';
        html += '<div class="media">';
        html += '<div class="media-left">';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<img class="media-object hidden-xs" src="img/news/'+news_data[i].image+'_thumb.jpg'+'" alt="newsIcon"></a>';
        html += '</div>'; // div media-left
        html += '<div class="media-body">';
        html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> '+ formatDate(news_data[i].date) +' </h4>';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<h5>'+news_data[i].title+'</h5></a>';
        html += '</div>';
        html += '</div>';
    }        
   
    // Older news
    if (max_news <= news_data.length) {
        html += '<!-- NEWS #'+i+'-->';
        html += '<div class="media">';
        html += '<div class="media-left">';
        html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNewsModal('+i+')">';
        html += '<img class="media-object hidden-xs" src="img/news/misc_archive_thumb.jpg'+'" alt="newsIcon"></a>';
        html += '</div>'; // div media-left
        html += '<div class="media-body">';
        html += '<h4 class="media-heading"><i class="fa fa-calendar"></i> Archive News</h4>';
        if (old_index != 1) {
            html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNews('+(old_index - 4)+')">';
            html += '<h5>Newer Posts</h5></a>';    
        }
        if (old_index + 4 < news_data.length ) {
            html += '<a data-toggle="modal" href="javascript:void(0)" onclick="displayNews('+(old_index + 4)+')">';
            html += '<h5>Older Posts</h5></a>';
        }

        html += '</div>';
        html += '</div>';   
    }
          
   el.innerHTML = html;
}

function displayNewsModal(news_index) {
    var news = news_data[news_index];
    
    var el = document.getElementById('newsModal');
    var html = '';
    html += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
    html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    html += '<h4 class="modal-title">'+news.title+'</h4>';
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p><img class="img-responsive" src="img/news/'+news.image+'.jpg" alt=""></p>';
    html += '<h4><i class="fa fa-calendar"></i> '+ formatDate(news.date) +' </h4>';
    html += '<p>'+news.contents+'</p>';
    html += '</div>';
    html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    html += '</div>'; // modal-content
    html += '</div>'; // modal-dialog
    html += '</div>'; // modal

   el.innerHTML = html;
   console.log(el);
   
   // el.modal('show');
   $('#newsModal').modal('show');
}

function formatDate(yyyymmdd) {
    var months    = ['None','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var words = yyyymmdd.split('-');
    return months[parseInt(words[1]) ] + ' ' + words[2]+ ', ' + words[0];
}
