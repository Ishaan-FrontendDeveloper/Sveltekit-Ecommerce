<script lang='ts'>
  import Cards from '$lib/components/forms/card.svelte';
  import type {PageData} from './$types';

  export let data : PageData;
</script>


<div class="flex flex-col justify-center p-3 text-center">
  
  <h1 class="h1"> HouseHold products </h1>
     <div class="flex  flex-wrap grow text-center justify-center p-3">
      {#each data.household as cards}
        <Cards {cards}/>
      {/each}
    </div>
    </div>
