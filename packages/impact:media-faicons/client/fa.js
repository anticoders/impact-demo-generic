var groups = [{
  name: 'boxes', icons: [
    'archive', 'gift',
  ],
},{
  name: 'history', icons: [
    'shield', 
  ],
},{
  name: 'nature', icons: [
    'leaf', 'fire', 'bolt', 'cloud', 'sun-o', 'star-o', 'star', 'tint'
  ],
},{
  name: 'business', icons: [
    'briefcase', 'suitcase', 'calendar', 'bar-chart-o', 'money', 'credit-card', 'umbrella', 'usd'
  ]
},{
  name: 'proffesional', icons: [
    'gavel', 'ambulance', 'building-o', 'hospital-o', 'medkit', 'stethoscope', 'user-md', 'wheelchair',
    'tasks', 'envelope', 'shopping-cart'
  ]
},{
  name: 'culture', icons: [
    'magic', 'ticket', 'camera', 'camera-retro', 'video-camera', 'film', 'gamepad', 'music', 'puzzle-piece', 
    'picture-o'
  ]
},{
  name: 'mechanic', icons: [
   'gear', 'gears', 'wrench', 'dashboard', 'lightbulb-o', 'fire-extinguisher', 'bell', 'bell-o'
  ]
},{
  name: 'transport', icons: [
    'anchor', 'truck', 'road', 'fighter-jet', 'plane', 'rocket'
  ]
},{
  name: 'technology', icons: [
    'keyboard-o', 'mobile', 'laptop', 'desktop', 'print', 'phone', 'microphone', 'headphones'
  ]
},{
  name: 'science', icons: [
    'flask', 'magnet', 'globe', 'location-arrow', 'map-marker'
  ],
},{
  name: 'food and drinks', icons: [
    'beer', 'coffee', 'cutlery', 'glass', 'lemon-o'
  ]
}, {
  name: 'school', icons: [
    'pencil', 'eraser', 'book', 'scissors', 'bookmark', 'bookmark-o', 'paperclip', 'thumb-tack'
  ]
}, {
  name: 'humanity', icons: [
    'home', 'key', 'lock', 'male', 'female', 'eye', 'user', 'users'
  ]
}];

Template.fa.groups = function() {
  return groups;
};

Template.fa.rendered = function() {
  $('body').get()[0].className = 'faBody';
};

Template.adminLayout.destroyed = function() {
  $('body').get()[0].className = '';
};
