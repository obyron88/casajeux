Meteor.subscribe("incolore");

Template.incolore.onCreated(function() {
    this.sortIncolore = new ReactiveVar(1);
});

Template.incolore.helpers({
    incoloreTrie: function () {
        var self = Template.instance();
        var sortIncolore = self.sortIncolore.get();
        return Incolore.find({}, { sort: { price: sortIncolore } });
    }
});

Template.incolore.events({
    'click #sorting': function() {
        var self = Template.instance();
        self.sortIncolore.set(self.sortIncolore.get() * -1);
    },
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Incolore.remove({
            _id:this._id
        })
    },
});