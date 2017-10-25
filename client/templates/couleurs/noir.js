Meteor.subscribe("noir");

Template.noir.helpers({
    noir: function(){return Noir.find()}
});
Template.noir.events({
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Noir.remove({
            _id:this._id
        })
    },
});