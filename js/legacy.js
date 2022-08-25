/* Polyfills
/* ======================================================================== */

cssVars({ shadowDOM : true });

/* Reset-Check
/* ======================================================================== */

var log = true;
var cssReset = document.getElementById("base-css");

function resetApplied(element, log) {
  var content = window.getComputedStyle(element, '::before').content;
  if (!content || content === 'none') return false;
  if (log) console.log(content);
  return true;
}

if (!resetApplied(document.documentElement, log)) cssReset.setAttribute('href', 'css/base.js.css');

/* ======================================================================== */

/* FOUC FIX */
// window.addEventListener('load', function(event) {document.documentElement.style.display = 'block';}); 

// document.onreadystatechange = function(event) {
//   if (document.readyState === "complete") {
//     document.documentElement.style.display = 'block';
//   }
// }; 