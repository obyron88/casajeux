Meteor.subscribe("multicolore");

Template.multicolore.helpers({
    multicolore: function(){return Multicolore.find()}
});

Template.update.events({

    'submit .updateform'(event){
        event.preventDefault();

        var newname = event.target.nameup.value;
        var newprice = event.target.priceup.value;
        var newimage = event.target.imageup.value;
        var newcouleurs = event.target.couleursup.value;
        var newédition = event.target.éditionup.value;
        var newétat = event.target.étatup.value;
        var newpremium = event.target.premiumup.value;
        var newlangue = event.target.langueup.value;
        var newrareté = event.target.raretéup.value;
        var newtype = event.target.typeup.value;
        var newmana = event.target.manaup.value;
        var newstock = event.target.stockup.value;


        Multicolore.update(this._id, {
            $set:{name:newname,
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
            }

        });
        //au submit envoie sur la page d'accueil
        Router.go("/");

    },

});