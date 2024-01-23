import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  //   return NextResponse.json({ name: "Baba" }, { status: 201 });
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
export async function POST(request) {
  let payload = await request.json();
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Required field not present!!!", success: false },
      { status: 400 }
    );
  } else {
    return NextResponse.json(
      { result: "New User created", success: true },
      { status: 201 }
    );
  }
}
