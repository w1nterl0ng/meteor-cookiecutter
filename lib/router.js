Router.configure({
    //standard layout all views use
    layoutTemplate: 'layout',
    //the page shown when some goes to a route we haven't defined
    notFoundTemplate: '404',
    //You can also set your iron-router-progress bar settings here
    progressSpinner: false
});

Router.route('/', {
    //name for a route which we can use in templates
    name: 'home',
    //which template we want to use for this route
    template: 'home',
    //meteorhacks:fast-render setting to let a user render the html for a page without there already being a ddp connection
    fastRender: true
});