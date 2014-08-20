//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////


if(!Widgets.Settings.findOne('cover')) {
  
  console.log("INITIALIZING COVER WIDGET SETTINGS");

  Widgets.Settings.insert({
    _id: 'cover',
    pageTitle: 'Impact Light',
    title: 'Impact Light',
    image: 'https://lorempixel.com/210/210/nature/2',
    blurb: 'This page is made with Impact, the awesome modular engine based on Meteor.js framework.',
    menu: [{
      label: 'Home',
      url: '/',
    }],
  });
}


//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

