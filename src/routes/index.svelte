


<script>
	let truth = false;
	
	function changes(){
		if (truth == false){
			truth = true;
		}else{
			truth = false;
		}
	}
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 50%;
		max-width: 400px;
		margin: 0 0 1em 0;
		border-radius: 50%;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}


</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='me with coffee' src='me.jpg'>
	<p><strong>Hello!</strong></p>
	
	<br>
<h2>Lei Endrulat</h2>
<figcaption>"Be Happy with what you Have. Be Excited about what you Want." - Allen Cohen</figcaption>
</figure>


<br>
<p>To become part of the company in performing daily activities in order to provide, support and to expand my knowledge and skills in the field of multiple function. To obtain challenging opportunity, mostly for a positive contribution to the organization’s economic growth and productivity.</p>
<br>
<p>Self-motivated and hard working with the seal of progress and career advancement through determination and dedication.</p>
<br>




<button on:click={changes}><h3>Chat</h3></button>

 {#if truth === true}
<h5>Hi please send me an <a href="mailto:leiaarkitectz@gmail.com">email</h5>
  {/if}


