Meteor.subscribe("multicolore");

Template.addmulticolore.events({
    'submit .addformmulticolore'(event) {
        event.preventDefault();

        var newname = event.target.nameadd.value;
        var newprice = parseFloat(event.target.priceadd.value);
        var newimage = event.target.imageadd.value;
        var newcouleurs = event.target.couleursadd.value;
        var newedition = event.target.editionadd.value;
        var newetat = event.target.etatadd.value;
        var newpremium = event.target.premiumadd.value;
        var newlangue = event.target.langueadd.value;
        var newrarete = event.target.rareteadd.value;
        var newtype = event.target.typeadd.value;
        var newmana = parseInt(event.target.manaadd.value);
        var newstock = parseInt(event.target.stockadd.value);

        Multicolore.insert({
            name:newname,
            price:newprice,
            image:newimage,
            couleurs:newcouleurs,
            edition:newedition,
            etat:newetat,
            premium:newpremium,
            langue:newlangue,
            rarete:newrarete,
            type:newtype,
            mana:newmana,
            stock:newstock

        });
        //au submit envoie sur la page /couleurs/Multicolore
        Router.go("/couleurs/Multicolore");

    },
});