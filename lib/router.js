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
    // récupère la categorie(qui correspond à la ligne categorie de la fixture) qui est écrit après le slash quand on arrive sur la page update
    let couleursName = this.params.couleurs;
    this.render('/update',{
        data: function(){
            console.log(couleursName);
            // va chercher les data par ID dans la collection qui correspond a la variable categoriename (window sert à mettre une variable)
            return window[couleursName].findOne(productId)

        }
    });
});
