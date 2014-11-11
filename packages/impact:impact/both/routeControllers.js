Impact.controllers = {
  impact: {},
  view: {},
  content: {},
  site: {},
  user: {},
};

Impact.baseControllers = {
  impactController: RouteController.extend({
    layoutTemplate: 'adminLayout',
  }),

  viewController: RouteController.extend({

  }),

  contentController: RouteController.extend({
    layoutTemplate: 'adminLayout',
  }),

  siteController: RouteController.extend({
    layoutTemplate: 'adminLayout',
  }),

  userController: RouteController.extend({
    layoutTemplate: 'adminLayout',
  }),

};



