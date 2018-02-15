Meteor.subscribe("vert");

Template.vert.onCreated(function() {
    this.sortVert = new ReactiveVar(1);
});

Template.vert.helpers({
    vertTrie: function () {
        var self = Template.instance();
        var sortVert = self.sortVert.get();
        return Vert.find({}, { sort: { price: sortVert } });
    }
});

Template.vert.events({
    'click #sorting': function() {
        var self = Template.instance();
        self.sortVert.set(self.sortVert.get() * -1);
    },
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Vert.remove({
            _id:this._id
        })
    },
});