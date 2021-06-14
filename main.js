// Animations 

<script>

var duration = 0.7;
const start = 'top+=10% 100%';

gsap.set(".nav__menu", {autoAlpha:0});
gsap.set(".button__wrap__home", {autoAlpha:0});
gsap.set(".home__button", {autoAlpha:0});
gsap.set(".social__icon", {autoAlpha:0});
gsap.set(".hero__link", {autoAlpha:0});
gsap.set(".hero__bg", {autoAlpha:0});
gsap.set(".hero__mask", {autoAlpha:0});
gsap.set(".hero__title", {autoAlpha:0});
gsap.set(".hero__subheading", {autoAlpha:1});
gsap.set(".cookies__pop", {autoAlpha:0, y:"6vh"});

var tl = gsap.timeline({paused:true});
var tl2 = gsap.timeline({paused:true});

var mySplitText = new SplitText(".hero__title", {type:"chars"}), 
chars = mySplitText.chars; 

TweenMax.set(".nav__menu", {autoAlpha:1});
TweenMax.set(".button__wrap__home", {autoAlpha:1});
TweenMax.set(".home__button", {autoAlpha:1});
TweenMax.set(".social__icon", {autoAlpha:1});
TweenMax.set(".hero__bg", {autoAlpha:1});
TweenMax.set(".hero__mask", {autoAlpha:1});
TweenMax.set(".hero__title", {autoAlpha:1});
TweenMax.set(".hero__subheading", {autoAlpha:1});
TweenMax.set(".cookies__pop", {autoAlpha:1});



tl2.fromTo(".button__wrap__home", 1.6, {autoAlpha: 0, opacity:0, y: -20}, {opacity:1, autoAlpha: 1, y:0, ease:"Quart.easeInOut"}, 0)
tl2.fromTo(".home__button", 1.6, {autoAlpha: 0, opacity:0, y: -20}, {opacity:1, autoAlpha: 1, y:0, ease:"Quart.easeInOut"}, 0)
tl2.fromTo(".nav__menu", 1.6, {autoAlpha: 0, opacity:0, y: -20}, {opacity:1, autoAlpha: 1, y:0, ease:"Quart.easeInOut"}, 0)
tl2.fromTo(".social__icon", 1.6, {autoAlpha: 0, opacity:0, y: 20}, {opacity:1, autoAlpha: 1, y:0, ease:"Quart.easeInOut"}, 0)

tl.fromTo(".hero__mask",  2.4, {yPercent:0}, {yPercent:100, stagger: {each: 0.1, from: "center"}, ease:"Quart.easeIn"}, 0)
tl.fromTo(".hero__bg", 2.2, {scale: 1.3, autoAlpha: 0, opacity:0}, {scale: 1, opacity:1, autoAlpha: 1, ease:"Quart.easeInOut"}, "-=1.4")
tl.fromTo(".open__video", 1.6, {autoAlpha: 0, opacity:0, y: -20}, {opacity:1, autoAlpha: 1, y:0, ease:"Quart.easeInOut"}, 0.9)
tl.from(chars, {duration: 2.2, autoAlpha: 0, y:-10, opacity:0, stagger: {from: "center", amount: 0.35}, ease:"Quart.easeInOut"}, "-=2.2")
tl.from(".hero__subheading", {duration: 2.2, autoAlpha: 0, y:-10, opacity:0, stagger: {from: "center", amount: 0.35}, ease:"Quart.easeInOut"}, "-=2.4")
tl.fromTo(".cookies__pop", 2, {autoAlpha: 0, opacity:0, y:"6vh"}, {opacity:1, autoAlpha: 1, y:"0vh", ease:"Quart.easeInOut"}, 1)

tl2.play();
tl.play();


// mobile menu
var menuToggle = $('.mobile__menu__toggle'),
    mobileMenu = $('.mobile__menu'),
    menuLinks = $('.mobile__menu__link'),
    menuLinksWrap = $('.menu__link__wrap'),
    menuLinksHeight = menuLinks.outerHeight(),
    duration = 1;

const MTL = gsap.timeline({ paused: true, reversed: true });

    MTL.fromTo(mobileMenu, 0.5, {width:"0vw"}, {width:"100vw", ease: Power4.easeOut}); 
    MTL.staggerFromTo(menuLinks, 1.2, {y:50, opacity:0}, {y:0, opacity:1, ease: Power4.easeOut}, 0.06, '-=' + 1.1);


    menuToggle.on('click', function() {
    MTL.reversed() ? MTL.play() : MTL.reverse();
    });

    menuLinks.on('click', function() {
    MTL.reverse();
    });


//cookies button
var button = document.getElementById("cookies__pop");
    button.addEventListener("click", function (e) {
    TweenMax.to(button, 1, {autoAlpha: 0, opacity:0, y:"6vh", ease:"Cubic.easeInOut"}, 0)
    },false);


const pageEl = document.querySelector('.page')

const asscroll = new ASScroll({
    ease: 0.08,
    disableRaf: true,
    scrollElements: pageEl,
});

gsap.ticker.add(asscroll.update)

ScrollTrigger.defaults({
scroller: asscroll.containerElement
})

ScrollTrigger.scrollerProxy(asscroll.containerElement, {
scrollTop(value) {
    return arguments.length ? asscroll.currentPos = value : asscroll.currentPos;
},
getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
}
});

asscroll.on("update", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", asscroll.resize);



var tl = gsap.timeline();

var introHeadingSplit = new SplitText(".intro__heading", {type:"lines"}), 
introHeadingLines = introHeadingSplit.lines;

var introPGSplit = new SplitText(".intro__paragraph", {type:"lines"}), 
introPGLines = introPGSplit.lines;

var introBulletSplit = new SplitText(".intro__bullets", {type:"lines"}), 
introBulletLines = introBulletSplit.lines;



var meetHeadingSplit = new SplitText(".meet__trendmaster__heading", {type:"lines"}), 
meetHeadingLines = meetHeadingSplit.lines;


var mtmSplit1 = new SplitText(".meet__trendmaster__pg1", {type:"lines"}), 
mtmSplitLines1 = mtmSplit1.lines; 

var mtmSplit2 = new SplitText(".meet__trendmaster__pg2", {type:"lines"}), 
mtmSplitLines2 = mtmSplit2.lines;

var mtmSplit3 = new SplitText(".meet__trendmaster__pg3", {type:"lines"}), 
mtmSplitLines3 = mtmSplit3.lines;


var time1 = 1.9;

window.addEventListener("load", () => {
const totalScroll = asscroll.containerElement.scrollHeight - innerHeight;
asscroll.enable();
console.log('DOM L+P');


// INTRO

gsap.from(".intro__title", time1, {
  scrollTrigger: {
      scrub: false,
      trigger: ".introduction"
  },
  autoAlpha: 0,
  y: 20,
  ease: "Power3.easeInOut"
});

gsap.from(".intro__small__title", time1, {
  scrollTrigger: {
      scrub: false,
      trigger: ".introduction"
  },
  autoAlpha: 0,
  y: 20,
  ease: "Power3.easeInOut"
});


gsap.from(".intro__button", time1, {
  scrollTrigger: {
      scrub: false,
      trigger: ".introduction"
  },
  autoAlpha: 0,
  y: 20,
  ease: "Power3.easeInOut"
}); 

gsap.from(".intro__phones", time1, {
  scrollTrigger: {
      scrub: false,
      trigger: ".introduction"
  },
  autoAlpha: 0,
  scale: 0.7,
  ease: "Power3.easeInOut"
});

gsap.from(introHeadingLines, time1, {
  scrollTrigger: {
      scrub: false,
      trigger: ".introduction"
  },
  autoAlpha: 0,
  y: 20,
  stagger: 0.10,
  ease: "Power3.easeInOut"
});

gsap.from([introPGLines, introBulletLines], time1, {
  scrollTrigger: {
      scrub: false,
      trigger: ".introduction"
  },
  autoAlpha: 0,
  y: 20,
  stagger: 0.044,
  delay: 0.1,
  ease: "Power3.easeInOut"
});  
   gsap.from(".intro__title", time1, {
  scrollTrigger: {
      scrub: false,
      trigger: ".introduction"
  },
  autoAlpha: 0,
  y: 20,
  ease: "Power3.easeInOut"
});  












gsap.from(meetHeadingLines, time1, {
scrollTrigger: {
  scrub: false,
},
autoAlpha: 0,
y: 20,
stagger: 0.10,
delay: 0.2,
ease: "Power3.easeInOut"
});

gsap.from([mtmSplitLines1, mtmSplitLines2, mtmSplitLines3], time1, {
scrollTrigger: {
  scrub: false,
},
  autoAlpha: 0,
  y: 20,
  stagger: 0.044,
  delay: 0.4,
  ease: "Power3.easeInOut"
});  

gsap.from(".meet__trendmaster__title .meet__trendmaster__heading", time1, {
scrollTrigger: {
  scrub: false,
},
  autoAlpha: 0,
  y: 20,
  delay: 0.2,
  ease: "Power3.easeInOut"
});  

gsap.from(".meet__number", time1, {
scrollTrigger: {
  scrub: false,
},
autoAlpha: 0,
scale: 0,
stagger: 0.10,
ease: "Power3.easeInOut"
});

gsap.from(".meet__sub", time1, {
scrollTrigger: {
  scrub: false,
},
autoAlpha: 0,
y: 20,
stagger: 0.10,
delay: 0.2,
ease: "Power3.easeInOut"
});


gsap.from(".meet__image", time1, {
scrollTrigger: {
  scrub: false,
},
autoAlpha: 0,
scale: 0.7,
stagger: 0.10,
delay: 0.8,
ease: "Power3.easeInOut"
});


}); // load func

</script>
