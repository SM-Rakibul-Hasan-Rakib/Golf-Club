gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  // delay: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -10%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "body",
    markers: true,
    start: "top -25vh",
    end: "top -70%",
    scrub: 2,
  },
});
