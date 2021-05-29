let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .fromTo("#escudo", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to("#info", 10, { top: "0%" }, "-=10")
  .fromTo("#midImagenes", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo("#cabInfo", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo("#texto", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
