import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("3EivT4KJ2o6HADa2P"))
            Roles.addUsersToRoles("3EivT4KJ2o6HADa2P", ['admin']);
        // code to run on server at startup
});
