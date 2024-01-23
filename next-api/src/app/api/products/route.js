import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import React from "react";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (error) {
    data = { result: "Error RR" };
    success = false;
  }
  return NextResponse.json({ result: data, success });
}

export async function POST(request) {
  await mongoose.connect(connectionStr);

  const payload = await request.json();
  let product = new Product(payload);
  const result = await product.save();

  return NextResponse.json({ result, success: true });
}
