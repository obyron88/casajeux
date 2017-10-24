Router.configure({
//layout devient la page d'accueil
    layoutTemplate: 'layout',
});
// affiche le template accueil au lancement de la page ('/') d'accueil
Router.route('/', {
    name:'couleurs'
});
//ajoute name en parametre
Router.route('/couleurs/:name', function () {
    this.render(this.params.name,{
        data:{
            name:this.params.name
        }});
});
//signifie que quand on est sur la page /panierlist, il affiche le template panierlist
Router.route('/panierlist', {
    name:'panierlist'
});
Router.route('/panierlist/:_id', function () {
    this.render(this.params._id,{
        data:{
            _id:this.params._id
        }});
});
