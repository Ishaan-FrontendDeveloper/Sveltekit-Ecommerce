<script lang="ts">
    import type {PageData} from './$types';

  export let cards :PageData;
  </script> 

<div class =" card p-4 m-3 w-2/5 card-hover flex flex-wrap flex-col "  > 
  <header class="card-header card-hover break-words">{cards.pname}</header>
  <section class ="p-4 "><img class="w-5/5" alt={cards.pname} src = {cards.img}/>
    <p > {cards.desc}</p>
  </section>

  <footer class="card-footer card-hover"><ul class="list"><li>Price : $ {cards.price}</li><li><button class="rounded hover"  >Add to Cart</button></li></ul></footer>

  
</div>


