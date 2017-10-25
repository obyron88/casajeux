import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("Cbw4itmF2CA8s8R4d"))
            Roles.addUsersToRoles("Cbw4itmF2CA8s8R4d", ['admin']);
        // code to run on server at startup
});
