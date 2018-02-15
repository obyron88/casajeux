Meteor.subscribe("blanc");

Template.update.events({

    'submit .updateform'(event){
        event.preventDefault();
// récupère les values des inputs au submit
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

// remplace les ancienne values dans la collection blanc par les nouvelles écritent dans la inputs
        Blanc.update(this._id, {
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