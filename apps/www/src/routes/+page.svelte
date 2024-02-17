<script>
  import { createTimer } from "../store/createTimer.svelte";
  let count = $state(0);
  let timer = new createTimer();
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    {timer.secondsPassed} to your new<br />SvelteKit app
    {timer.double}
  </h1>

  <button on:click={() => timer.increase()}>
    Click
  </button>
</section>
