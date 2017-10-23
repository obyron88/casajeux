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
        mana: 6
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
            mana: 6
        },
        {
            image: "Faveur_du_gryff.jpg",
            name: "Faveur_du_gryff",
            price: 0.50,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Enchantement",
            mana: 1
        },

    ];

    _.each(BlancList, function (doc) {
        Blanc.insert(doc);
    });


    let BleuList = [
        {
            image: "Faveur_du_gryff.jpg",
            name: "Faveur_du_gryff",
            price: 0.50,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Enchantement",
            mana: 1
        },
    ];
    _.each(BleuList, function (doc) {
        Bleu.insert(doc);
    });


    let NoirList = [
        {
            image: "Faveur_du_gryff.jpg",
            name: "Faveur_du_gryff",
            price: 0.50,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Enchantement",
            mana: 1
        },
    ];
    _.each(NoirList, function (doc) {
        Noir.insert(doc);
    });


    let RougeList = [
        {
            image: "Faveur_du_gryff.jpg",
            name: "Faveur_du_gryff",
            price: 0.50,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Enchantement",
            mana: 1
        },
    ];
    _.each(RougeList, function (doc) {
        Rouge.insert(doc);
    });

    let VertList = [
        {
            image: "Faveur_du_gryff.jpg",
            name: "Faveur_du_gryff",
            price: 0.50,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Enchantement",
            mana: 1
        },
    ];
    _.each(VertList, function (doc) {
        Vert.insert(doc);
    });


    let IncoloreList = [
        {
            image: "Faveur_du_gryff.jpg",
            name: "Faveur_du_gryff",
            price: 0.50,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Enchantement",
            mana: 1
        },
    ];
    _.each(IncoloreList, function (doc) {
        Incolore.insert(doc);
    });

    let MulticoloreList = [
        {
            image: "Faveur_du_gryff.jpg",
            name: "Faveur_du_gryff",
            price: 0.50,
            couleur:"Blanc",
            édition: "Ténèbres sur Inistrad",
            état: "Bon",
            premium: "Non",
            langue: "VF",
            rareté: "Unco",
            type: "Enchantement",
            mana: 1
        },
    ];
    _.each(MulticoloreList, function (doc) {
        Multicolore.insert(doc);
    });


}
