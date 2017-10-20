Router.configure({
//layout devient la page d'accueil
    layoutTemplate: 'layout',
});
// affiche le template accueil au lancement de la page ('/') d'accueil
Router.route('/', {
    name:'couleurs'
});