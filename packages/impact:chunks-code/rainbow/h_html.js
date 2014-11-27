// var RainbowRegexes = {};
// RainbowRegexes.entity = "[a-z0-9\-_:]+";
// RainbowRegexes.string = '"([^\"])*"';
Rainbow.extend("HtmlInsideTag", [
  {
    matches: {1: 'Property'},
    pattern: /([a-z0-9\-_:]+)=/gi
  },
  {
    name: 'String',
    pattern: /("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/g
  },
], true);

Rainbow.extend('Html', [
  {
    matches: {
      1: 'Entity',
      2: {language: 'HtmlInsideTag'},
      3: {language: 'Javascript'},
      4: 'Entity'
    },
    pattern: /&lt;(script)(.*?)&gt;([\s\S]*?)&lt;\/(script)&gt;/gm
  },
  {
    matches: {
      1: 'Entity',
      2: {language: 'HtmlInsideTag'}
    },
    pattern: /&lt;\/?([a-z0-9\-_:]+)(.*?)&gt;/gmi
  }
], true);
