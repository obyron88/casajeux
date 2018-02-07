Meteor.subscribe("multicolore");

Template.multicolore.onCreated(function() {
    this.sortMulticolore = new ReactiveVar(1);
});

Template.multicolore.helpers({
    multicoloreTrié: function () {
        var self = Template.instance();
        var sortMulticolore = self.sortMulticolore.get();
        return Multicolore.find({}, { sort: { price: sortMulticolore } });
    }
});
Template.multicolore.events({
    'click #sorting': function() {
        var self = Template.instance();
        self.sortMulticolore.set(self.sortMulticolore.get() * -1);
    },
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

       Multicolore.remove({
            _id:this._id
        })
    },
});