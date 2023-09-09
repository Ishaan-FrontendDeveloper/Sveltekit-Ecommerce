<script lang='ts'>
  import Cards from '$lib/components/forms/card.svelte';
  import type {PageData} from './$types';

  export let data : PageData;
</script>


<div class="flex flex-col p-4 m-4 text-center justify-center">
  <h1 class="h1"> Apparels </h1>
     <div class="flex flex-wrap shrink p-4 justify-center">
      {#each data.apparel as cards}
        <Cards {cards}/>
      {/each}
    </div>
    </div>
