import prisma from '../lib/prisma';

export async function getProductsByCategory( category : string ) {
  try {
    return await prisma.product.findMany({
      where: { 
        category: {
          equals: category,
          mode: 'insensitive'
        }
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    throw new Error(`Failed to fetch products: ${errorMessage}`);
  }
}