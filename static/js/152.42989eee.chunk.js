(this.webpackJsonpcoderunner=this.webpackJsonpcoderunner||[]).push([[152],{322:function(e,n){!function(e){for(var n=/[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source,t=0;t<2;t++)n=n.replace(/<expr>/g,(function(){return n}));n=n.replace(/<expr>/g,/[^\s\S]/.source);var r={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(/<expr>/g,(function(){return n}))),greedy:!0,inside:{interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(/<expr>/g,(function(){return n}))),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:true|false)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\b\w+(?=\s*\()/,number:/\b\d+(?:\.\d+)?\b/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};r.string[1].inside.interpolation.inside.rest=r,e.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:r}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:r}}}},e.hooks.add("before-tokenize",(function(t){var r=RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g,(function(){return n})),"gi");e.languages["markup-templating"].buildPlaceholders(t,"ftl",r)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"ftl")}))}(Prism)}}]);
//# sourceMappingURL=152.42989eee.chunk.js.map