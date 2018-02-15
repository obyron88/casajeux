Meteor.publish("couleurs", function(){
    return Couleurs.find();
});
Meteor.publish("panierlist" ,function(){
    return Panierlist.find();
});
Meteor.publish("blanc", function(){
    // tri par ordre alphabétique la collection au publish
    let query      = {},
        tri = { sort: { name: 1 } };
    return Blanc.find(query, tri);
});
Meteor.publish("bleu", function(){
    let query      = {},
        tri = { sort: {  name: 1 } };
    return Bleu.find(query, tri);
});
Meteor.publish("noir", function(){
    let query      = {},
        tri = { sort: {  name: 1 } };
    return Noir.find(query, tri);
});
Meteor.publish("rouge", function(){
    let query      = {},
        tri = { sort: {  name: 1 } };
    return Rouge.find(query, tri);
});
Meteor.publish("vert", function(){
    let query      = {},
        tri = { sort: {  name: 1 } };
    return Vert.find(query, tri);
});
Meteor.publish("incolore", function(){
    let query      = {},
        tri = { sort: {  name: 1 } };
    return Incolore.find(query, tri);
});
Meteor.publish("multicolore", function(){
    let query      = {},
        tri = { sort: {  name: 1 } };
    return Multicolore.find(query, tri);
});
Meteor.publish(null, function (){
    return Meteor.roles.find({})
});
