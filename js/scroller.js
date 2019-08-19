let active = false;
let scroller = document.querySelector('.scroller');


scroller.addEventListener('mousedown',function(){
  active = "img-before";
  scroller.classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
  active = false;
  scroller.classList.remove('scrolling');
});

document.body.addEventListener('mouseleave',function(){
  active = false;
  scroller.classList.remove('scrolling');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= document.querySelector('.wrpr').getBoundingClientRect().left;

  scrollIt(x);
});

function scrollIt(x){
  let transform = Math.max(0,(Math.min(x,document.querySelector('.wrpr').offsetWidth)));
  if (active==="img-before"){
    document.querySelector('.img-before').style.clipPath = "inset(0 0 0 " + transform + "px)";
    scroller.style.left = transform-25+"px";    
  }
}

active = "img-before";
scrollIt(document.querySelector('.img-before').style.width);
active = false;

scroller.addEventListener('touchstart',function(){
    active = "img-before";
    scroller.classList.add('scrolling');
});

document.body.addEventListener('touchend',function(){
    active = false;
    scroller.classList.remove('scrolling');
});

document.body.addEventListener('touchcancel',function(){
    active = false;
    scroller.classList.remove('scrolling');
});

document.querySelector('.wrpr').addEventListener('touchmove',function(e){
    if (!active) return;
    e.preventDefault();
    let x = e.touches[0].pageX;
    x -= document.querySelector('.wrpr').getBoundingClientRect().left;
    scrollIt(x);
});
