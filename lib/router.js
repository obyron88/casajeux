Router.configure({
//layout devient la page d'accueil
    layoutTemplate: 'layout',
});
// affiche le template accueil au lancement de la page ('/') d'accueil
Router.route('/', {
    name:'couleurs'
});
Router.route('update', {
    name:'update'
});

Router.route('/addblanc', {
    name:'addblanc'
});

Router.route('/addbleu', {
    name:'addbleu'
});

Router.route('/addrouge', {
    name:'addrouge'
});

Router.route('/addnoir', {
    name:'addnoir'
});

Router.route('/addvert', {
    name:'addvert'
});

Router.route('/addincolore', {
    name:'addincolore'
});

Router.route('/addmulticolore', {
    name:'addmulticolore'
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
Router.route('/update/:_id/:couleurs', function () {
    // récupère l'id (qui correspond à la ligne id de la fixture) qui est écrit après le slash quand on arrive sur la page update
    let productId = this.params._id;
    // récupère la couleur(qui correspond à la ligne couleur de la fixture) qui est écrit après le slash quand on arrive sur la page update
    let couleursName = this.params.couleurs;
    this.render('/update',{
        data: function(){
            console.log(couleursName);
            // va chercher les data par ID dans la collection qui correspond a la variable couleursName (window sert à mettre une variable)
            return window[couleursName].findOne(productId)

        }
    });
});
