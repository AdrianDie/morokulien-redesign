(function () {
  var g = document.getElementById('gallery');
  for (var i = 1; i <= 9; i++) {
    var im = document.createElement('img');
    im.src = 'assets/morokulien-camping-' + i + '.jpg';
    im.alt = 'Morokulien Camping, bilde ' + i;
    im.width = 600; im.height = 400;
    g.appendChild(im);
  }
  var nav = document.getElementById('nav'), b = document.getElementById('burger'), s = document.getElementById('scrim');
  function set(o) {
    nav.classList.toggle('open', o); s.classList.toggle('on', o);
    b.setAttribute('aria-expanded', o); document.body.classList.toggle('lock', o);
  }
  b.addEventListener('click', function () { set(true); });
  document.getElementById('navClose').addEventListener('click', function () { set(false); });
  s.addEventListener('click', function () { set(false); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
})();
