import prisma from '$lib/prisma'
import type  {PageServerLoad} from './$types';

export const load = (async() =>{
  const response = await  prisma.products.findMany({
    where:{
      type:'apparel'
    } 
  })
  console.log("work")
  return {apparel:response};
}) satisfies PageServerLoad;
