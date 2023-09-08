<script lang='ts'>
  import Cards from '$lib/components/forms/card.svelte';
  import type {PageData} from './$types';

  export let data : PageData;
</script>


<div>
  <h1 class="h1"> Apparels </h1>
  <main>
     <div>
      {#each data.apparel as cards}
        <Cards {cards}/>
      {/each}
    </div>
</main>
    </div>
