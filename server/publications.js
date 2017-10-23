Meteor.publish("couleurs", function(){
    return Couleurs.find();
});
Meteor.publish("blanc", function(){
    return Blanc.find();
});
Meteor.publish("bleu", function(){
    return Bleu.find();
});
Meteor.publish("noir", function(){
    return Noir.find();
});
Meteor.publish("rouge", function(){
    return Rouge.find();
});
Meteor.publish("vert", function(){
    return vert.find();
});
Meteor.publish("incolore", function(){
    return Incolore.find();
});
Meteor.publish("multicolore", function(){
    return Multicolore.find();
});
Meteor.publish(null, function (){
    return Meteor.roles.find({})
});
