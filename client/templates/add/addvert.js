Meteor.subscribe("vert");

Template.vert.helpers({
    vert: function(){return Vert.find()}
});

Template.addvert.events({
    'submit .addformvert'(event) {
        event.preventDefault();

        var newname = event.target.nameadd.value;
        var newprice = event.target.priceadd.value;
        var newimage = event.target.imageadd.value;
        var newcouleurs = event.target.couleursadd.value;
        var newédition = event.target.éditionadd.value;
        var newétat = event.target.étatadd.value;
        var newpremium = event.target.premiumadd.value;
        var newlangue = event.target.langueadd.value;
        var newrareté = event.target.raretéadd.value;
        var newtype = event.target.typeadd.value;
        var newmana = event.target.manaadd.value;
        var newstock = event.target.stockadd.value;

        Vert.insert({
            name:newname,
            price:newprice,
            image:newimage,
            couleurs:newcouleurs,
            édition:newédition,
            état:newétat,
            premium:newpremium,
            langue:newlangue,
            rareté:newrareté,
            type:newtype,
            mana:newmana,
            stock:newstock

        });
        //au submit envoie sur la page /couleurs/Vert
        Router.go("/couleurs/Vert");

    },
});