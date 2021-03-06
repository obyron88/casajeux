Meteor.subscribe("blanc");
// crée une reactive var
Template.blanc.onCreated(function() {
    this.sortBlanc = new ReactiveVar(1);
});
// return la collection blanc tiré par prix croissant décroissant
Template.blanc.helpers({
    blancTrie: function () {
        var self = Template.instance();
        var sortBlanc = self.sortBlanc.get();
        return Blanc.find({}, { sort: { price: sortBlanc } });
    }
});


Template.blanc.events({
    // tri la collection au click
    'click #sorting': function() {
        var self = Template.instance();
        self.sortBlanc.set(self.sortBlanc.get() * -1);
    },
    // surprime au click sur l'élément choisi
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