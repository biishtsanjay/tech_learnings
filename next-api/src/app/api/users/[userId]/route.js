import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const userData = user.filter(
    (item) => item.id.toString() === content.params.userId
  );
  return NextResponse.json(
    userData.length
      ? { result: userData[0], success: true }
      : { result: "No Results Found", success: false },
    { status: 200 }
  );
}
