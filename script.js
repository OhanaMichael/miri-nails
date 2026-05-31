// ===== FAQ accordion =====
function toggleFaq(el){var i=el.parentElement;var o=i.classList.toggle('open');el.setAttribute('aria-expanded',o?'true':'false');}
document.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){toggleFaq(this);});});

// ===== Mobile hamburger =====
function toggleNav(btn){
  var n=document.querySelector('.mainnav');
  var o=n.classList.toggle('open');
  btn.setAttribute('aria-expanded',o?'true':'false');
}

// ===== Services dropdown (injected so it stays consistent on every page) =====
(function(){
  var SERVICES=[
    ["lak-gel.html","לק ג'ל ומבנה אנטומי"],
    ["nail-building.html","בניית ציפורניים"],
    ["fill.html","מילוי ציפורניים"],
    ["manicure.html","מניקור"],
    ["nail-art.html","ניל ארט ועיצובים"],
    ["events.html","ציפורניים לכלות ואירועים"]
  ];
  var link=document.querySelector('.mainnav a[href="services.html"]');
  if(link){
    var li=link.parentElement;
    li.classList.add('has-sub');
    var btn=document.createElement('button');
    btn.className='sub-toggle';
    btn.type='button';
    btn.setAttribute('aria-label','פתחי תת-תפריט שירותים');
    btn.setAttribute('aria-expanded','false');
    btn.innerHTML='▾';
    var ul=document.createElement('ul');
    ul.className='submenu';
    SERVICES.forEach(function(s){
      var item=document.createElement('li');
      var a=document.createElement('a');
      a.href=s[0]; a.textContent=s[1];
      item.appendChild(a); ul.appendChild(item);
    });
    li.appendChild(btn);
    li.appendChild(ul);
    btn.addEventListener('click',function(e){
      e.preventDefault(); e.stopPropagation();
      var o=ul.classList.toggle('open');
      btn.setAttribute('aria-expanded',o?'true':'false');
    });
  }

  // close the mobile menu after choosing a real navigation link
  document.querySelectorAll('.mainnav a').forEach(function(a){
    a.addEventListener('click',function(){
      var n=document.querySelector('.mainnav');
      if(n){ n.classList.remove('open'); }
      var tg=document.querySelector('.navtoggle');
      if(tg){ tg.setAttribute('aria-expanded','false'); }
    });
  });
})();
