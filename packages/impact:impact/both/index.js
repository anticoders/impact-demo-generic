App = {};

Modules = {};
Widgets = {};
Media = {};


Panels = {
  Content: {
    homeBulbs: [],
    moduleBulbs: [],
    widgetBulbs: [],
    mediaBulbs: [],
  },
  Site: {
    homeBulbs: [],
    theBulbs: [],
  },
  User: {
    homeBulbs: [],
    theBulbs: [],
  },
};


Panels.Content.bulbs = [
  Panels.Content.homeBulbs,
  Panels.Content.moduleBulbs,
  Panels.Content.widgetBulbs,
  Panels.Content.mediaBulbs,
];

Panels.Site.bulbs = [
  Panels.Site.homeBulbs,
  Panels.Site.theBulbs,
];

Panels.User.bulbs = [
  Panels.User.homeBulbs,
  Panels.User.theBulbs,
];


// instances

Impact = {
  utils: {},
};
M = {};


