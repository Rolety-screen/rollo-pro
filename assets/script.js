
document.addEventListener('click', (e)=>{
  const drop = e.target.closest('.dropdown');
  document.querySelectorAll('.dropdown').forEach(d=>{
    if(d !== drop) d.classList.remove('open');
  });
  if(drop && (e.target.closest('.dropdown-toggle'))){
    drop.classList.toggle('open');
  }
});

// Hero slider (cycles through .hero-slide elements)
function startSlider(){
  const slides = document.querySelectorAll('.hero-slide');
  if(!slides.length) return;
  let i = 0;
  setInterval(()=>{
    slides[i].classList.remove('active');
    i = (i+1) % slides.length;
    slides[i].classList.add('active');
  }, 3500);
}
startSlider();

// Tiny toast on add-to-cart click (demo)
function toast(msg){
  const t = document.querySelector('.toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 1800);
}
