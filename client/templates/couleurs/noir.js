Meteor.subscribe("noir");

Template.noir.helpers({
    noir: function(){return Noir.find()}
});