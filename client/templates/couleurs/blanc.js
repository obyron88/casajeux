Meteor.subscribe("blanc");

Template.blanc.helpers({
    blanc: function(){return Blanc.find()}
});