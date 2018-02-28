import { Meteor } from 'meteor/meteor';
// rend le user avec l'id correspondant admin
Meteor.startup(() => {
    if (Meteor.users.findOne("NxSyce8dBCi9iNBsQ"))
        Roles.addUsersToRoles("NxSyce8dBCi9iNBsQ", ['admin']);
    // code to run on server at startup
});
