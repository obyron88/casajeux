import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("AYB8kTDNoAeTxxuQa"))
            Roles.addUsersToRoles("AYB8kTDNoAeTxxuQa", ['admin']);
        // code to run on server at startup
});
