import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("NDXKyJtPFDxgDj54v"))
            Roles.addUsersToRoles("NDXKyJtPFDxgDj54v", ['admin']);
        // code to run on server at startup
});
