Meteor.subscribe("panierlist");

Template.panierlist.helpers({

    panierlist: function(){return Panierlist.find()},
    // fixe le template prixtotal à 0
    prixtotal: function () {prixtotal = 0;
        //cherche dans la collection les fields avec itemprice et parcourt le document avec map
        Panierlist.find({}, {fields:{itemprice:1}}).map(function(doc) {
            // le prixtotal est egal à tt les itemprice du doc additionné
            prixtotal += doc.itemprice;
        });
        return Math.round(prixtotal*100)/100;
    },
});


//applique un event sur le template blanc
Template.blanc.events({
    // aplique l'event quand on submit à partir du formulaire de classe formu
    'submit .formu'(event) {
        //reste sur la page même après avoir submit à partir du bouton
        event.preventDefault();
// cree une variable qui va appliquer un event sur la value de l'input avec pour name countitem cible par target parseint transforme en int au lieu de string
        var inputcount =  parseInt(event.target.countitem.value);
        // si l'input du nombre de cartes à ajouter au panier est different de 0 ajouter dans le panier
        if(inputcount != 0){
// insère dans la collection Panierlist grace au upsert true qui permet à l'update d'inserer si aucun elements de la collection ne correspondent au même name
            Panierlist.update(this._id, {
                //cree le template countitem qui est egal  à la value de l'input count
                // (affiche la value inputcount dans l'html en marquant {{countitem}}
                countitem:inputcount,
                //cree le template itemprice qui est egal  à la value de l'inputcount* le prix
                itemprice:Math.round((this.price*inputcount)*100)/100,
                //creer un tamplate qui est egal au name de la collection Panierlist
                name:this.name,
                price:this.price,
                image:this.image,
                couleur:this.couleur,
                edition:this.edition,
                etat:this.etat,
                premium:this.premium,
                langue:this.langue,
                rarete:this.rarete,
                type:this.type,
                mana:this.mana,
                stock:this.stock

            }, {upsert:true});
        }
    }
});
Template.bleu.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount =  parseInt(event.target.countitem.value);

        if(inputcount != 0){

            Panierlist.update(this._id, {
                countitem:inputcount,
                itemprice:Math.round((this.price*inputcount)*100)/100,
                name:this.name,
                price:this.price,
                image:this.image,
                couleur:this.couleur,
                edition:this.edition,
                etat:this.etat,
                premium:this.premium,
                langue:this.langue,
                rarete:this.rarete,
                type:this.type,
                mana:this.mana,
                stock:this.stock
            }, {upsert:true});
        }
    }
});
Template.noir.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount =  parseInt(event.target.countitem.value);
        if(inputcount != 0){
            Panierlist.update(this._id, {
                countitem:inputcount,
                itemprice:Math.round((this.price*inputcount)*100)/100,
                name:this.name,
                price:this.price,
                image:this.image,
                couleur:this.couleur,
                edition:this.edition,
                etat:this.etat,
                premium:this.premium,
                langue:this.langue,
                rarete:this.rarete,
                type:this.type,
                mana:this.mana,
                stock:this.stock
            }, {upsert:true});
        }
    }
});

Template.rouge.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount =  parseInt(event.target.countitem.value);
        if(inputcount != 0){
            Panierlist.update(this._id, {
                countitem:inputcount,
                itemprice:Math.round((this.price*inputcount)*100)/100,
                name:this.name,
                price:this.price,
                image:this.image,
                couleur:this.couleur,
                edition:this.edition,
                etat:this.etat,
                premium:this.premium,
                langue:this.langue,
                rarete:this.rarete,
                type:this.type,
                mana:this.mana,
                stock:this.stock
            }, {upsert:true});
        }
    }
});

Template.vert.events({
    'submit .formu'(event) {
        event.preventDefault();

        var inputcount = parseInt(event.target.countitem.value);
        if(inputcount != 0){
            Panierlist.update(this._id, {
                countitem:inputcount,
                itemprice:Math.round((this.price*inputcount)*100)/100,
                name:this.name,
                price:this.price,
                image:this.image,
                couleur:this.couleur,
                edition:this.edition,
                etat:this.etat,
                premium:this.premium,
                langue:this.langue,
                rarete:this.rarete,
                type:this.type,
                mana:this.mana,
                stock:this.stock
            }, {upsert:true});
        }
    }
});

Template.incolore.events({
    'submit .formu'(event) {
        event.preventDefault();
        // parseint transforme en int au lieu de string
        var inputcount = parseInt(event.target.countitem.value);
        if(inputcount != 0){
            Panierlist.update(this._id, {
                countitem:inputcount,
                itemprice:Math.round((this.price*inputcount)*100)/100,
                name:this.name,
                price:this.price,
                image:this.image,
                couleur:this.couleur,
                edition:this.edition,
                etat:this.etat,
                premium:this.premium,
                langue:this.langue,
                rarete:this.rarete,
                type:this.type,
                mana:this.mana,
                stock:this.stock
            }, {upsert:true});
        }
    }
});

Template.multicolore.events({
    'submit .formu'(event) {
        event.preventDefault();
        //parseint transforme en int au lieu de string
        var inputcount = parseInt(event.target.countitem.value);
        if (inputcount != 0) {
            Panierlist.update(this._id, {
                countitem: inputcount,
                itemprice: Math.round((this.price * inputcount) * 100) / 100,
                name: this.name,
                price: this.price,
                image: this.image,
                couleur: this.couleur,
                edition: this.edition,
                etat: this.etat,
                premium: this.premium,
                langue: this.langue,
                rarete: this.rarete,
                type: this.type,
                mana: this.mana,
                stock: this.stock
            }, {upsert:true});
        }
    }
});

Template.panierlist.events({
    // au click sur l'element avec la classe supprimer
    'click .supprimer'(event){
        event.preventDefault();
// remove dans la collection Panierlist
        Panierlist.remove({
            _id:this._id
        })
    },
});

Template.panierlist.events({
    //au click sur la classe inputcompt fait un event
    'click .inputcompt'(){
//cree une variable qui va recuperer la value en jquery de la classe id et donc par l'id parseint transforme en int au lieu de string
        var inputcount = parseInt($("."+this._id+"").val());
// va update dans la collection Panierlist à partir de l'id toute les infos ci dessous au click sur l'input
        Panierlist.update(this._id, {
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            image:this.image,
            price:this.price,
            couleur:this.couleur,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana,
            stock:this.stock,
            _id:this._id
        });
    },
});
// met les stocks à jour en soustrayant le nombre de cartes commandé dans le panier
//au stock de la collection Blanc au click sur l'input "mettre les stocks à jour"
Template.panierlist.events({
    'submit .passercommande'(event){
        event.preventDefault();
        var stockupdate = event.target.countitem.value;

        Blanc.update(this._id, {
            stock:this.stock - stockupdate,
            name:this.name,
            price:this.price,
            image:this.image,
            couleurs:this.couleurs,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana


        })
    }
});
Template.panierlist.events({
    'submit .passercommande'(event){
        event.preventDefault();
        var stockupdate = event.target.countitem.value;

        Bleu.update(this._id, {
            stock:this.stock - stockupdate,
            name:this.name,
            price:this.price,
            image:this.image,
            couleurs:this.couleurs,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana


        })
    }
});
Template.panierlist.events({
    'submit .passercommande'(event){
        event.preventDefault();
        var stockupdate = event.target.countitem.value;

        Incolore.update(this._id, {
            stock:this.stock - stockupdate,
            name:this.name,
            price:this.price,
            image:this.image,
            couleurs:this.couleurs,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana


        })
    }
});
Template.panierlist.events({
    'submit .passercommande'(event){
        event.preventDefault();
        var stockupdate = event.target.countitem.value;

        Multicolore.update(this._id, {
            stock:this.stock - stockupdate,
            name:this.name,
            price:this.price,
            image:this.image,
            couleurs:this.couleurs,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana


        })
    }
});
Template.panierlist.events({
    'submit .passercommande'(event){
        event.preventDefault();
        var stockupdate = event.target.countitem.value;

        Noir.update(this._id, {
            stock:this.stock - stockupdate,
            name:this.name,
            price:this.price,
            image:this.image,
            couleurs:this.couleurs,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana


        })
    }
});
Template.panierlist.events({
    'submit .passercommande'(event){
        event.preventDefault();
        var stockupdate = event.target.countitem.value;

        Rouge.update(this._id, {
            stock:this.stock - stockupdate,
            name:this.name,
            price:this.price,
            image:this.image,
            couleurs:this.couleurs,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana


        })
    }
});
Template.panierlist.events({
    'submit .passercommande'(event){
        event.preventDefault();
        var stockupdate = event.target.countitem.value;

        Vert.update(this._id, {
            stock:this.stock - stockupdate,
            name:this.name,
            price:this.price,
            image:this.image,
            couleurs:this.couleurs,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana


        })
    }
});
// met les stocks à jour en soustrayant le nombre de cartes commandé dans le panier
//au stock de la collection Panierlist au click sur l'input "mettre les stocks à jour"
Template.panierlist.events({
    'submit .passercommande'(event){
        event.preventDefault();
        var stockupdate = event.target.countitem.value;
        var inputcount = parseInt($("."+this._id+"").val());
// va update dans la collection Panierlist à partir de l'id toute les infos ci dessous au click sur l'input
        Panierlist.update(this._id, {
            countitem:inputcount,
            itemprice:Math.round((this.price*inputcount)*100)/100,
            name:this.name,
            image:this.image,
            price:this.price,
            couleur:this.couleur,
            edition:this.edition,
            etat:this.etat,
            premium:this.premium,
            langue:this.langue,
            rarete:this.rarete,
            type:this.type,
            mana:this.mana,
            stock:this.stock - stockupdate,
            _id:this._id
        })
    }
});

