import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import schema from "../products/schema";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.message, { status: 400 });
  }

  const newProduct = await prisma.product.create({
    data: {
      productName: body.productName,
      productType: body.productType,
      price: body.price,
    },
  });

  return NextResponse.json(newProduct, { status: 200 });
}
