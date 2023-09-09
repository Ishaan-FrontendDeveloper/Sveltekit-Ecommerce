<script lang="ts">
  import {cart} from  '$lib/stores/cartStore.js';
  console.log(cart.items)
</script>

<div>
  <h2 class="h2"> Shopping Cart </h2>

  
     {#each $cart.items as item}
       <p>
         <img class="w-1/3" src={item.img} alt={item.pname}/>


         <span>{item.pname} - {item.quantity} x ${item.price}</span>
         <button on:click={()=> cart.removeItem(item.id)}>Remove</button>
      <p>
    {/each}
  
    <p> Total : ${$cart.total}</p>
    <button on:click={$cart.clear}>Clear Cart</button>
</div>

