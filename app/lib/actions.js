import prisma from "@/app/lib/db";

export async function createBookmark(formData) {
  return await prisma.bookmark.create({
    data: formData,
  });
}

export async function findBookmark(bookmarkId) {
  return await prisma.bookmark.findUnique({
    where: {
      id: bookmarkId,
    },
  });
}

export async function findUserBookmarks(userId) {
  return await prisma.bookmark.findMany({
    where: { clerkId: userId },
    orderBy: { updatedAt: "desc" },
  });
}

export async function updateBookmark(bookmarkId, updatedData) {
  return await prisma.bookmark.update({
    where: {
      id: bookmarkId,
    },
    data: { ...updatedData },
  });
}

export async function deleteBookmark(bookmarkId) {
  return await prisma.bookmark.delete({
    where: { id: bookmarkId },
  });
}
