
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

    'B1BS7M06' : {
        'id'        : "B1BS7M06",
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
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul>"+
                "<li>développer les compétences de communication scientifique pertinentes aux contextes "+
                "professionnels de la recherche. Renforcer les quatre compétences langagières (compréhension "+
                "et production de l’anglais, orale et écrite).</li></ul>"+
                "<h3>Compétences acquises</span></h3>"+
                "<ul><li>Compétences langagières en anglais : à partir et en fonction du niveau initial vers "+
                "le niveau B2 et au delà selon les critères du Cadre Européen Commun de Référence.</li>"+
                "<li>Techniques de compréhension de l’anglais scientifique</li>"+
                "<liCommunication scientifique orale et écrite en anglais.</li>"+
                "</ul>",
            'en':
                "",
        },
        'html'      : "ENB1BS7M06_01/anglais",
    },
    
    'F1BS7201' : {
    	"id": "F1BS7201",
        "acronym"   : "ProjLog",
        "title"     : "Projet tutoré: réalisation logicielle",
        "ects"      : 3,
        "semester"  : 7,
        "students"  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        "visibility": 'visible', // <visible|hidden>     
        "contents": {
            'fr': 
                "<ul><li>Mise à niveau notions et principes de base."+
                "<ul>"+
                "<li>Le système d'exploitation."+
                "</li>"+
				"<li>Les interpréteurs de commandes.</li>"+
                "</ul>"+
                "</li>"+
				"<li>Réseau et archivage</li>"+
				"<li>la veille "+
                "scientifique: utilisation de mots-clefs, méta-analyse des banques de données d’informations et "+
                "des brevets.</li>"+
				"<li>élaboration d'un projet scientifique: de l'idée à la formalisation du projet.</li>"+
                "</ul>",
            'en': ""
        },
        'html'      : "ENF1BS7201_01/projet-tutore-realisation-logicielle",    
    },

    
    'F6BS7M02' : {
        'id'        : "F6BS7M02", // F6BS7M02 ou KM1BS10U
        'acronym'   : "AEB",
        'ects'      : 6,
        'semester'  : 7, // semester 7 and 8 = M1  9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'hidden', // <visible|hidden>     
        'background_color': '#eef409',
        'title'     : "Approches Expérimentales en Biologie",
        'contents'  : {
            'fr': 
                "<h2>Programme</h2>"+
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
        'html'      : "ENF6BS7M02_01/approches-experimentales-en-biologie",
    },
    'F6BS7M02-Omics' : {
        'id'                : "F6BS7M02-Omics",
        'acronym'           : "AEB-Omics",
        'visibility'        : 'visible', // visible or hidden 
        'background_color'  : '#eef409',
        'color'             : "#fff",   
        'link'              : "F6BS7M02"
    },
    'F6BS7M02-Stats' : {
        'id'                : "F6BS7M02-Stats",
        'acronym'           : "AEB-Stats",
        'visibility'        : 'visible', // visible or hidden     
        'background_color'  : '#eef409',
        'color'             : "#fff",   
        'link'              : "F6BS7M02"
    },
    'F6BS7M02-Info' : {
        'id'                : "F6BS7M02-Info",
        'acronym'           : "AEB-Info",
        'visibility'        : 'visible', // visible or hidden     
        'background_color'  : '#eef409',
        'color'             : "#fff",   
        'link'              : "F6BS7M02"
    },
    
    'J1BS7M01' : {
        'id'        : "J1BS7M01",
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
        'id'                : "J1BS7M01-Prog",
        'acronym'           : "BioMod-Prog",
        'visibility'        : 'visible', // visible or hidden 
        'background_color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Imag' : {
        'id'                : "J1BS7M01-Imag",
        'acronym'           : "BioMod-Imag",
        'visibility'        : 'visible', // visible or hidden     
        'background_color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Stats' : {
        'id'                : "J1BS7M01-Stats",
        'acronym'           : "BioMod-Stats",
        'visibility'        : 'visible', // visible or hidden     
        'background_color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    
    "J1BS7202" : {
        "id": "J1BS7202",
        "acronym": "AlgoProg",
        "title": "Algorithmique et Programmation",
        "ects": 9,
        "semester": 7,
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[required]',
        'visibility': 'visible', // <visible|hidden>     
        "contents": {
            "fr":
                "<h2>Programme</h2>"+
                "<ul><li>Algorithmique de base, structures itératives et prédicats.</li>"+
                "<li>Les tableaux : parcours, recherches séquentielle et dichotomique, tris.</li>"+
                "<li>Complexité : quelques notions à partir d'exemples</li>"+
				"<li>Programmation : "+
                "Mise en application des différents concepts vues en algorithmique : structures de contrôle, "+
                "tests logiques, boucles.</li>"+
				"<li>Traitement des accès fichiers séquentiels : lecture /écriture</li>"+
                "<li>Bases de la modélisation orientée objet : élaboration de classes, utilisation de bibliothèques "+
                "ou de modules prédéfinis.</li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul><li>"+
                "<h3>Objectifs pédagogiques</h3></li>"+
                "<li>Analyser un problème donné et concevoir l'algorithme correspondant.</li>"+
                "<li>Apprentissage de la programmation au travers de différents langages classiques ou orientés objet.</li>"+
                "<li>Conception de modules de traitement pour les données biologiques.</li>"+
				"<li>"+
                "<h3>Compétences acquises</h3></li>"+
                "<li>Convertir un problème concret en une suite d'instructions programmables.</li>"+
                "<li>Maitrise des concepts essentiels d'un langage de programmation.</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENJ1BS7202_01/algorithmique-et-programmation"
    },


/**********************************************
Semester 8:

Enseignements obligatoires                                                  ECTS	CM	TD	TP
Initiation à la Recherche et/ou Développement	 F1BS8201                   12		45h	
Méthodes et outils pour la biologie des systèmes	J1BS8203                9	27h		

Choix 1 UE de 9 ECTS                                                        ECTS	CM	TD	TP
Informatique appliquée à la biologie: modélisation et ima	C0BS8M01  KM2BS04U      9	10h	5h	
Programmation orienté objet                             	                9	27h		

**********************************************/

    "F1BS8201" : {
        "id": "F1BS8201",
        "acronym": "InitR&D",
        "title": "Initiation à la Recherche et/ou Développement",
        "ects": 12,
        "semester": 8,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": "<h2>Programme</h2>"+
                "<p>Ce module - réalisé sous la supervision d'un maître de stage - consiste en une réalisation informatique "+
                "d'un logiciel de taille importante.</p>"+
                "<p>Elle sera suivie d'un rapport écrit et d'une soutenance.</p>",
            "en": ""
        },
        "html": "ENF1BS8201_01/initiation-a-la-recherche-et-ou-developpement"
    },
    
    "J1BS8203" : {
        "id": "J1BS8203",
        "acronym": "MOBioS",
        "title": "Méthodes et outils pour la biologie des systèmes",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul>"+
                "<li>Récursivité, structures linéaires, structures arborescentes.</li>"+
                "<li>Arbre binaire, arbre binaire de recherche, tas, graphes: algorithme de parcours.</li>"+
                "<li>Approfondissements des notions statistiques vues dans l'UE <b>Approches expérimentales en biologie</b></li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Nécessaire:</h3>"+
                "<p>Avoir acquis les concepts de base des UE programmation et algorithmique du semestre 1</p>",
            "en": ""
        },
        "html": "ENJ1BS8203_01/methodes-et-outils-pour-la-biologie-des-systemes"
    },

    "C0BS8M01" : {
        "id": "C0BS8M01",
        "acronym": "InfoApp",
        "title": "Informatique appliquée à la biologie: modélisation et imagerie",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "hidden",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<h3>Modélisation</h3>"+
                "<ul>"+
                "<li>Introduction générales sur les neurosciences computationnelles : modélisation, intérêt et principes de base en neurosciences</li"+
                "<li>Principes et modélisation des systèmes dynamiques, applications aux neurosciences</li>"+
                "<li>Dynamique des réseaux corticaux</li>"+
				"<li>Codage et décodage du signal neuronal</li>"+
                "<li>Modélisation de l’excitabilité neuronale (modèles ioniques, modèle de Hodgkin-Huxley, modèles cinétiques)</li>"+
                "<li>Les modèles \"integrate and fire\" et apparentés et les modèles de grands réseaux</li>"+
                "<li>Des données expérimentales à la construction d’un modèle : préparer l’un pour l’autre.</li>"+
                "<li>Modifications des propriétés intrinsèques et synaptiques : modéliser la plasticité</li>"+
                "<li>Interaction synaptiques au sein de réseaux simples</li>"+
                "<li>Neuro-ingénierie (interfaces cerveau-machine, Neuro-électronique, Neuro-prothèses)</li>"+
                "<li>Implémentation d'un miniprojet de modélisation (contrôle continu)</li>"+
                "<li>Synthèse sur un article de recherche en neurosciences computationnelles (examen)</li>"+
                "</ul>"+
                "<h3>Imagerie</h3>"+
                "<h4>Partie théorique</h4>"+
                "<ul><li>Image numérique. Vidéos.</li>"+
                "<li>Amélioration d'images et de traitements (débruitage, correction luminosité/contraste et défaut d'illumination).</li>"+
                "<li>Analyse des images: Mesures, Reconnaissance de formes. Suivi de formes.</li>"+
                "<li>Notion de programmation en vue de l'automatisation de tâches pour le traitement et l'analyse de vidéos.</li>"+
                "</ul>"+
                "<h4>Partie pratique:</h4>"+
                "<ul><li>Application à des vidéos (suivi du chemin d'une souris dans un labyrinthe, "+
                "croissance d'un neurone en vidéomicroscopie à fluorescence,etc.).</li>"+
                "<li>Utilisation d'ImageJ, installation de greffons (plugins).</li>"+
                "<li>Programmation de Macros/Scripts.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<h4>Modélisation</h4>"+
                "<ul><li>Comprendre et savoir mettre en œuvre les principes et outils logiciels utilisés pour modéliser la biologie du "+
                "système nerveux, de l'échelle de la cellule à celle du réseau</li>"+
				"<li>Acquérir les bases des sciences théoriques appliquées "+
                "à la compréhension de la dynamique du système nerveux</li></ul>"+
                "<h4>Imagerie</h4>"+
                "<ul><li>Donner les éléments nécessaires du point de vue des outils informatiques</li></ul>"+
                "<h3>Compétences acquises</h3>"+
                "<h4>Modélisation</h4>"+
                "<ul><li>Compréhension des méthodes et principes de base de la modélisation en biologie</li>"+
                "<li>Maîtrise des outils et logiciels dédiés à la modélisation en neuroscience</li>"+
                "<li>Compréhension des méthodes en Neurosciences Théoriques et Computationnelles</li>"+
                "<li>Connaissance de l’apport des Neurosciences Théoriques en Neurosciences Fondamentales "+
                "et dans le domaine de la Neuro-ingénierie.</li>"+
                "</ul>"+
                "<h4>Imagerie</h4>"+
                "<ul><li>Appréhender les divers moyens d'amélioration des images scientifiques en vue de leur analyse.</li>"+
                "<li>Savoir utiliser des fonctions simples de programmation (scripting) pour traiter des vidéos.</li>"+
                "<li>Utilisation du logiciel ImageJ.</li></ul>",
        "en": ""
        },
        "html": "ENC0BS8M01_01/informatique-appliquee-a-la-biologie-modelisation-et-ima"
    },
    
    'C0BS8M01-Model' : {
        'id'                : "C0BS8M01-Model",
        'acronym'           : "InfoApp-Model",
        'visibility'        : 'visible', // visible or hidden 
        'background_color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "C0BS8M01"
    },
    'C0BS8M01-Imag' : {
        'id'                : "C0BS8M01-Imag",
        'acronym'           : "InfoApp-Imag",
        'visibility'        : 'visible', // visible or hidden 
        'background_color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "C0BS8M01"
    },

    "J1BS8202" : {
        "id": "J1BS8202",
        "acronym": "POO",
        "title": "Programmation orientée objet",
        "ects": 9,
        "semester": 8,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                    "<ul>"+
                    "<li>Modélisation objet:"+
                    "<ul><li>Héritage simple.</li>"+
                    "<li>Héritage complexe.</li>"+
                    "<li>Classes abstraites.</li>"+
                    "</ul>"+
                "</li>"+
                "<li>Traduction en langages C++, java.</li>"+
                "<li>Gestion dynamique: exceptions</li>"+
                "<li>Modèles de classes templates.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>Maîtriser les concepts de la programmation objet.</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>Développer une application en langage objet.</li></ul>",
            "en": ""
        },
        "html": "ENJ1BS8202_01/programmation-oriente-objet"
    },
    
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
http://www.u-bordeaux.fr/formation/2015/PRMASB_171/master-biologie-sante-specialite-bioimagerie/enseignement/ENJ1SB9700_01/visualisation-et-exploration-de-donnees-3d

Choix 1 UE de 6 ECTS                                                        ECTS	CM	TD	TP
Programmation Objet Avancée	                                                6		30h	
Approche objet	                                                            6	28h	30h	
Outils d'indexation et de classification de l'information	                6		24h	
Systemes Autonomes	                                                        6		24h	
**********************************************/

    "J1BS9204" : {
        "id": "J1BS9204",
        "acronym": "ClassData",
        "title": "Classification des données issues des banques de données biologiques",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        'background_color': '#ff9100',
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Data mining : introduction du concept d'extraction de connaissances à partir de données brutes.</li>"+
                "<li>Algorithmes de classification (bayesienne et par arbres de décision) et étude des problèmes de regroupement (clustering).</li>"+
                "<li>Algorithmique des mots et des arbres : applications aux structures macromoléculaires.Présentation des méthodes et algorithmes "+
                "de base pour le traitement algorithmique des mots et des arbres, et leurs applications dans les problèmes de comparaison et "+
                "d'alignement de séquences, de repliement de séquences (structures secondaires).</li>"+
                "<li>Traitement des graphes et visualisation des grands jeux de données.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<p>Apprentissage des techniques avancées de traitement de données biologiques de la génomique à la métabolomique.</p>"+
                "<h3>Compétences acquises</h3>"+
                "<ul>"+
                "<li>Méthode de fouille de données</li>"+
                "<li>Méthodes de classification</li>"+
                "<li>Recherche de motifs</li>"+
                "<li>Etiquetage</li>"+
                "<li>Analyse de séquences à grande échelle</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENJ1BS9204_01/classification-des-donnees-issues-des-banques-de-donnees-b"
    },

    "F1BS9201" : {
        "id": "F1BS9201",
        "acronym": "CommPR&D",
        "title": "Communication et conception d'un projet de recherche et/ou développement",
        "ects": 9,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        'background_color': '#a4ff80',
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<p>Programme des enseignements théoriques</p>"+
                "<ul><li>Méthodes d'analyse et de conception des systèmes informatiques:</li>"+
                "<li>UML</li>"+
                "<li>Design Patterns</li>"+
                "<li>Etude de la mise en oeuvre d'un cahier des charges, de la définition des besoins, de techniques de gestion de configuration.</li>"+
                "<li>Formalisation de connaissances, outils de structuration de données langage de type XML pour la biologie.</li>"+
                "</ul>"+
                "<p>Programme des enseignements dirigés</p>"+
                "<p>Les étudiants appliqueront les techniques de génie logiciel dans le cadre d'un projet comportant la conception "+
                "et la mise en oeuvre d'une application informatique.</p>"+
                "<p>Contenu générique pour cette UE commune</p>"+
                "<ul>"+
                "<li>Présentation des principales phases du processus dans un projet scientifique et/ou de développement (définition "+
                "stratégique, opérationnelle, réalisation et suivi, évaluation)</li>"+
                "<li>Présentation des liaisons vertueuses \"Méthodologie du projet et démarche qualité\" avec une introduction à l'assurance "+
                "qualité au laboratoire, en système de production, cahiers de laboratoire, bonnes pratiques de laboratoire, etc.</li>"+
                "<li>Introduction aux brevets et régimes juridiques associés</li>"+
                "<li>Projet tutoré de veille technologique et/ou d'analyse bibliographique ciblées sur des sujets d'actualité (rapport écrit "+
                "et oral).</li>"+
                "<li>Mise en place d'une formation pratique sur la valorisation et le transfert technologique</li>"+
                "<li>Utilisation d'un ensemble d'outils informatiques (logiciels, bases de données, réseau WEB, progiciel, etc.) pour élaborer un "+
                "rapport, une veille technologique</li>"+
                "<li>Suivi d'une série de conférences organisées avec des chercheurs, des professionnels du secteur des biotechnologies</li>"+
                "<li>Rencontre de professionnels porteurs de projets pour illustrer et documenter la création d'entreprises à partir d'un concept, "+
                "d'une idée scientifique (notion de jeunes pousses)</li>"+
                "<li>Visite d'entreprises, de laboratoires d'excellences ou de plateformes technologiques</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENF1BS9201_01/communication-et-conception-d-un-projet-de-recherche-et-ou-developpement"
    },

    "F6BS9202" : {
        "id": "F6BS9202",
        "acronym": "Entreprise",
        "title": "Connaissance de l'entreprise",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<p>Découverte du secteur et les métiers de la bioinformatique industrielle.</p>"+
                "<p>Programme détaillé</p>"+
                "<ul><li>L'enseignement théorique comprend d'une part des cours présentant les principes de la conduite de projet en "+
                "milieu industriel et une série de conférences au cours desquelles des industriels viendront présenter leurs entreprises "+
                "et métiers et répondre aux questions des étudiants concernant les perspectives de carrière offertes.</li>"+
                "<li>L'enseignement dirigé se fait sous forme de projets réalisés individuellement ou en groupe. </li>"+
                "<li>Les projets individuels comportent :"+
                    "<ul>"+
                        "<li>la recherche d'information sur une entreprise de bioinformatique "+
                        "et débouche sur la remise d'un rapport et la présentation d'un exposé ;</li>"+
                        "<li>la recherche d'une offre d'emploi conduisant à la simulation d'une procédure de recrutement "+
                        "(écriture d'un CV, d'une lettre de motivation et entretien).</li>"+
                        "<li>Les projets de groupe portent sur l'installation et l'évaluation d'un logiciel de bioinformatique commercial "+
                        "et se font en collaboration avec les entreprises (qui sont sollicitées pour mettre à disposition une licence "+
                        "gratuite du logiciel). Ces débouchent également sur l'écriture d'un rapport (remis aux entreprises partenaires "+
                        "si elles le souhaitent) et la présentation d'un exposé.</li>"+
                    "</ul>"+
                "</li></ul>"+
                "<p>Des intervenants issus du secteur industriel seront invités dans cette UE comme par exemple des utilisateurs "+
                "d'outils bioinformatiques (Sanofi Aventis, Biomérieux, etc.) et des producteurs de logiciels (GenoMining, Biomax "+
                "Informatics AG, etc.).</p>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Pré-requis</h3>"+
                "<ul><li>Connaître les banques de données et logiciels de bioinformatique. Etre capable d'installer et configurer un "+
                "logiciel dans un environnement UNIX ou WIndows.</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENF6BS9202_01/connaissance-de-l-entreprise"
    },

    "C1BS9205" : {
        "id": "C1BS9205",
        "acronym": "ModSysBio",
        "title": "Modélisation des systèmes biologiques",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<h3>Programme des enseignements théoriques</h3>"+
                "<ul><li>Aperçu du métabolisme cellulaire</li>"+
                "<li>Structure des réseaux métaboliques. Matrice de stoechiométrie. Modes élémentaires</li>"+
                "<li>Théorie du contrôle du métabolisme.</li>"+
				"<li>Les réseaux de régulation.</li>"+
                "<li>Modélisation du métabolisme et des réseaux de régulation.</li>"+
                "<li>Les outils de modélisation (Equations différentielles, Réseaux de Petri, Systèmes multi-agents,...)</li>"+
                "</ul>"+
                "<h3>Programme des enseignements dirigés et pratiques.</h3>"+
                "<ul>"+
                "<li>Sous forme d'analyse approfondie d'articles</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul>"+
                "<li>Acquisition de la maitrise des outils d'appréhension des réseaux métaboliques</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul>"+
                "<li>Capacité à réaliser une analyse de réseaux biologiques depuis les données expérimentales "+
                "jusqu'à la modélisation</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENC1BS9205_01/modelisation-des-systemes-biologiques"
    },

    "J1BS9203" : {
        "id": "J1BS9203",
        "acronym": "Prot3D",
        "title": "Visualisation de la Structure de Protéines",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[required],GENORG[required],ORGECO[required],BSC[required]",
        'background_color': '#eef409',
        "visibility": "visible",
        "contents": {
            "fr": 
            "<h2>Programme</h2>"+
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
            "<h3>Pré-requis</h3>"+
            "<p>Notion de programmation acquises en master 1 de bioinformatique</p>",
            "en": ""
        },
        "html": "ENJ1BS9203_01/visualisation-de-la-structure-de-proteines"
    },
    
    "B0BS9319" : {
        "id": "B0BS9319",
        "acronym": "AnglaisM2",
        "title": "Anglais",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        'background_color': '#0095ff',
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Conférences scientifiques et débats par des scientifiques anglophonesAnalyses d'articles scientifiques "+
                "ou de rapport en anglais</li>"+
                "<li>Initiation a la rédaction de productions scientifiques en anglais</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENB0BS9319_01/anglais"
    },
    
    "C6SB9M02" : {
        "id": "C6SB9M02",
        "acronym": "ArchiGen",
        "title": "Architecture du génome",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Architecture du génome : centromère, télomère et topologie de la chromatine</li>"+
                "<li>Organisation des génomes : séquences répétées, familles multigéniques et domaines répétés</li>"+
                "<li>Plasticité des génomes eucaryotes, éléments transposables</li>"+
                "<li>Architecture nucléaire : domaines nucléaires spécialisés (nucléole, corps de Cajal), territoires chromosomiques</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>L'objectif est de décrire l'architecture nucléaire et l'organisation des génomes eucaryotes et d'évoquer certains "+
                "éléments impliqués dans l'évolution des génomes.</li>"+
                "</ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>Connaissances relatives à l'architecture nucléaire, l'architecture des génomes et leur évolution</li></ul>",
            "en": ""
        },
        "html": "ENC6SB9M02_01/architecture-du-genome"
    },
    
    "C6SB9M03" : {
        "id": "C6SB9M03",
        "acronym": "GenHuman",
        "title": "Génétique Humaine",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Génome humain </li>"+
                "<li>Génétique médicale et conseil génétique</li>"+
                "<li>Neurogénétique</li>"+
                "<li>Oncogénétique</li>"+
                "<li>Maladies mitochondriales</li>"+
                "<li>Génétique du développement</li>"+
                "<li>Approches thérapeutiques</li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<p>Du génome humain à la physiopathologie et aux applications en génétique médicale.</p>"+
                "<h3>Compétences acquises</h3>"+
                "<p>Connaissances et savoir en génétique humaine ; aspects physiopathologiques.</p>",
            "en": ""
        },
        "html": "ENC6SB9M03_01/genetique-humaine"
    },
    
    "C6SB9M04" : {
        "id": "C6SB9M04",
        "acronym": "DivCell",
        "title": "Division et cycle cellulaire",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Machinerie du cycle cellulaire et check points. </li>"+
                "<li>Le contrôle du cycle cellulaire chez les eucaryotes. </li>"+
                "<li>Les points de contrôle en phase G1, G2 et à la sortie de mitose. </li>"+
                "<li>Le contrôle de séparation des chromosomes. </li>"+
                "<li>Les modèles KO des cyclines et des kinases cycline dépendantes chez la souris. </li>"+
                "<li>Le cycle cellulaire chez les plantes.</li>"+
                "<li>L'influence des voies de signalisation sur la régulation du cycle cellulaire.</li>"+
                "</ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Objectifs pédagogiques</h3>"+
                "<ul><li>Approfondir les connaissances sur le cycle cellulaire chez les eucaryotes inférieurs et supérieurs.</li></ul>"+
                "<h3>Compétences acquises</h3>"+
                "<ul><li>La régulation du cycle cellulaire. Les molécules qui interviennent dans cette régulation et les liens entre "+
                "les fonctions de ces molécules et le développement de maladies néoplastiques.</li></ul>",
            "en": ""
        },
        "html": "ENC6SB9M04_01/division-et-cycle-cellulaire"
    },
    
    "J1BS9207" : {
        "id": "J1BS9207",
        "acronym": "AlgoBioGraph",
        "title": "Algorithmique pour la bio-informatique et graphe",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Traitement automatique et analyse d'objets biologiques arborescents (structures secondaires d'ARNs, "+
                "architecture de plantes, etc.): "+
                "<ul><li>comparaison d'arborescences, </li>"+
                "<li>distance d'édition (opérations structurelles élémentaires, opérations d'édition).</li>"+
                "</ul></li>"+
                "<li> Formulation en termes de problème d'optimisation, "+
                "<ul><li>algorithmes efficaces en temps et en espace, </li>"+
                "<li>solutions incrémentales, </li>"+
                "<li>programmation dynamique. </li></ul>"+
                "</li>"+
				"<li>Réseaux d'interactions et métaboliques, voies métaboliques. </li>"+
				"<li>Exploration des relations du type \"guilt by association\", recherche de chemins et sous-graphes indiquant des voies de signalisation, "+
				"recherche de modes élémentaires.</li></ul>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Objectifs pédagogiques</h3>"+
				"<p>Présenter les méthodes informatiques d'exploitation de grandes masses de données, dont la bioinformatique est l'un des domaines "+
				"d'application. On présentera en particulier les algorithmes sur les mots et sur les arbres pour traiter des données biologiques.</p>"+
				"<h3>Compétences acquises</h3>"+
				"<ul><li>Modéliser un problème bio-informatique en termes de structures de données (mots, arbres, graphes). </li>"+
				"<li>Utilisation des principaux algorithmes, méthodes et heuristiques développées en bio-informatique ou dans des domaines "+
				"de l'informatique fondamentale et pertinent pour la bio-informatique. </li>"+
				"<li>Mesurer le potentiel applicatif des méthodes et outils développés en bio-informatique pour d'autres champs "+
				"applicatifs tels les sciences sociales. </li>"+
				"<li>Avoir une vue sur l'ensemble des outils et implémentations mis à disposition par la communauté de recherche.</li></ul>",
            "en": ""
        },
        "html": "ENJ1BS9207_01/algorithmique-pour-la-bio-informatique-et-graphe"
    },

    "J1SB9700" : {
        "id": "J1SB9700",
        "acronym": "Visu3D",
        "title": "Visualisation et Exploration de Données 3D",
        "ects": 3,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Traitement automatique et analyse d'objets biologiques arborescents (structures secondaires d'ARNs, "+
                "architecture de plantes, etc.): "+
                "<ul><li>comparaison d'arborescences, </li>"+
                "<li>distance d'édition (opérations structurelles élémentaires, opérations d'édition).</li>"+
                "</ul></li>"+
                "<li> Formulation en termes de problème d'optimisation, "+
                "<ul><li>algorithmes efficaces en temps et en espace, </li>"+
                "<li>solutions incrémentales, </li>"+
                "<li>programmation dynamique. </li></ul>"+
                "</li>"+
				"<li>Réseaux d'interactions et métaboliques, voies métaboliques. </li>"+
				"<li>Exploration des relations du type \"guilt by association\", recherche de chemins et sous-graphes indiquant des voies de signalisation, "+
				"recherche de modes élémentaires.</li></ul>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Objectifs pédagogiques</h3>"+
				"<p>Présenter les méthodes informatiques d'exploitation de grandes masses de données, dont la bioinformatique est l'un des domaines "+
				"d'application. On présentera en particulier les algorithmes sur les mots et sur les arbres pour traiter des données biologiques.</p>"+
				"<h3>Compétences acquises</h3>"+
				"<ul><li>Modéliser un problème bio-informatique en termes de structures de données (mots, arbres, graphes). </li>"+
				"<li>Utilisation des principaux algorithmes, méthodes et heuristiques développées en bio-informatique ou dans des domaines "+
				"de l'informatique fondamentale et pertinent pour la bio-informatique. </li>"+
				"<li>Mesurer le potentiel applicatif des méthodes et outils développés en bio-informatique pour d'autres champs "+
				"applicatifs tels les sciences sociales. </li>"+
				"<li>Avoir une vue sur l'ensemble des outils et implémentations mis à disposition par la communauté de recherche.</li></ul>",
            "en": ""
        },
        "path": "http://www.u-bordeaux.fr/formation/2015/PRMASB_171/master-biologie-sante-specialite-bioimagerie/enseignement",
        "html": "ENJ1SB9700_01/visualisation-et-exploration-de-donnees-3d"
    },


    "J1BS9206" : {
        "id": "J1BS9206",
        "acronym": "POA",
        "title": "Programmation Objet Avancée",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        'background_color': '#e8e8e8',
        "visibility": "visible",
        "contents": {
            "fr": "",
            "en": ""
        },
        "html": "ENJ1BS9206_01/programmation-objet-avancee"
    },
    
    "J1INAW12" : {
        "id": "J1INAW12",
        "acronym": "AppObj",
        "title": "Approche objet",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<ul><li>Rappels de programmation objet</li>"+
				"<li>Concepts avancés : exceptions, clonage, classes génériques, collections, itérations, classes internes...</li>"+
				"<li>Utilisation de quelques modèles de conception objets : Adaptateur, Décorateur, Observable ...</li>"+
				"<li>Utilisation de la programmation objet dans certains types de développements : IHM, Système ...</li>"+
				"</ul>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Pré-requis</h3>"+
				"<ul><li>Connaissances de la programmation impérative (langage C)</li>"+
				"<li>Connaissance et première utilisation d'un langage de programmation à objet (Java,C++,...)</li></ul>",
            "en": ""
        },
        "html": "ENJ1INAW12_01/approche-objet"
    },
    
    "J1IN9413" : {
        "id": "J1IN9413",
        "acronym": "OICI",
        "title": "Outils d'indexation et de classification de l'information",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        "visibility": "visible",
        'background_color': '#0af9f9',
        "contents": {
            "fr": 
                "<h2>Programme</h2>"+
                "<p>Analyse de données</p>"+
                "<h2>Objectifs et compétences</h2>"+
                "<h3>Pré-requis</h3>"+
                "<p>Informatique : Algorithmique, Structures de Données et Programmation (niveau L3)</p>",
            "en": ""
        },
        "html": "ENJ1IN9413_01/outils-d-indexation-et-de-classification-de-l-information"
    },
    
    "J1IN9523" : {
        "id": "J1IN9523",
        "acronym": "SysAuto",
        "title": "Systémes Autonomes",
        "ects": 6,
        "semester": 9,
        "students": "C++BIO[elective],GENORG[elective],ORGECO[elective],BSC[elective]",
        'background_color': '#ffa6fa',
        "visibility": "visible",
        "contents": {
            "fr": 
                "<h2>Programme</h2><p>Le programme comprend en particulier les points suivants:</p>"+
                "<h3>Configurations et plates-formes :</h3>"+
                "<p>Les systèmes actuels les plus pertinents seront étudiés:</p>"+
                "<ol><li>drones aériens</li>"+
				"<li>robots terrestres</li>"+
				"<li>capteurs</li>"+
				"<li>drones sous-marins</li></ol>"+
				"<p>L'accent sera mis en particulier sur l'autonomie et les environnements systèmes et logiciels associés, "+
				"indispensables à la réalisation d'une mission l'envergure. En effet, le contrôle temps réel par un opérateur "+
				"extérieur n'étant pas toujours possible, un certain nombre de décisions doivent donc être prises de manière autonome "+
				"par le système embarqué. Néanmoins, de par la réglementation et pour des raisons opérationnelles, des informations "+
				"doivent être ramenées vers un environnement logiciel de contrôle, qui lui, est à la disposition d'un opérateur, "+
				"auquel il présente un certain nombre d'informations (signes vitaux - position, altitude, etc. - par exemple -). "+
				"Cette chaine logicielle est une clef de voute de ces systèmes complexes qu'il est important de maîtriser.</p>"+
				"<h3>Ecosystème :</h3>"+
				"<p>Les domaines d'application sont nombreux et cette filière s'est structurée localement et nationalement, "+
				"avec des interactions internationales fortes. Mais ce potentiel fort ne doit pas laisser croire que 'tout est "+
				"permis', et il est donc crucial d'avoir une bonne connaissance des réglementations en cours.</p>"+
				"<ol><li>domaines d'applications et cas concrets</li>"+
				"<li>structuration du domaine, régionale/nationale/internationale</li>"+
				"<li>règlementation</li></ol>"+
				"<h3>Problématiques de recherche :</h3>"+
				"<p>Ces systèmes offrent de nouvelles voies de développement mais soulèvent un certain nombre de problèmes théorique "+
				"ou plus applicatifs qui relèvent d'activités de recherche. Par exemple :</p>"+
				"<ol><li>la structuration en essaims (swarming) ou flotte d'appareils</li>"+
				"<li>la mobilité, les graphes de communication sous-jacents, la dynamique du système, les modèles associés</li>"+
				"<li>les techniques de type sense and avoid, la localisation en in-door et out-door</li>"+
				"<li>les technologies associées, les problématiques applicatives tracking video, traitement d'images, radio, etc.</li></ol>"+
				"<h3>Mise en oeuvre</h3>"+
				"<p>Enfin, il est important que les étudiants qui choisissent cette UE puissent être opérationnels immédiatement. "+
				"C'est pourquoi, ils seront formés aux bases de l'aéronautique et suivront une formation d'opérateur drone, indispensable "+
				"aujourd'hui pour pouvoir faire voler un tel appareil.</p>"+
				"<ol><li>Bases d'aéronautique</li>"+
				"<li>Formation opérateur (pour l'essentiel an auto-apprentissage) + examen final</li></ol>"+
				"<h2>Objectifs et compétences</h2>"+
				"<h3>Pré-requis<br></h3>"+
				"<p>UEs Réseaux, Administration Réseaux et Systèmes d'exploitation de M1</p>",
            "en": ""
        },
        "html": "ENJ1IN9523_01/systemes-autonomes"
    },

/**********************************************
Semester 10:
Réalisation d'un projet de recherche et/ou développement
**********************************************/

    "F1BS0201" : {
        "id": "F1BS0201",
        "acronym": "StageM2",
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
                "<ul><li>Sujet de stage proposé par le Maître de Stage après validation par la commission pédagogique "+
                "de Master et choisi par l’étudiant en accord avec le responsable du stage.</li>"+
                "</ul>"+
                "</li>"+
                "<li>Parcours professionnel:"+
                "<ul><li>Sujet de stage défini par le Maître de Stage et l’étudiant en accord avec le responsable pédagogique.</li></ul>"+
                "</li></ul></li></ul>"+
                "<h2>Objectifs et compétences</h2>"+
                "<ul><li>Objectifs pédagogiques"+
                "<ul><li>Mise en situation dans un environnement professionnel pour la réalisation d'un projet de recherche "+
                "et/ou développement en appliquant les notions fondamentales de gestion d'un projet de recherche et/ou développement:"+
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
                "<li>Compétences , à analyser et critiquer les résultats, à synthétiser des résultats, à présenter à l'écrit "+
                "et à l'oral un projet et les résultats obtenus dans le cadre de ce projet.</li>"+
                "<li>Maîtrise de l’anglais pour les étudiants qui partent à l’étranger.</li>"+
                "</ul>"+
                "</li></ul>",
            "en": ""
        },
        "html": "ENF1BS0201_01/realisation-d-un-projet-de-recherche-et-ou-developpement"
    }
    
}
;/************************************
 * Jean-Christophe Taveau
 * Calendar
 * 2015
 ************************************/
 
 function TableCal() {
    this.cells = new Array(TableCal.NROWS);
    for (var row = 0; row < TableCal.NROWS; row++) {
        this.cells[row] = new Array(5);
    }
    this.reset();
}

TableCal.NROWS = 22;
TableCal.NCOLS = 5;

TableCal.prototype.reset = function() {
    for (var i=0; i < TableCal.NROWS; i++) {
        for (var j = 0; j < TableCal.NCOLS; j++) {
            this.cells[i][j] = 0;
        }
    }
}
;
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


/*************************
function getEventsOfWeek(weeknum,cal_data) {
    var today = new Date(y,m,d);
    var weekevents = [];
    


    // Search events occuring during this week 
    for (var index in cal_data) {
        var element = cal_data[index];
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
        for (var i = 1; i < 6; i++) {
            var day = new Date(y,m,d - today.getDay() + i);
            var dayD       = getYYYYMMDD(day);       // Days number since UTC
            var startDateD = getYYYYMMDD(startDate); // Days number since UTC
            var endDateD   = getYYYYMMDD(endDate);   // Days number since UTC
            var tmp = new Date();tmp.setTime(day.getTime() );
            console.log(dayD,startDateD,endDateD);
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
    
    return weekevents;
}
******************************************************************************************************/


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
            var startDate = new Date(element.date_start);
            var endDate   = new Date(element.date_end);
            console.log('START ' + startDate);
            
            // From MON to FRI
            for (var i = 1; i < 6; i++) {
                var day = new Date(y,m,d - today.getDay() + i);
                var dayD       = day.toCalString().substr(0,10);  // Days number since UTC
                var startDateD = element.date_start.substr(0,10); // Days number since UTC
                var endDateD   = element.date_end.substr(0,10);   // Days number since UTC
                console.log(dayD,startDateD,endDateD,day, day.toCalString());
                if ( dayD >= startDateD && dayD <= endDateD ) { // HACK: What about multi-days event ?
                    console.log(day + ' creates an event with ' + element.ID + ' ' +  element.summary);
                    element.weekdayIndex = i;
                    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
                    element.startDate = startDate;
                    element.endDate   = endDate;
                    element.duration  = Math.ceil(timeDiff / (1000 * 60));
                    weekevents.push(element);
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
        
        
/******************************************************************************
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
        for (var i = 1; i < 6; i++) {
            var day = new Date(y,m,d - today.getDay() + i);
            var dayD       = getYYYYMMDD(day);       // Days number since UTC
            var startDateD = getYYYYMMDD(startDate); // Days number since UTC
            var endDateD   = getYYYYMMDD(endDate);   // Days number since UTC
            var tmp = new Date();tmp.setTime(day.getTime() );
            console.log(dayD,startDateD,endDateD);
            if ( dayD >= startDateD && dayD <= endDateD ) { // HACK: What about multi-days event ?
                console.log(day + ' creates an event with ' + element.ID + ' ' +  element.summary);
                element.weekdayIndex = i;
                var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
                element.startDate = startDate;
                element.endDate   = endDate;
                element.duration  = Math.ceil(timeDiff / (1000 * 60));
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
***************************************************************/
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
    updateCalendar(date.getFullYear(),date.getMonth(),date.getDate());
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
    updateCalendar(date.getFullYear(),date.getMonth(),date.getDate());
}


function getYYYYMMDD(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() < 10) ? ('0'+ date.getMonth()) : date.getMonth();
    var day   = (date.getDate() < 10) ? ('0'+ date.getDate()) : date.getDate();
    return year + month + day;
}

// From pikaday 
// https://github.com/dbushell/Pikaday/blob/master/pikaday.js
// This formula follows the US norm 
/***********
function getWeekNum(y,m,d) {
    var firstjan = new Date(y, 0, 1);
    return Math.ceil((((new Date(y, m, d) - firstjan) / 86400000) + firstjan.getDay()+1)/7);
}
*************/

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

function findEvent(events,start,col) {
    var day = col + 1 // col#0 = MONDAY = day#1
    var html='';
    for (var i = 0; i < events.length; i++) {
        var startMin = Math.round((events[i].startDate.getHours() + events[i].startDate.getMinutes()/60.0) * 2 ) * 30; // round to the nearest half hour (in minutes)
        var startDay = events[i].weekdayIndex;
        
        if (startMin == start && startDay == day) {
            console.log('findEvent ' + startMin +' ' + start + ' ' + events[i].startDate);

            html += createEventCell(events[i]);
            for (var t=0; t < events[i].duration / 30; t++) {
                console.log('table ',(start - 480 )/30 +t,' ',day);
                table.cells[(start - 480 )/30 + t][col]++;
            }
        }
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
    if (ID[0] === 'C') {
        var courseID = calendar_data[ID].summary;
        var the_course = course_data[courseID];

        html += '<td rowspan="'+ (cal_event.duration / 60 * 2) +'" style="background-color: '+the_course.background_color+';">';
        html += '<div class="course" style="background-color: '+the_course.background_color+';">';
        html += '<ul class="list-unstyled">';
        html += '<li>';
        html += '<a data-toggle="modal" ';
        html += 'href="javascript:void(0)" ';
        html += 'class="btn btn-danger btn-xs" '; // Color is Red: 'required event' btn-danger and Blue: 'elective' btn-primary
        html += 'onclick="displayCalendarModal(\'' + cal_event.ID + '\')">';
        html += the_course.acronym + '</a>'; // TODO: &nbsp;[' + cal_event.Nbsession +'] ' Sessions number ??
        console.log(cal_event.startDate.getHours()  + ' '+ (parseInt(cal_event.startDate.getHours())   < 10) );
        var hh = (parseInt(cal_event.startDate.getHours())   < 10) ? ('0'+ cal_event.startDate.getHours())   : cal_event.startDate.getHours();
        var mm = (parseInt(cal_event.startDate.getMinutes()) < 10) ? ('0'+ cal_event.startDate.getMinutes()) : cal_event.startDate.getMinutes();
        html += '<span class="pull-right" style="font-weight: bold">' + hh + ':' + mm + '-';
        hh = (parseInt(cal_event.endDate.getHours())   < 10) ? ('0'+ cal_event.endDate.getHours())   : cal_event.endDate.getHours();
        mm = (parseInt(cal_event.endDate.getMinutes()) < 10) ? ('0'+ cal_event.endDate.getMinutes()) : cal_event.endDate.getMinutes();
        html += hh + ':' + mm + '</span>';
        html += '</li>';
        html += '<li>'+cal_event.comment +'</li>';
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
