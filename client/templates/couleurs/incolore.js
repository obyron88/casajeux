Meteor.subscribe("incolore");

Template.incolore.helpers({
    incolore: function(){return Incolore.find()}
});
Template.incolore.events({
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Incolore.remove({
            _id:this._id
        })
    },
});