
Rainbow.extend('ObjectiveC', [
  {
    name: 'Comment',
    pattern: /\/\*[\s\S]*?\*\/|\/\/[\s\S]*?$/gm
  },
  {
    name: 'Keyword',
    pattern: /\b(break|case|catch|continue|default|do|else|finally|for|id|if|in|instanceof|return|self|switch|static|throw|try|typeof|var|void|while|with)\b/g
  },
  {
    name: 'Keyword',
    pattern: /\@selector\b/g
  },
  {
    matches: {
      2: 'Type',
      3: 'GeneratedOperand'
    },
    pattern: /(\-|\+)\s*\(([\w\s\*]+)\)\s*(\w+)\s*\{/gm
  },
  {
    matches: {
      2: 'Type',
      3: [
      {
        matches: {
          1: 'GeneratedOperand',
          2: 'Type'
        },
        pattern: /(\w+)\s*\:\s*\(([\w\s\*]+)\)/gm
      }
      ]
    },
    pattern: /(\-|\+)\s*\(([\w\s\*]+)\)([\s\S]*?)\{/gm
  },
  { // First operand in function block
    matches: {1: 'FirstOperand'},
    pattern: /\[([a-z_]\w*)/gi
  },
  { // Lone operand with value initiation
    matches: {2: 'FirstOperand'},
    pattern: /(\b|\*\s*)([a-z_]\w*)(?=\s*\W\=)/gi
  },
  { // First operand in dot chain
    matches: {1: 'FirstOperand'},
    pattern: /([a-z_]\w*)((\.|\-\>)[a-z_]\w*)+/gi
  },
  
  {
    matches: {
      1: 'Property',
      2: 'Type',
      4: 'GeneratedOperand'
    },
    pattern: /^\s*(\@property).*\b([a-z_]\w*)( +\*?) *([a-z_]\w*);/gmi
  },
  {
    matches: {
      1: 'Directive.Keyword',
      2: 'Directive'
    },
    pattern: /^ *(\@\w+) +(\w+).*$/gm
  },
  {
    name: 'Directive.Keyword', 
    pattern: /^ *(\@\w+) *$/gm
  },
  {
    matches: {
      1: 'Directive.Keyword',
      2: 'Directive'
    },
    pattern: /^\s*(\#\w+)\s+(.*)/gm
  },
  {
    name: 'Value',
    pattern: /\b(YES|NO|nil)\b/g
  },
  {
    name: 'Value',
    pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
  },
  {
    name: 'Operator',
    pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=|%|\^/g
  },
  {
    matches: {
      1: 'OCFunction',
    },
    pattern: /\b([a-z_]\w+)\s*\:/gi
  },
  { 
    matches: {1: 'OCFunction'},
    pattern: / ([a-z_]\w+)\]/gi
  },
  {
    matches: {
      1: {
        name: 'Operator',
        pattern: /\=/g
      },
      2: {
        name: 'OCString',
        matches: {
          name: 'OCString.Escaped',
          pattern: /\\.{1}/g
        }
      }
    },
    pattern: /(\(|\s|\[|\=|:)(\@?"([^\\"]|\\.|\\\\)*?")/gm
  },
], true);
