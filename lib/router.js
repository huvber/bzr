Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    Meteor.subscribe('styles');
    Meteor.subscribe('bars');
    return;
  }
});

Router.route('/', {name:'home'});
Router.route('/bars/new',{
    name:'newBar',
    template:'barsEdit',
    data: { newbar: true}
});
Router.route('/bars/styles',{
  name : 'listStyles',
  template :'stylesList'
});
Router.route('/bars/styles/new',{
  name:'newStyle',
  template:'stylesEdit',
  data: { newstyle: true}
});
Router.route('/bars/styles/:_id',{
  name: 'editStyles',
  template: 'stylesEdit',
  data: function(){
    var item = Styles.findOne(this.params._id);
    var res = { newstyle: false, style: item};
    return res;
  }
});
