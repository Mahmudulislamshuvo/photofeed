import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(_request, { params: { id } }) {
  const singlePhoto = getPhotoById(id);

  if (!singlePhoto) {
    return NextResponse.json({ error: "Photo not found" }, { status: 404 });
  }

  return NextResponse.json(singlePhoto);
}
