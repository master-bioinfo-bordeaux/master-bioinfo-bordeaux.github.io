
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

    
    'F6BS7M02' : {
        'id'        : "F6BS7M02", // F6BS7M02 ou KM1BS10U
        'acronym'   : "AEB",
        'ects'      : 6,
        'semester'  : 7, // semester 7 and 8 = M1  9 and 10 = M2
        'students'  : 'C++BIO[required],GENORG[required],ORGECO[required],BSC[elective]',
        'visibility': 'hidden', // <visible|hidden>     
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
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "F6BS7M02"
    },
    'F6BS7M02-Stats' : {
        'id'                : "F6BS7M02-Stats",
        'acronym'           : "AEB-Stats",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "F6BS7M02"
    },
    'F6BS7M02-Info' : {
        'id'                : "F6BS7M02-Info",
        'acronym'           : "AEB-Info",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
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
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Imag' : {
        'id'                : "J1BS7M01-Imag",
        'acronym'           : "BioMod-Imag",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "J1BS7M01"
    },
    'J1BS7M01-Stats' : {
        'id'                : "J1BS7M01-Stats",
        'acronym'           : "BioMod-Stats",
        'visibility'        : 'visible', // visible or hidden     
        'background-color'  : "#0a0a0a",
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
                "<li>Dynamique des réseaux corticaux</li><li>Codage et décodage du signal neuronal</li>"+
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
                "système nerveux, de l'échelle de la cellule à celle du réseau</li><li>Acquérir les bases des sciences théoriques appliquées "+
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
        'background-color'  : "#0a0a0a",
        'color'             : "#fff",   
        'link'              : "C0BS8M01"
    },
    'C0BS8M01-Imag' : {
        'id'                : "C0BS8M01-Imag",
        'acronym'           : "InfoApp-Imag",
        'visibility'        : 'visible', // visible or hidden 
        'background-color'  : "#0a0a0a",
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

    "F6BS9202" {
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
                "<h3>Nécessaire:</h3>"+
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
                "<li>Théorie du contrôle du métabolisme.</li><li>Les réseaux de régulation.</li>"+
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
                "<h3>Compétences acquises</h3><ul><li>Capacité à réaliser une analyse de réseaux biologiques depuis les données expérimentales "+
                "jusqu'à la modélisation</li>"+
                "</ul>",
            "en": ""
        },
        "html": "ENC1BS9205_01/modelisation-des-systemes-biologiques"
    },

    "J1BS9203" : {
        "id": "J1BS9203",
        "acronym": "PROT3D",
        "title": "Visualisation de la Structure de Protéines",
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
        "html": "ENJ1BS9203_01/visualisation-de-la-structure-de-proteines"
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
