/* Polyfills
/* ======================================================================== */

cssVars({ shadowDOM : true });

/* Reset-Check
/* ======================================================================== */

var log = true;
// var supports = checkRule('@supports', log);
// var selector = checkSelector(':where(*)', log);
// var applied = cssApplied(document.documentElement, log); // OSX Safari 9 Fallback

// if (!applied) document.getElementById("base-css").setAttribute('href', 'css/base.js.css');

// if (!cssApplied(document.documentElement, log)) {

//   document.getElementById("base-css").setAttribute('href', 'css/base.js.css');

// }

window.addEventListener('load', function(event) {

  if (!cssApplied(document.documentElement, log)) {

    document.getElementById("base-css").setAttribute('href', 'css/base.js.css');
  
  }

});

// var log = true;

// function resetApplied(element, log) {
//   var content = window.getComputedStyle(element, '::before').content;
//   if (!content || content === 'none') return false;
//   if (log) console.log(content);
//   return true;
// }

// window.addEventListener('load', function(event) {
//   if (!resetApplied(document.documentElement, log)) document.getElementById("base-css").setAttribute('href', 'css/base.js.css');
//   document.documentElement.style.display = 'block';
// }); 

/* ======================================================================== */

function cssApplied(element, log) {
  var content = window.getComputedStyle(element, '::before').content;
  if (!content || content === 'none') return false;
  if (log) console.log(content);
  return true;
}

// function checkRule(value, log) {
//   var rule = value;
//   var rule_prefixes = ['MOZ_', 'WEBKIT_', 'O_', 'MS_', ''];
//   var support = false;
//   var length = rule_prefixes.length;
//   rule = rule.replace(/^@/, '').toUpperCase().split('-').join('_') + '_RULE';
//   while (!support && length--) support = (rule_prefixes[length] + rule) in CSSRule;
//   if (log) console.log(value, '=',  support);
//   return support;
// }

// function checkSelector(selector, log) {
//   if (window.CSS && CSS.supports) return api(selector);
//   var head = document.head || document.documentElement;
//   var style = document.createElement('style');
//   head.insertBefore(style, head.firstChild);
//   var sheet = style.sheet;
//   var result = append(selector);
//   if (log) console.log(selector, '=', result);

//   return result;

//   function api(selector) {
//     var support = CSS.supports('selector('+ selector +')');
//     if (log) console.log('API', selector, '=', support);
//     return support;
//   }

//   function append(selector) {
//     try {
//       sheet.insertRule(selector + '{}', 0);
//       sheet.deleteRule(0);
//       return true;
//     } catch (e) {
//       return false;
//     }
//   }
// }

/* FOUC FIX */
window.addEventListener('load', function(event) {document.documentElement.style.display = 'block';}); 