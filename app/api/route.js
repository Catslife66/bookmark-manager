import { NextResponse } from "next/server";
import { auth } from "@/app/actions";
import { createBookmark } from "@/app/lib/actions";
import { bookmarkSchema } from "@/schemas/bookmarkSchema";

export async function POST(request) {
  const requestData = await request.json();
  const subject = await auth();
  const formData = {
    ...requestData,
    userId: subject.properties.id,
  };

  const result = bookmarkSchema.safeParse(formData);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const bookmark = await createBookmark(result.data);
    return NextResponse.json({ bookmark: bookmark }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      {
        error:
          e.response?.data?.detail ||
          e.response?.data?.error ||
          "Something went wrong. Please try again.",
      },
      { status: e.response?.status || 500 }
    );
  }
}
