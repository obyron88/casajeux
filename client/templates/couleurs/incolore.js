Meteor.subscribe("incolore");

Template.incolore.helpers({
    incolore: function(){return Incolore.find()}
});