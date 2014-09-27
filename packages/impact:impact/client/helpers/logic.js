UI.registerHelper('activeIf', function(a, b, active) {
  if(a == b) {
    if(typeof active === 'string') return active;
    return 'active';
  }
  return '';
});

UI.registerHelper('equals', function(a, b) {
  return a == b;
});



