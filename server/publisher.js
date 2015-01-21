Meteor.publish("userData", function () {
  return Meteor.users.find();
});
Meteor.publish('Styles',function(){
  return Styles.find();
})
