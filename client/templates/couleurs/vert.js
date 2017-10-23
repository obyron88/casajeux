Meteor.subscribe("vert");

Template.vert.helpers({
    vert: function(){return Vert.find()}
});