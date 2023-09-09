<script lang ="ts">
  import Cards from '$lib/components/forms/card.svelte';
  import {Button,Dropdown,DropdownItem} from 'flowbite-svelte';
  import {ChevronDownSolid} from 'flowbite-svelte-icons'
  export let data 
  let types='apparel'
  import {cart} from '$lib/stores/cartStore.js'
  import Cart from './cart/+page.svelte'
</script>
<div class="flex font-oswald flex-col p-5">
<h1 class="h1 p-4 text-center">Trending Products:</h1>
<h4 class="h4 p-3 text-center">For <a href='/household'> household products </a> and  <a href="/apparel">apparels</a></h4>

<div class="flex pt-3 flex-wrap  justify-center">
{#each data.feed as cards}
 
<Cards {cards}/>
<button class="button p-3" on:click={()=>{
  cart.addItem(cards)
}}>Add to Cart </button>
        
      
{/each}
</div>
</div>
<style>
   a:hover{
color:#fa2;

}
</style>
