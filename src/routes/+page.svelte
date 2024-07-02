<script>
  import "./reset.css";
  import BtnBlue from "./BtnBlue.svelte";
</script>

<svelte:head>
  <title>Button Transition</title>
</svelte:head>

<div class="container">
  <div id="container__container-buttons" class="container__container-buttons">
    <BtnBlue />
  </div>
</div>

<style>
  .container {
    background-color: #b4b4b4;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
  }

  .container__container-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
