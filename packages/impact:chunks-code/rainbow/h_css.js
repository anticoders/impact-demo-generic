
Rainbow.extend('Css', [
  {
    name: 'Comment',
    pattern: /\/\*[\s\S]*?\*\/|(\/\/)[\s\S]*?$/gm
  },
  {
    matches: {
      1: 'Entity'
    },
    pattern: /([^\{\}]*)\{/g
  },
  {
    matches: {
      1: 'Property'
    },
    pattern: /([a-z\-]*)\s*:/gi
  }
], true);
