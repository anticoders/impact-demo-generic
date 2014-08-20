App = {};
Modules = {};
Widgets = {};
Media = {};
Panels = {
  Content: {
    moduleBulbs: [],
    widgetBulbs: [],
    mediaBulbs: [],
  },
  Users: {
    theBulbs: [],
  },
  Profile: {
    theBulbs: [],
  },
};


Panels.Content.bulbs = [
  [
    {title: 'Content', name: 'home', url: '/content', icon: 'home'},
  ],
  Panels.Content.moduleBulbs,
  Panels.Content.widgetBulbs,
  Panels.Content.mediaBulbs,
];

Panels.Users.bulbs = [
  [
    {title: 'Users', name: 'home', url: '/users', icon: 'home'},
  ],
  Panels.Users.theBulbs,
];

Panels.Profile.bulbs = [
  [
    {title: 'Profile', name: 'home', url: '/profile', icon: 'home'},
  ],
  Panels.Profile.theBulbs,
];

