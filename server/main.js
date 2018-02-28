import { Meteor } from 'meteor/meteor';
// rend le user avec l'id correspondant admin
Meteor.startup(() => {
    if (Meteor.users.findOne("y98vF3qgtCfKMCrcN"))
        Roles.addUsersToRoles("y98vF3qgtCfKMCrcN", ['admin']);
    // code to run on server at startup
});
