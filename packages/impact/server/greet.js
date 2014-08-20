Meteor.startup(function() {
  console.log(
    '\033[3' + Math.floor(2 + Math.random() * 6) + 'm',
    'Impact started:',
    moment().format('YYYY-MM-DD HH:mm :ss.SSS'),
    '\033[0m'
  );
});

