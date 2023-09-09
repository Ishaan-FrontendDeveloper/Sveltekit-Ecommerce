<script lang="ts">
  import {cart} from  '$lib/stores/cartStore.js';
</script>

<div  class="flex flex-col text-center justify-center m-3 p-3">
  <h2 class="h2"> Shopping Cart </h2>

    <ul class="list flex flex-col  justify-center">
     {#each $cart.items as item}
       <li class="flex flex-col p-4">
         <img class="w-1/3" src={item.img} alt={item.pname}/>
         <span>{item.pname} -  ${item.price}</span>
         <button on:click={()=> cart.removeItem(item.id)}>Remove</button>
   </li> 
    {/each}
   </ul>
    <p> Total : ${$cart.total}</p>
</div>
