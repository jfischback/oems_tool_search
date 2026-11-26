// Phone menu for the white OEMS header.
(function () { var t = document.querySelector('.nav-toggle'), n = document.getElementById('site-nav'); if (!t || !n) return;
  t.addEventListener('click', function () { var o = t.getAttribute('aria-expanded') === 'true'; t.setAttribute('aria-expanded', String(!o)); n.classList.toggle('open', !o); }); })();

// Title Case for headings, card titles and buttons (24 Nov 2026, Jonathan). Same rule as the main site.
(function () {
  var SMALL = { a:1, an:1, and:1, as:1, at:1, but:1, by:1, 'for':1, 'in':1, of:1, on:1, or:1, the:1, to:1, vs:1, via:1, 'with':1, from:1, into:1, per:1, nor:1 };
  // Units and abbreviations stay exactly as written (25 Nov 2026, Jonathan): ppm, mg/m\u00b3, \u00b0F and the like.
  var UNITS = { ppm:1, ppb:1, ppmv:1, mg:1, '\u00b5g':1, ug:1, ng:1, kg:1, m:1, cm:1, mm:1, '\u00b5m':1, um:1, nm:1, km:1, ft:1, mL:1, ml:1, lpm:1, cfm:1, fpm:1, fps:1, dB:1, dBA:1, dBC:1, Hz:1, kHz:1, MHz:1, GHz:1, mW:1, kW:1, mJ:1, ms:1, mrem:1, mSv:1, '\u00b5Sv':1, mGy:1, keV:1, MeV:1, psi:1, lb:1, lbs:1 };
  function isUnit(chunk) {
    if (/[\/\u00b0\u00b2\u00b3\u00b5]/.test(chunk)) return true;
    return !!UNITS[chunk.replace(/^[^A-Za-z\u00b5]+|[^A-Za-z\u00b2\u00b3]+$/g, '')];
  }
  function tc(text) {
    var first = true;
    return text.split(/(\s+)/).map(function (chunk) {
      if (!chunk || /^\s+$/.test(chunk)) return chunk;
      if (isUnit(chunk)) { first = /[.!?:]$/.test(chunk); return chunk; }
      return chunk.replace(/([A-Za-z][A-Za-z'\u2019\-]*)|([.!?:])|(\S)/g, function (m, w, stop) {
        if (stop) { first = true; return m; }
        if (!w) return m;
        var out = (/[A-Z]/.test(w.slice(1)) || /\d/.test(w)) ? w : w.split('-').map(function (p, i) {
          return (!first && i === 0 && SMALL[p.toLowerCase()]) ? p.toLowerCase() : p.charAt(0).toUpperCase() + p.slice(1); }).join('-');
        first = false; return out;
      });
    }).join('');
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

// App bar: highlight the field you're in (26 Nov 2026). Field comes from ?g= or the page's breadcrumb link to its field.
(function () {
  function mark() {
    var g = new URLSearchParams(location.search).get('g');
    if (!g) { var a = document.querySelector('.crumb a[href*="library.html?g="]'); if (a) g = new URL(a.href, location.href).searchParams.get('g'); }
    if (!g) return;
    document.querySelectorAll('.site-nav a[data-g]').forEach(function (l) { if (l.getAttribute('data-g') === g) l.setAttribute('aria-current', 'page'); else l.removeAttribute('aria-current'); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mark); else mark();
  window.addEventListener('load', mark);
})();
