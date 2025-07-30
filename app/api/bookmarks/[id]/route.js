import {
  findBookmark,
  deleteBookmark,
  updateBookmark,
} from "@/app/lib/actions";
import { auth } from "@/auth";
import { bookmarkSchema } from "@/schemas/bookmarkSchema";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  const session = await auth();

  try {
    const bookmark = await findBookmark(id);
    if (!bookmark) {
      return NextResponse.json({ bookmark: "Not found" }, { status: 404 });
    }
    if (bookmark.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    return NextResponse.json({ bookmark: bookmark }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        error:
          e.response?.data?.detail ||
          e.response?.data?.error ||
          "Something went wrong",
      },
      { status: e.response.status || 400 }
    );
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const session = await auth();
  const requestData = await request.json();
  const bookmark = await findBookmark(id);

  if (!bookmark) {
    return NextResponse.json({ error: "Bookmark not found" }, { status: 404 });
  }

  if (bookmark.userId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const formData = {
    ...requestData,
    userId: session.user.id,
  };

  const result = bookmarkSchema.safeParse(formData);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten() },
      { status: 400 }
    );
  }
  try {
    const updated = await updateBookmark(id, result.data);
    return NextResponse.json({ bookmark: updated }, { status: 200 });
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

export async function DELETE(request, { params }) {
  const { id } = await params;
  const session = await auth();

  try {
    const bookmark = await findBookmark(id);
    if (!bookmark) {
      return NextResponse.json(
        { error: "This book doesnot exist." },
        { status: 404 }
      );
    }
    if (bookmark.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    await deleteBookmark(id);
    return NextResponse.json({ message: "Bookmark deleted." }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        error:
          e.response?.data?.detail ||
          e.response?.data?.error ||
          "Something went wrong. Please try again.",
      },
      { status: e.response.status || 500 }
    );
  }
}
