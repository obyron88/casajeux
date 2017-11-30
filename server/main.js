import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("rCstM8h6eqraHmfNW"))
            Roles.addUsersToRoles("rCstM8h6eqraHmfNW", ['admin']);
        // code to run on server at startup
});
