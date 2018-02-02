import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("JemrDNLMwzMaQRHSP"))
            Roles.addUsersToRoles("JemrDNLMwzMaQRHSP", ['admin']);
        // code to run on server at startup
});
