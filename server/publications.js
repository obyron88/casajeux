Meteor.publish("couleurs", function(){
    return Couleurs.find();
});

Meteor.publish(null, function (){
    return Meteor.roles.find({})
});
