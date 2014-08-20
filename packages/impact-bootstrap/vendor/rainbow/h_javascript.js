Rainbow.extend('Javascript', [
  {
    matches: {
      1: 'FirstOperand',
      3: 'GeneratedOperand',
      4: 'Operator'
    },
    pattern: /^([a-z0-9\$_]+)\.([a-z0-9\$_]+\.)*([a-z0-9\$_]+)\s*(=)/gim
    // pattern: /\b([a-z0-9\$_]+)\s*(=)\s*(function)\b/gi
  },
  {
    matches: {
      1: 'Keyword',
      2: 'GeneratedOperand',
      3: 'Operator'
    },
    pattern: /^(var\s+)?([a-z0-9\$_]+)\s*(=)/gim
    // pattern: /\b([a-z0-9\$_]+)\s*(=)\s*(function)\b/gi
  },
  {
    matches: {
      1: 'FirstOperand'
    },
    pattern: /([a-z0-9\$_]+)((\.[a-z0-9$_]+)+|\.)/gi
  },
  {
    name: 'Clueword',
    pattern: /\b(delete|function|new)\b/g
  },
  {
    name: 'Clueword',
    pattern: /^\$(extends|functions|statics)\b/gm
  },
  {
    matches: {
      1: 'GeneratedOperand',
      2: 'Clueword'
    },
    pattern: /^\s*([a-z0-9$_]+): (function)/gmi
  },
  {
    name: 'Keyword',
    pattern: /\b(break|case|catch|continue|debugger|default|do|else|finally|for|if|in|instanceof|return|switch|this|throw|try|typeof|var|void|while|with)\b/g
  },
  {
    name: 'Value',
    pattern: /\b(true|false|null)\b/g
  },
  {
    name: 'Value',
    pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
  },
  {
    name: 'Regex',
    matches: {
      // 1: 'string.regexp.open',
      2: {
        name: 'Regex.Escaped',
        pattern: /\\(.){1}/g
      },
      // 3: 'string.regexp.close',
      4: 'Regex.Modifier'
    },
    pattern: /(\/)(?!\*)(.+)(\/)([igm]{0,3})/g
  },


  {
    name: 'Operator',
    pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=|%|\^/g
  },
  {
    matches: {
      1: {
        name: 'Operator',
        pattern: /\=/g
      },
      2: {
        name: 'String',
        matches: {
          name: 'String.Escaped',
          pattern: /\\.{1}/g
        }
      }
    },
    pattern: /(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.|\\\\)*?(\3))/gm
  },
  {
    name: 'Comment',
    pattern: /\/\*[\s\S]*?\*\/|(\/\/)[\s\S]*?$/gm
  },
], true);

 