import gsap from "gsap";

export const heroAnimation = (setAnimationComplete) => {
  // preanimation
  gsap.to("html, body", 0, {
    css: { height: "100vh", width: "100vw", overflow: "hidden" },
  });

  gsap.to(".hero .hero-content .letter, .hero .hero-content .slogan", 0, {
    css: {
      position: "relative",
      zIndex: 9000,
    },
  });

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: setAnimationComplete,
  });
  tl.from(".hero .hero-content .letter", 1.5, {
    delay: 0.8,
    y: 300,
    ease: "power3.out",
    stagger: {
      amount: 0.5,
    },
  })
    .from(".hero .hero-content .slogan .line-slogan h2 ", 1.6, {
      opacity: 0,
      y: 100,
      ease: "power4.out",
      delay: -0.5,
      skewY: 8,
      stagger: {
        amount: 0.5,
      },
    })
    .to(".overlays .overlay", 1.6, {
      width: 0,
      stagger: {
        amount: 0.6,
      },
    })
    .to("html, body", 0, {
      css: {
        height: "100vh",
        width: "100vw",
        overflowY: "initial",
      },
    })
    .to(".hero .hero-content .letter, .hero .hero-content .slogan", 0, {
      css: {
        position: "relative",
        zIndex: 1,
      },
    });
};
