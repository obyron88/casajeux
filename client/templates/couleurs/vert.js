Meteor.subscribe("vert");

Template.vert.helpers({
    vert: function(){return Vert.find()}
});
Template.vert.events({
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Vert.remove({
            _id:this._id
        })
    },
});