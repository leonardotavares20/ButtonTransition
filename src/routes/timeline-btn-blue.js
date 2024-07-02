import gsap from "gsap";

export function createTimelineBtnBlue() {
  return gsap
    .timeline({ paused: true })
    .to("#btn-blue__bullet", {
      duration: 0.4,
      ease: "sine.out",
      scale: 35,
      background: "#1100BA",
    })
    .to(
      "#btn-blue__text",
      { color: "white", x: 50, duration: 0.4, left: "-35%" },
      0
    )
    .to("#arrow", { opacity: 1, x: -25, duration: 0.4, ease: "sine" }, 0);
}
