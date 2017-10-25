Meteor.subscribe("rouge");

Template.rouge.helpers({
    rouge: function(){return Rouge.find()}
});
Template.rouge.events({
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Rouge.remove({
            _id:this._id
        })
    },
});