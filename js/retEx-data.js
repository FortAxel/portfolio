const retexData = {
    'towa': {
        linkTitle: 'IA pour un jeu de plateau (Java)',
        title: 'Jeu de plateau Java avec IA',
        image: './img/illustration_towa.png',
        requirements: [
            'Implémenter des règles de plus en plus complexes sur un jeu de plateau 16*16 donné.',
            'Prévoir les actions possibles en s\'adaptant à la situation de jeu',
            'Maintenir un répertoire GIT',
            'Créer une IA'
        ],
        tools: ['Java', 'GIT'],
        skills: [
            'Manipulations complexes sur tableaux Java',
            'Comprendre un ordre et adapter aux retours',
            'Versionner un répertoire GIT',
            'Hiérarchiser des actions pour gagner'
        ],
        toolLogos: ['./img/logo_java.png']
    },
    'robocup': {
        linkTitle: 'Application web de gestion de compétitions (Symfony)',
        title: 'Application web de gestion de compétitions',
        image: '../img/illustration_robocup.png',
        requirements: [
            'Développer une application web avec Symfony',
            'Gérer une base de données',
            'Interface utilisateur responsive'
        ],
        tools: ['Symfony', 'PHP', 'MySQL'],
        skills: [
            'Développement web avec Symfony',
            'Gestion de base de données',
            'Conception d\'interface utilisateur'
        ],
        toolLogos: ['./img/logo_symfony.png']
    },
    'reseau': {
        linkTitle: 'Configuration réseau avec NextCloud (Bash)',
        title: 'Configuration réseau avec serveur NextCloud',
        image: '../img/illustration_reseau.png',
        requirements: [
            'Créer un réseau sur une machine, virtuelle avec deux ordinateurs, deux serveurs et un routeur',
            'Permettre le travail groupé dans une équipe',
            'Créer un tutoriel en Anglais et en MarkDown'
        ],
        tools: ['BASH', 'NextCloud', 'MarkDown'],
        skills: [
            'Configurer un réseau',
            'Administrer un réseau',
            'Rédiger un tutoriel en Anglais'
        ],
        toolLogos: ['./img/logo_bash.png']
    },
    'pixelwar': {
        linkTitle: 'Client Pixel Waj (js)',
        title: 'Client Pixel War',
        image: '../img/illustration_pixelWar.png',
        requirements: [
            'Créer interface utilisable pour 1 joueur à une pixel war',
            'Afficher et actualiser la grille et les joueurs en utilisant une API propriétaire'
        ],
        tools: ['JavaScript', 'HTML', 'CSS'],
        skills: [
            'Créer un site web',
            'Styliser un site web',
            'Programmation évenementielle',
            'Requêtes serveur en JavaScript'
        ],
        toolLogos: ['./img/logos_web.png']
    },
    'unideck': {
        linkTitle: 'Jeu de cartes 1 vs 1 (C#)',
        title: 'Jeu de cartes 1 vs 1',
        image: '../img/illustration_uniDeck.png',
        requirements: [
            'Créer l\'intéraction entre le jeu et les joueurs',
            'Ajouter des fonctionnalités pour créer la complexité',
            'Adapter l\'affichage en fonction des possibilités',
            'Créer le diagramme UML du projet'
        ],
        tools: ['C#', 'UML', 'bbbbbbbbb'],
        skills: [
            'Programmation évenementielle logicielle',
            'Modéliser un programme en détail',
            'Simplifier la compréhension d\'un code'
        ],
        toolLogos: ['./img/logo_cs.png']
    },
    'java': {
        linkTitle: 'Atelier d\'initiation au java (java)',
        title: 'Réaliser un atelier initiation au Java',
        image: '../img/illustration_java.png',
        requirements: [
            'Créer un jeu en Java et en créer un exercice pour les débutants visant à leur faire finir le programme',
            'Faire un tutoriel intuitif et chaleureux pour encourager ces débutants à en apprendre plus'
        ],
        tools: ['Java', 'Rédaction'],
        skills: [
            'Programmer un jeu simple',
            'Produire un code compréhensible',
            'Expliquer un programme et des concepts avec des mots simples'
        ],
        toolLogos: ['./img/']
    }
};

const navigationOrder = ['robocup', 'reseau', 'pixelwar', 'towa', 'unideck', 'java'];
