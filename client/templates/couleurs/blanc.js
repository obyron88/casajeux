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