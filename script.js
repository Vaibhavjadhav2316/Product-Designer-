const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth:true
})

var timeout;

function CircleChaptakaro() {

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(details) {

        clearTimeout(timeout);

       xscale = gsap.utils.clamp(.8,1.2,details.clientX - xprev);
       yscale = gsap.utils.clamp(.8,1.2,details.clientY - yprev); 

        xprev = details.clientX;
        yprev = details.clientY;

        CircleMouseFollower(xscale,yscale);
        tineout = setTimeout(function(){
                    document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)  scale(1,1)`;

        },100);

    } );
}


function CircleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove",function(details) {
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)  scale(${xscale},${yscale})`;
    })
}


function FirstPageAnimation() {
  const tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut",
  })

   .to(".boundingelem", {
    y: 0,
    ease: "expo.inOut",
    duration: 2,
    delay: -1,
    stagger: .2,

  })

  .from("#herofooter", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  })


}

CircleChaptakaro();
FirstPageAnimation();
