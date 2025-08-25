import { NextRequest, NextResponse } from 'next/server';
import { getProductsByCategory } from '../../../../data/products';

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string } }
) {
  try {
    const products = await getProductsByCategory(params.category);
    
    if (!products || products.length === 0) {
      return NextResponse.json(
        { error: 'No products found in this category' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(products, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}