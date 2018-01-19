import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("rPvWxq5Ehg4mjaCN8"))
            Roles.addUsersToRoles("rPvWxq5Ehg4mjaCN8", ['admin']);
        // code to run on server at startup
});
