import { Meteor } from 'meteor/meteor';
// rend le user avec l'id correspondant admin
Meteor.startup(() => {
    if (Meteor.users.findOne("5Aixz4QpHGhfvrv6W"))
        Roles.addUsersToRoles("5Aixz4QpHGhfvrv6W", ['admin']);
    // code to run on server at startup
});
