Meteor.subscribe("bleu");

Template.bleu.helpers({
    bleu: function(){return Bleu.find()}
});