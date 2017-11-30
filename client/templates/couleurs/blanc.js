Meteor.subscribe("blanc");

Template.blanc.helpers({
    blanc: function(){return Blanc.find()}
});
Template.blanc.events({
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Blanc.remove({
            _id:this._id
        })
    },
});
// déduit le nombre de cartes ajouté au panier du stock de la carte
// Template.blanc.events({
//     'submit .formu'(event){
//         event.preventDefault();
//         var stockupdate = event.target.countitem.value;
//
//         Blanc.update(this._id, {
//             stock:this.stock - stockupdate,
//             name:this.name,
//             price:this.price,
//             image:this.image,
//             couleurs:this.couleurs,
//             édition:this.édition,
//             état:this.état,
//             premium:this.premium,
//             langue:this.langue,
//             rareté:this.rareté,
//             type:this.type,
//             mana:this.mana
//
//
//         })
//     }
// })