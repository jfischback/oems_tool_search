// Phone menu for the white OEMS header.
(function () { var t = document.querySelector('.nav-toggle'), n = document.getElementById('site-nav'); if (!t || !n) return;
  t.addEventListener('click', function () { var o = t.getAttribute('aria-expanded') === 'true'; t.setAttribute('aria-expanded', String(!o)); n.classList.toggle('open', !o); }); })();

// Title Case for headings, card titles and buttons (24 Nov 2026, Jonathan). Same rule as the main site.
(function () {
  var SMALL = { a:1, an:1, and:1, as:1, at:1, but:1, by:1, 'for':1, 'in':1, of:1, on:1, or:1, the:1, to:1, vs:1, via:1, 'with':1, from:1, into:1, per:1, nor:1 };
  function tc(text) {
    var first = true;
    return text.replace(/([A-Za-z][A-Za-z'\u2019\-]*)|([.!?:])|(\S)/g, function (m, w, stop) {
      if (stop) { first = true; return m; }
      if (!w) return m;
      var out = (/[A-Z]/.test(w.slice(1)) || /\d/.test(w)) ? w : w.split('-').map(function (p, i) {
        return (!first && i === 0 && SMALL[p.toLowerCase()]) ? p.toLowerCase() : p.charAt(0).toUpperCase() + p.slice(1); }).join('-');
      first = false; return out;
    });
  }
  var SEL = 'h1, h2, h3, h4, .btn, .go, .bbtn, .nstart, .refbar > b, .foot b, .pfoot b, .tile > span:last-child, .flow-link';
  function run() {
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.closest('.site-footer, .site-header')) return;
      var walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n;
      while ((n = walk.nextNode())) { var t = tc(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
    });
    if (typeof fitTitle === 'function') fitTitle();
  }
  window.oemsTitleCase = run;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  window.addEventListener('load', run);
  document.addEventListener('input', function () { setTimeout(run, 0); });
})();
