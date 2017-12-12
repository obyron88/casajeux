import { Meteor } from 'meteor/meteor';


    Meteor.startup(() => {
        if (Meteor.users.findOne("8YHDAa3pWKm4aqgTM"))
            Roles.addUsersToRoles("8YHDAa3pWKm4aqgTM", ['admin']);
        // code to run on server at startup
});
