import prisma from '$lib/prisma'
import type  {PageServerLoad} from './$types';

export const load = (async() =>{
  const response = await  prisma.products.findMany({
    where:{
      type:'household'
    } 
  })
  console.log("work")
  return {household:response};
}) satisfies PageServerLoad;
