///////////////////////////////////////////////////////////////////////
// Alimentation de la base de données avec des données par défault //
///////////////////////////////////////////////////////////////://///

if (Couleurs.find().count() === 0) {

    let CouleursList =[
        {
            name: "Blanc",
            image: "blanc.png"
        },
        {
            name: "Bleu",
            image: "bleu.png"
        },
        {
            name: "Noir",
            image: "noir.png"
        },
        {
            name: "Rouge",
            image: "rouge.png"
        },
        {
            name: "Vert",
            image: "vert.png"
        },
        {
            name: "Multicolore",
            image: "multi.png"
        }
    ];


    _.each(CouleursList, function (doc) {
        Couleurs.insert(doc);
    });


/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Pizzas /////////////////////////
///////////////////////////////////////////////////////////////////

    let PizzasList= [{
        image: "order1.png",
        name: "Paysanne ",
        description: "Sauce tomate, emmenthal, lardons fumés, champignons frais émincés, oeuf, mozzarella fraiche, olives noires confites. ",
        price: 11,
        categorie:"Pizzas"
    },
        {
            image: "order2.png",
            name: "Royale",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, champignons frais émincés, mozzarella fraiche, olives noires confites. ",
            price: 10,
            categorie:"Pizzas"
        },
        {
            image: "order3.png",
            name: "Valencia",
            description: "Sauce tomate, emmenthal, chorizo traiteur, poivrons frais, oeuf, mozzarella fraiche, olives noires confites. ",
            price: 12,
            categorie:"Pizzas"
        },
        {
            image: "order4.png",
            name: "4 saisons",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, champignons frais émincés, petits artichauts grillés, mozzarella fraiche, olives noires confites. ",
            price: 9,
            categorie:"Pizzas"
        },
        {
            image: "order5.png",
            name: "Buffalo",
            description: "Sauce tomate, emmenthal, steak haché, oignons cuits, mozzarella fraiche, olives noires confites. ",
            price: 10,
            categorie:"Pizzas"
        },
        {
            image: "order6.png",
            name: "Hawaïenne",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, dés d'ananas crus rôtis, mozzarella fraiche, olives noires confites",
            price: 12,
            categorie:"Pizzas"
        }
    ];

    _.each(PizzasList, function (doc) {
        Pizzas.insert(doc);
    });


/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Burgers ////////////////////////
///////////////////////////////////////////////////////////////////

    let BurgersList = [{
        image: "b1.png",
        name: "Le Daron ",
        description: "Après une bonne journée passée à couper du bois à la force des ongles rien ne vaut un bon daron ! Des champignons, des oignons frais et du munster pour l’haleine de bûcheron, du lard et de la sauce ciboulette pour se remplir la panse, bref, le daron c’est comme Mennen : « pour nous les gnomes ! » ",
        price: 11,
        categorie:"Burgers"
    },
        {
            image: "b2.png",
            name: "Le grand papa",
            description: "Qu’il pleuve, qu’il vente ou qu’il canicule, il y a pas de saison pour la raclette ! Un bon steak de boeuf, une belle tranche de jambon cru, quelques oignons confits, une poignée de champignons de Lutèce et un nappage de sauce cocktail, chuuuuut ! Tu l’entends chanter dans tes oreilles le bel accent savoyard ? ",
            price: 13,
            categorie:"Burgers"
        },
        {
            image: "b3.png",
            name: "La poulette",
            description: "Ôte tes tongs et allume la lumière de tes chakras ! hume ce délicieux poulet pané agrémenté de cheddar ! Hume ces quelques rondelles de tomate, cette roquette et sa sauce curry ! Bienvenu au Nirvana du burger, Papa sait aussi prendre soin de ton karma ! ",
            price: 9,
            categorie:"Burgers"
        },
        {
            image: "b4.png",
            name: "Le tête de lard",
            description: "Du lard paysan toasté délicatement posée sur du cheddar fondu et une viande de boeuf limousine, c’est du velours ! Mais alors quand on y ajoute quelques rondelles de tomate, de la roquette et une sauce béarnaise, là je vous le dis : cette Tête de lard, c’est de l’art ! ",
            price: 12,
            categorie:"Burgers"
        },
        {
            image: "b5.png",
            name: "Le gaillard",
            description: "C’est toi qui as peté ? Mais non c’est la bonne odeur du Munster ! Ce fromage alsacien relevé de quelques grains de cumin se marie parfaitement avec un bon steak de boeuf hâché, des oignons confits et de la roquette du jardin. Quant à sa sauce tartare… je me l’envoie dare-dare ! ",
            price: 13,
            categorie:"Burgers"
        },
        {
            image: "b6.png",
            name: "Le fils à papa",
            description: "Prêt pour un détour aux States en ouvrant simplement la bouche ? Un croc dans ce fils à Papa et ses oignons frits, pickles et sauce américaine t’emmène à Manhattan plus vite que le Concorde ! Oooooh yeah !",
            price: 10,
            categorie:"Burgers"
        }
    ];
    _.each(BurgersList, function (doc) {
        Burgers.insert(doc);
    });

/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Saladess ///////////////////////
///////////////////////////////////////////////////////////////////

    let SaladesList = [{
        image: "sa1.png",
        name: "L'auvergnate ",
        description: "Après une bonne journée passée à couper du bois à la force des ongles rien ne vaut un bon daron ! Des champignons, des oignons frais et du munster pour l’haleine de bûcheron, du lard et de la sauce ciboulette pour se remplir la panse, bref, le daron c’est comme Mennen : « pour nous les gnomes ! » ",
        price: 10,
        categorie:"Salades"
    },
        {
            image: "sa2.png",
            name: "La Nordiste",
            description: "Qu’il pleuve, qu’il vente ou qu’il canicule, il y a pas de saison pour la raclette ! Un bon steak de boeuf, une belle tranche de jambon cru, quelques oignons confits, une poignée de champignons de Lutèce et un nappage de sauce cocktail, chuuuuut ! Tu l’entends chanter dans tes oreilles le bel accent savoyard ? ",
            price: 13,
            categorie:"Salades"
        },
        {
            image: "sa3.png",
            name: "L'hollandaise",
            description: "Ôte tes tongs et allume la lumière de tes chakras ! hume ce délicieux poulet pané agrémenté de cheddar ! Hume ces quelques rondelles de tomate, cette roquette et sa sauce curry ! Bienvenu au Nirvana du burger, Papa sait aussi prendre soin de ton karma ! ",
            price: 11,
            categorie:"Salades"
        },
        {
            image: "sa4.png",
            name: " La Provençale",
            description: "Du lard paysan toasté délicatement posée sur du cheddar fondu et une viande de boeuf limousine, c’est du velours ! Mais alors quand on y ajoute quelques rondelles de tomate, de la roquette et une sauce béarnaise, là je vous le dis : cette Tête de lard, c’est de l’art ! ",
            price: 9,
            categorie:"Salades"
        },
        {
            image: "sa5.png",
            name: "La César",
            description: "C’est toi qui as peté ? Mais non c’est la bonne odeur du Munster ! Ce fromage alsacien relevé de quelques grains de cumin se marie parfaitement avec un bon steak de boeuf hâché, des oignons confits et de la roquette du jardin. Quant à sa sauce tartare… je me l’envoie dare-dare ! ",
            price: 8,
            categorie:"Salades"
        },
        {
            image: "sa6.png",
            name: "Le fils à papa",
            description: "Prêt pour un détour aux States en ouvrant simplement la bouche ? Un croc dans ce fils à Papa et ses oignons frits, pickles et sauce américaine t’emmène à Manhattan plus vite que le Concorde ! Oooooh yeah !",
            price: 12,
            categorie:"Salades"
        }
    ];
    _.each(SaladesList, function (doc) {
        Salades.insert(doc);
    });


/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Boissons ///////////////////////
///////////////////////////////////////////////////////////////////

    let BoissonsList = [{
        image: "bo1.png",
        name: "Coca-Cola",
        price: 1,
        categorie:"Boissons"
    },
        {
            image: "bo2.png",
            name: "Coca-Cola Light",
            price: 1,
            categorie:"Boissons"
        },
        {
            image: "bo3.png",
            name: "Coca-Cola Zero",
            price: 1,
            categorie:"Boissons"
        },
        {
            image: "bo4.png",
            name: "Fanta Orange",
            price: 1,
            categorie:"Boissons"
        },
        {
            image: "bo5.png",
            name: "Sprite",
            price: 1,
            categorie:"Boissons"
        },
        {
            image: "bo6.png",
            name: "Nestea",
            price: 1,
            categorie:"Boissons"
        }
    ];
    _.each(BoissonsList, function (doc) {
        Boissons.insert(doc);
    });
    /////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Desserts ///////////////////////
///////////////////////////////////////////////////////////////////

    let DessertsList = [{
        image: "d1.png",
        name: "Fondant chocolat",
        price: 3,
        categorie:"Desserts"
    },
        {
            image: "d2.png",
            name: "Muffins",
            price: 2,
            categorie:"Desserts"
        },
        {
            image: "d3.png",
            name: "Donuts",
            price: 2,
            categorie:"Desserts"
        },
        {
            image: "d4.png",
            name: "Milkshake",
            price: 2,
            categorie:"Desserts"
        },
        {
            image: "d5.png",
            name: "Sundae",
            price: 3,
            categorie:"Desserts"
        },
        {
            image: "d6.png",
            name: "Cornet",
            price: 2,
            categorie:"Desserts"
        }
    ];
    _.each(DessertsList, function (doc) {
        Desserts.insert(doc);
    });

}