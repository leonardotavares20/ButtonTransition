<script>
  import { onMount } from "svelte";
  let timeline;
  import { createTimelineBtnYellow } from "./timeline-btn-yellow";

  function playTimeline() {
    timeline.play();
  }

  function reverseTimeline() {
    timeline.reverse();
  }

  onMount(() => {
    timeline = createTimelineBtnYellow();

    return () => {
      timeline.kill();
    };
  });
</script>

<button
  id="btn-blue"
  class="btn-yellow"
  on:mouseover={playTimeline}
  on:mouseleave={reverseTimeline}
  on:focus={playTimeline}
  on:blur={reverseTimeline}
  aria-hidden="true"
>
  <span id="btn-textOne" class="btn-textOne">Our Work</span>
  <span id="btn-textTwo" class="btn-textTwo">Our Work</span>
</button>

<style>
  .btn-yellow {
    width: 200px;
    cursor: pointer;
    height: 50px;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    justify-content: center;
    gap: 5px;
    padding: 0px 0px;
    display: grid;
    position: relative;
    font-size: 1.8rem;
    border-radius: 30px;
    overflow: hidden;
    color: black;
  }

  .btn-textOne {
    position: relative;
  }

  .btn-textTwo {
    position: absolute;
    left: 50%;
    background-color: #c9ff18;
    width: 60%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 500px;
    transform: translateX(-50%);
    top: 100%;
  }
</style>
