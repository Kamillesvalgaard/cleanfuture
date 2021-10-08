gsap.from(".logo", {
  scale: 1.3,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".logo",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
    scrub: true,
  },
});

gsap.from(".nav-link", {
  x: -500,
  duration: 1,
  stagger: -0.3,
});

gsap.from(".section2gsap", {
  x: 500,
  duration: 1,
  scrollTrigger: {
    trigger: ".nedad",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".first", {
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: ".section2gsap",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".second", {
  x: 500,
  duration: 3,
  scrollTrigger: {
    trigger: ".section2gsap",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".section3gsap", {
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: ".first",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".section3label", {
  x: 500,
  duration: 3,
  scrollTrigger: {
    trigger: ".second",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".info1", {
  scale: 0.7,
  duration: 1,
  scrollTrigger: {
    trigger: ".section3label",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "bottom center",
    end: "bottom 25%",
  },
});
