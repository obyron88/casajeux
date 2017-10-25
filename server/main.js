import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("FAYt8TrDKCyjBAsmQ"))
            Roles.addUsersToRoles("FAYt8TrDKCyjBAsmQ", ['admin']);
        // code to run on server at startup
});
