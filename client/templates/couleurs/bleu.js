Meteor.subscribe("bleu");

Template.bleu.onCreated(function() {
    this.sortBleu = new ReactiveVar(1);
});

Template.bleu.helpers({
    bleuTrie: function () {
        var self = Template.instance();
        var sortBleu = self.sortBleu.get();
        return Bleu.find({}, { sort: { price: sortBleu } });
    }
});

Template.bleu.events({
    'click #sorting': function() {
        var self = Template.instance();
        self.sortBleu.set(self.sortBleu.get() * -1);
    },
    // au click sur l'élément avec la classe supprimer
    'click .suppradmin'(event){
        event.preventDefault();

        Bleu.remove({
            _id:this._id
        })
    },
});