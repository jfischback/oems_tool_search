// Phone menu for the white OEMS header.
(function () { var t = document.querySelector('.nav-toggle'), n = document.getElementById('site-nav'); if (!t || !n) return;
  t.addEventListener('click', function () { var o = t.getAttribute('aria-expanded') === 'true'; t.setAttribute('aria-expanded', String(!o)); n.classList.toggle('open', !o); }); })();
