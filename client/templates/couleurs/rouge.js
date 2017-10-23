Meteor.subscribe("rouge");

Template.rouge.helpers({
    rouge: function(){return Rouge.find()}
});