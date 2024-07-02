<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  let timeline;
  import Arrow from "./arrow.svelte";
  import { createTimelineBtnBlue } from "./timeline-btn-blue";

  function playTimeline() {
    timeline.play();
  }

  function reverseTimeline() {
    timeline.reverse();
  }

  onMount(() => {
    timeline = createTimelineBtnBlue();

    return () => {
      timeline.kill();
    };
  });
</script>

<svelte:head>
  <title>Button Transition</title>
</svelte:head>

<button
  id="btn-blue"
  class="btn-blue"
  on:mouseover={playTimeline}
  on:mouseleave={reverseTimeline}
  on:focus={playTimeline}
  on:blur={reverseTimeline}
  aria-hidden="true"
>
  <span id="btn-blue__bullet" class="btn-blue__bullet"></span>
  <span id="btn-blue__text" class="btn-blue__text"> About Us </span>
  <Arrow />
</button>

<style>
  .btn-blue {
    width: 200px;
    cursor: pointer;
    height: 50px;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    justify-content: center;
    gap: 5px;
    padding: 0px 0px;
    display: flex;
    position: relative;
    font-size: 1.8rem;
    border-radius: 30px;
    overflow: hidden;
  }

  .btn-blue__text {
    position: relative;
    /* left: 30%; */
    justify-self: center;
    z-index: 10;
  }

  .btn-blue__bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    z-index: 1;
    background-color: black;
    transform: translateX(-10px);
  }

  :global(svg) {
    width: 35px;
    z-index: 1;
    right: 0;
    transform: translateX(50px);
    position: absolute;
    opacity: 0;
  }
</style>
