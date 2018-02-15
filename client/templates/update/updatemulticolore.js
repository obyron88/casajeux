Meteor.subscribe("multicolore");

Template.update.events({

    'submit .updateform'(event){
        event.preventDefault();

        var newname = event.target.nameup.value;
        var newprice = event.target.priceup.value;
        var newimage = event.target.imageup.value;
        var newcouleurs = event.target.couleursup.value;
        var newedition = event.target.editionup.value;
        var newetat = event.target.etatup.value;
        var newpremium = event.target.premiumup.value;
        var newlangue = event.target.langueup.value;
        var newrarete = event.target.rareteup.value;
        var newtype = event.target.typeup.value;
        var newmana = event.target.manaup.value;
        var newstock = event.target.stockup.value;


        Multicolore.update(this._id, {
            $set:{name:newname,
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
            }

        });
        //au submit envoie sur la page d'accueil
        Router.go("/");

    },

});