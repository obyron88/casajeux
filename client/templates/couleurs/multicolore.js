Meteor.subscribe("multicolore");

Template.multicolore.helpers({
    multicolore: function(){return Multicolore.find()}
});
Template.multicolore.events({
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

       Multicolore.remove({
            _id:this._id
        })
    },
});