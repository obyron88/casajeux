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
            name: "Incolore",
            image: "Colorless-symbol.png"
        },
        {
            name: "Multicolore",
            image: "multi.png"
        }
    ];


    _.each(CouleursList, function (doc) {
        Couleurs.insert(doc);
    });


    let BlancList= [{
        image: "jareth_leonine_titan.jpg",
        name: "Jareth, Titan léonin",
        price: 2,
        couleur:"Blanc",
        édition: "Carnage",
        état: "Neuf",
        premium: "Non",
        langue: "VO",
        rareté: "Rare",
        type: "Créature",
        mana: 6,
        stock: 3,
    },
        {
            image: "Descend_Upon_The_Sinful.jpg",
            name: "Fondre sur les pêcheurs",
            price: 7,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Neuf",
            premium: "Oui",
            langue: "VF",
            rareté: "Rare Mythique",
            type: "Rituel",
            mana: 6,
            stock: 7,
        },
        {
            image: "Faveur_du_gryff.jpg",
            name: "Faveur du gryff",
            price: 0.50,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Enchantement",
            mana: 1,
            stock: 5,
        },

    ];

    _.each(BlancList, function (doc) {
        Blanc.insert(doc);
    });


    let BleuList = [
        {
            image: "time_walk.jpg",
            name: "Time Walk",
            price: 950,
            couleur:"Bleu",
            édition: "Alpha",
            état: "Bon",
            premium: "Non",
            langue: "VO",
            rareté: "Rare",
            type: "Rituel",
            mana: 2,
            stock: 1,
        },
    ];
    _.each(BleuList, function (doc) {
        Bleu.insert(doc);
    });


    let NoirList = [
        {
            image: "appel_a_la_tombe.jpg",
            name: "Appel à la tombe",
            price: 1.50,
            couleur:"Noir",
            édition: "Fléau",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Rare",
            type: "Enchantement",
            mana: 5,
            stock: 4,
        },
    ];
    _.each(NoirList, function (doc) {
        Noir.insert(doc);
    });


    let RougeList = [
        {
            image: "gobelin_des_rues.jpg",
            name: "Gobelin des rues",
            price: 1.50,
            couleur:"Rouge",
            édition: "Retour sur Ravnica",
            état: "Neuf",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Créature",
            mana: 3,
            stock: 8,
        },
    ];
    _.each(RougeList, function (doc) {
        Rouge.insert(doc);
    });

    let VertList = [
        {
            image: "Guivre_epuratrice.jpg",
            name: "Guivre épuratrice",
            price: 0.40,
            couleur:"Vert",
            édition: "L'âge de la destruction",
            état: "Neuf",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Créature",
            mana: 7,
            stock: 8,
        },
    ];
    _.each(VertList, function (doc) {
        Vert.insert(doc);
    });


    let IncoloreList = [
        {
            image: "colosse_de_sombracier.jpg",
            name: "Colosse de sombracier",
            price: 18,
            couleur:"Incolore",
            édition: "Sombracier",
            état: "Neuf",
            premium: "Oui",
            langue: "VF",
            rareté: "Rare",
            type: "Créature-artefact",
            mana: 11,
            stock: 1,
        },
    ];
    _.each(IncoloreList, function (doc) {
        Incolore.insert(doc);
    });

    let MulticoloreList = [
        {
            image: "acide_sliver.jpg",
            name: "SlivoÏde acide",
            price: 4,
            couleur:"Multicolore",
            édition: "Stronghold",
            état: "Neuf",
            premium: "Non",
            langue: "VO",
            rareté: "Unco",
            type: "Créature",
            mana: 2,
            stock: 4,
        },
    ];
    _.each(MulticoloreList, function (doc) {
        Multicolore.insert(doc);
    });


}