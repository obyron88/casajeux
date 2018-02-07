import { Meteor } from 'meteor/meteor';

    Meteor.startup(() => {
        if (Meteor.users.findOne("qeSHfzEvAwRym4cB7"))
            Roles.addUsersToRoles("qeSHfzEvAwRym4cB7", ['admin']);
        // code to run on server at startup
});
