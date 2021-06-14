
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
      introHeadingLines = introHeadingSplit.lines; //an array of all the divs that wrap each character
	
  var introPGSplit = new SplitText(".intro__paragraph", {type:"lines"}), 
      introPGLines = introPGSplit.lines; //an array of all the divs that wrap each character
  
  var introBulletSplit = new SplitText(".intro__bullets", {type:"lines"}), 
      introBulletLines = introBulletSplit.lines; //an array of all the divs that wrap each character



	var meetHeadingSplit = new SplitText(".meet__trendmaster__heading", {type:"lines"}), 
      meetHeadingLines = meetHeadingSplit.lines; //an array of all the divs that wrap each character
	

  var mtmSplit1 = new SplitText(".meet__trendmaster__pg1", {type:"lines"}), 
      mtmSplitLines1 = mtmSplit1.lines; //an array of all the divs that wrap each character

  var mtmSplit2 = new SplitText(".meet__trendmaster__pg2", {type:"lines"}), 
      mtmSplitLines2 = mtmSplit2.lines; //an array of all the divs that wrap each character

  var mtmSplit3 = new SplitText(".meet__trendmaster__pg3", {type:"lines"}), 
      mtmSplitLines3 = mtmSplit3.lines; //an array of all the divs that wrap each character

    

	var time1 = 1.5,
  		eZ = "Sine.easeInOut"

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
        ease: eZ
    });
    
      gsap.from(".intro__small__title", time1, {
        scrollTrigger: {
            scrub: false,
            trigger: ".introduction"
        },
        autoAlpha: 0,
        y: 20,
        ease: eZ
    });
           
    
      gsap.from(".intro__button", time1, {
        scrollTrigger: {
            scrub: false,
            trigger: ".introduction"
        },
        autoAlpha: 0,
        y: 20,
        ease: eZ
    }); 
      
      gsap.from(".intro__phones", time1, {
        scrollTrigger: {
            scrub: false,
            trigger: ".introduction"
        },
        autoAlpha: 0,
        scale: 0.7,
        ease: eZ
    });
    
      gsap.from(introHeadingLines, time1, {
        scrollTrigger: {
            scrub: false,
            trigger: ".introduction"
        },
        autoAlpha: 0,
        y: 20,
        stagger: 0.15,
        ease: eZ
    });
    
      gsap.from([introPGLines, introBulletLines], time1, {
        scrollTrigger: {
            scrub: false,
            trigger: ".introduction"
        },
        autoAlpha: 0,
        y: 20,
        stagger: 0.044,
        delay: 0.15,
        ease: eZ
    });  
         gsap.from(".intro__title", time1, {
        scrollTrigger: {
            scrub: false,
            trigger: ".introduction"
        },
        autoAlpha: 0,
        y: 20,
        ease: eZ
    });  
    
    
    
    
    
    






    gsap.from(meetHeadingLines, time1, {
      scrollTrigger: {
        scrub: false,
        trigger: ".meet__trendmaster__heading",
      },
      autoAlpha: 0,
      y: 20,
      stagger: 0.15,
      delay: 0.4,
      ease: eZ
    });

    gsap.from([mtmSplitLines1, mtmSplitLines2, mtmSplitLines3], time1, {
      scrollTrigger: {
        scrub: false,
        trigger: ".meet__trendmaster__heading",
      },
        autoAlpha: 0,
        y: 20,
        stagger: 0.05,
        delay: 0.3,
        ease: eZ
    });  

    gsap.from(".meet__trendmaster__title .meet__trendmaster__heading", time1, {
      scrollTrigger: {
        scrub: true,
        trigger: ".meet__trendmaster__heading",
      },
        autoAlpha: 0,
        y: 20,
        delay: 0.4,
        ease: eZ
    });  

    gsap.from(".meet__number", time1, {
      scrollTrigger: {
        scrub: false,
        trigger: ".meet__trendmaster__heading",
      },
      autoAlpha: 0,
      scale: 0,
      stagger: 0.15,
      delay: 0.4,
      ease: eZ
    });

    gsap.from(".meet__sub", time1, {
      scrollTrigger: {
        scrub: false,
        trigger: ".meet__trendmaster__heading",
      },
      autoAlpha: 0,
      y: 20,
      stagger: 0.15,
      delay: 0.6,
      ease: eZ
    });


    gsap.from(".meet__image", time1, {
      scrollTrigger: {
        scrub: false,
        trigger: ".meet__trendmaster__heading",
      },
        autoAlpha: 0,
        scale: 0.7,
        stagger: 0.15,
        delay: 0.8,
        ease: "Power3.easeInOut"
    });
    
    gsap.from(".meet__number", 2.2, {
      scrollTrigger: {
        scrub: false,
        trigger: ".meet__trendmaster__heading",
      },
        autoAlpha: 0,
        stagger: 0.045,
        y: 25,
        delay: 0.3,
        ease: "Sine.easeInOut"
    });

  }); // load func
