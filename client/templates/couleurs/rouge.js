Meteor.subscribe("rouge");

Template.rouge.onCreated(function() {
    this.sortRouge = new ReactiveVar(1);
});

Template.rouge.helpers({
    rougeTrie: function () {
        var self = Template.instance();
        var sortRouge = self.sortRouge.get();
        return Rouge.find({}, { sort: { price: sortRouge } });
    }
});

Template.rouge.events({
    'click #sorting': function() {
        var self = Template.instance();
        self.sortRouge.set(self.sortRouge.get() * -1);
    },
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Rouge.remove({
            _id:this._id
        })
    },
});