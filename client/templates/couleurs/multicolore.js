Meteor.subscribe("multicolore");

Template.multicolore.helpers({
    multicolore: function(){return Multicolore.find()}
});