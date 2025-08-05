import { auth } from "@/app/actions";
import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const subject = await auth();

  if (!subject) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: subject.properties.id,
      },
    });
    return NextResponse.json({ user: user }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: e.response.data.error || "Something went wrong." },
      { status: e.response.status || 401 }
    );
  }
}
