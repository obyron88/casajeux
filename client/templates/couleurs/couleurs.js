Meteor.subscribe("couleurs");

Template.couleurs.helpers({
    couleurs: function(){return Couleurs.find()}
});