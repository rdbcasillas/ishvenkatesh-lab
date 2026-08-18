(function(){
  var root = document.querySelector('.ivl-training');
  if (!root) return;
  var ro = root.querySelector('#readout');
  var base = ro.innerHTML;

  function clear(){ root.querySelectorAll('.hl').forEach(function(e){ e.classList.remove('hl'); }); }
  function reset(){ clear(); ro.innerHTML = base; }

  function showTrainee(i){
    clear();
    root.querySelectorAll('[data-t="'+i+'"]').forEach(function(e){ e.classList.add('hl'); });
    var d = root.querySelector('.sdot[data-t="'+i+'"]');
    ro.innerHTML = 'Trainee <b>'+i+'</b> &middot; '+d.dataset.ten+' in the lab &middot; trained in <b>'+
      d.dataset.c+'</b> techniques across <b>'+d.dataset.dom+'</b> of the nine domains.';
  }
  function showDomain(tr){
    clear(); tr.classList.add('hl');
    ro.innerHTML = '<b>'+tr.dataset.name+'</b> &middot; '+tr.dataset.n+
      ' distinct techniques &middot; <b>'+tr.dataset.cov+'</b> of the twelve trainees were trained in it. Click to open the full list.';
  }

  root.querySelectorAll('.grid td[data-t]').forEach(function(td){
    td.addEventListener('mouseenter', function(){ showTrainee(td.dataset.t); });
    td.addEventListener('click', function(e){ e.stopPropagation(); showTrainee(td.dataset.t); });
  });
  root.querySelectorAll('.sdot').forEach(function(b){
    ['mouseenter','focus','click'].forEach(function(ev){
      b.addEventListener(ev, function(){ showTrainee(b.dataset.t); });
    });
  });
  root.querySelectorAll('.grid tbody tr').forEach(function(tr){
    tr.querySelector('th').addEventListener('mouseenter', function(){ showDomain(tr); });
    tr.addEventListener('focus', function(){ showDomain(tr); });
    function open(){
      var d = root.querySelector('#d-'+tr.dataset.d);
      if(!d) return;
      d.open = true;
      d.scrollIntoView({behavior:'smooth', block:'center'});
    }
    tr.addEventListener('click', open);
    tr.addEventListener('keydown', function(e){
      if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); }
    });
  });
  root.querySelector('.matrix').addEventListener('mouseleave', reset);

  root.querySelectorAll('nav.modules a').forEach(function(a){
    a.addEventListener('click', function(e){
      var t = root.querySelector(a.getAttribute('href'));
      if(!t) return;
      e.preventDefault();
      t.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  var btn = root.querySelector('#expandAll');
  var all = root.querySelectorAll('.group details');
  btn.addEventListener('click', function(){
    var opening = btn.dataset.open !== '1';
    all.forEach(function(d){ d.open = opening; });
    btn.dataset.open = opening ? '1' : '0';
    btn.textContent = opening ? 'Close every technique list' : 'Open every technique list';
  });
})();
