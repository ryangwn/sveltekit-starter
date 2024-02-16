<script>
	let count = $state(0);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		to your new<br />SvelteKit app
	</h1>
	
	<button on:click={() => count++}>
		Click
		{count}
	</button>
</section>
