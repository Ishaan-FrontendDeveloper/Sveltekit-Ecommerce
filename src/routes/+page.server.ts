import prisma from '$lib/prisma'
import type  {PageServerLoad} from './$types';

export const load = (async() =>{
  const response = await  prisma.products.findMany({
    take:8   
  })
  console.log("work")
  return {feed:response};
}) satisfies PageServerLoad;
