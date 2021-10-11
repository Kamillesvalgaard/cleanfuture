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
  opacity: 0,
});

gsap.from(".section2gsap", {
  x: 500,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".nedad",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".first", {
  x: -1200,
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
  opacity: 0,
  scrollTrigger: {
    trigger: ".section3label",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "bottom center",
    end: "bottom 25%",
  },
});

gsap.from(".container", {
  x: -500,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".info1",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".container1", {
  x: -500,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".info1",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".row", {
  x: 1000,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".row",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from("#section6", {
  scale: 0.7,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#section6",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "bottom bottom",
    end: "top 25%",
  },
});

gsap.from("#section7", {
  x: 500,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".opdelertrigger2",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

gsap.from(".container2", {
  x: -1000,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".opdelertrigger2",
    // markers: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "center 25%",
  },
});

// ScrollTrigger.matchMedia({
//   "(min-width: 1400px)": function () {
//     gsap.from(".first", {
//             x: -600,
//             duration: 2,
//             scrollTrigger: {
//               trigger: ".section2gsap",
//               // markers: true,
//               toggleActions: "play none none reverse",
//               start: "center center",
//               end: "center 25%",
//             },
//   }
// });
