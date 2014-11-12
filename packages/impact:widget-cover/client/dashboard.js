var schema = new SimpleSchema({
  title:  {type: String, optional: true},
  image:  {type: String, optional: true},
  blurb:  {type: String, optional: true},
  menu: {
    type: [new SimpleSchema({
      url:    {type: String, optional: true},
      label:  {type: String, optional: true},
    })],
  },
});

Template.cover_dashboard.helpers({
  schema: function() {
    return schema;
  },

  doc: function() {
    return Widgets.Settings.findOne('cover');
  },

});




// var formFields = [
//   {label: 'Title',        param: 'title',         type: 'text'},
//   {label: 'Image URL',    param: 'image',         type: 'text'},
//   {label: 'Blurb',        param: 'blurb',         type: 'textarea'},
//   {label: 'Menu',         param: 'menu',          type: 'multi',      array: [
//     {label: 'URL',        param: 'url',           type: 'text'},
//     {label: 'Label',      param: 'label',         type: 'text'},
//   ]},
// ];

// var craterFormOptions = {
//   prefix: 'editCoverSettings',
// };



// Template.cover_dashboard.rendered = function() {

//   // Crater.go(this);

//   // Crater.forms.setup(this, {
//   //   loadImage: function(data, callback) {
//   //     // Crater.overlay('mediaModal', null, function(e, r) {
//   //       // callback(e, {image: r});
//   //     // });
//   //     // Crater.drawOverlay('imageChooser', {}, callback);
//   //   },
//   // });

//   // // Crater.forms.setup(this);
//   // // console.log("rendered 500");
//   // Crater.events(this, {

//   //   'addMultiItem .crater-form': function(e, data) {
//   //     var update = {};
//   //     update[data.param] = {};
//   //     Widgets.Settings.update('cover', {$push: update});
//   //     // Shows.update(Session.get('dashboard_event_id'), {$push: update});
//   //   },

//   //   'removeMultiItem .crater-form': function(e, data) {
//   //     var unset = {};
//   //     unset[data.param + '.' + data.idx] = 1;
//   //     var pull = {};
//   //     pull[data.param] = null;
//   //     Widgets.Settings.update('cover', {$unset: unset});
//   //     Widgets.Settings.update('cover', {$pull: pull});
//   //   },

//   //   'changed .crater-form': function(e) {
//   //     //console.log("FORM CHANGED!");
//   //     var value = Crater.forms.fetch(e.target, formFields, craterFormOptions);
//   //     Widgets.Settings.update('cover', {$set: value});
//   //   },

//   // });
// };

// // Template.cover_dashboard.form = function() {
// //   return Crater.forms.inject(formFields, Widgets.Settings.findOne('cover'), craterFormOptions);
// // };


