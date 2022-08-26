/* css-vars-ponyfill (https://jhildenbiddle.github.io/css-vars-ponyfill/)
/* ======================================================================== */

cssVars({ shadowDOM : true });

/* Reset-Check
/* ======================================================================== */

var log = true;
var cssReset = document.getElementById("reset-css");

function resetApplied(element, log) {
  var content = window.getComputedStyle(element, '::before').content;
  if (!content || content === 'none') return false;
  if (log) console.log(content);
  return true;
}

if (!resetApplied(document.documentElement, log)) cssReset.setAttribute('href', 'css/reset.js.css');

/* ======================================================================== */