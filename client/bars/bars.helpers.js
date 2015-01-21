Template.barsEdit.helpers({
});
Template.stylesList.helpers({
  styles : function(){
    return Styles.find();
  }
});
Template.stylesEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var style = {};
    var style = $(e.target).serializeArray();
    var style = _.object(_.map(style, function(x){return [x.name, x.value] }));
    if($(this).attr('data-new')){
      Meteor.call('styleNew', style, function(error, id) {
        if (error)
          console.log(error.reason);
          Router.go('listStyles', {_id: id});
      });
    } else {
      Meteor.call('stylesEdit', style, function(error, id) {
        if (error)
          console.log(error.reason);
        Router.go('listStyles', {_id: id});
      });
    }
    Router.go('listStyles');
  }
});
