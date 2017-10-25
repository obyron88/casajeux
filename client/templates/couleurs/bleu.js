Meteor.subscribe("bleu");

Template.bleu.helpers({
    bleu: function(){return Bleu.find()}
});
Template.bleu.events({
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Bleu.remove({
            _id:this._id
        })
    },
});