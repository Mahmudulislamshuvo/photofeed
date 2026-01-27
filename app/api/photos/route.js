import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(_request) {
  const data = getAllPhotos();

  const simpliefiedData = data.map((photo) => {
    return {
      id: photo.id,
      title: photo.title,
      url: photo.url,
    };
  });

  return NextResponse.json(simpliefiedData);
}
 