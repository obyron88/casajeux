Meteor.subscribe("rouge");

Template.rouge.helpers({
    rouge: function(){return Rouge.find()}
});

Template.addrouge.events({
    'submit .addformrouge'(event) {
        event.preventDefault();

        var newname = event.target.nameadd.value;
        var newprice = parseFloat(event.target.priceadd.value);
        var newimage = event.target.imageadd.value;
        var newcouleurs = event.target.couleursadd.value;
        var newédition = event.target.éditionadd.value;
        var newétat = event.target.étatadd.value;
        var newpremium = event.target.premiumadd.value;
        var newlangue = event.target.langueadd.value;
        var newrareté = event.target.raretéadd.value;
        var newtype = event.target.typeadd.value;
        var newmana = parseInt(event.target.manaadd.value);
        var newstock = parseInt(event.target.stockadd.value);

        Rouge.insert({
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
        //au submit envoie sur la page /couleurs/Rouge
        Router.go("/couleurs/Rouge");

    },
});