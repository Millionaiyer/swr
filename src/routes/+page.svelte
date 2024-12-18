<script lang="ts">
	import { useSWR } from 'sswr';
	// Call the `useSWR` and pass the key you want to use. It will be pased
	// to the fetcher function. The fetcher function can be configured globally
	// or passed as one of the options to this function.
	const endpoint = 'http://localhost:5173/api/';
	const { data: posts , revalidate } = useSWR(endpoint);
    let value:string;

    let handleSubmit = async  (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
        e.preventDefault();
        e.stopPropagation();
        let res =  await fetch(`${endpoint}?add=${value}`)
        let data= await res.json()
        console.log(data,'data');
        revalidate()
        
    }

$:console.log($posts,'posts');

</script>

<form
	on:submit={handleSubmit}
>
	<input placeholder="enter something" bind:value={value} />
</form>
<!-- <button style="background-color: pink;padding:5px" on:click={() => }>revalidate</button> -->

{#if $posts}
	{#each $posts as post}
		<h1>{post}</h1>
	{/each}
{/if}
