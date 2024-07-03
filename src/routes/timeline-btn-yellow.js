import gsap from "gsap";

export function createTimelineBtnYellow() {
  return gsap
    .timeline({ paused: true })
    .to("#btn-textOne", {
      duration: 0.5,
      bottom: "100%",
      ease: "power3.inOut",
    })
    .to(
      "#btn-textTwo",
      {
        top: 0,
        duration: 0.5,
        height: 50,
        width: 200,
        borderRadius: "30px",
        ease: "power3.inOut",
      },
      0
    );
}
