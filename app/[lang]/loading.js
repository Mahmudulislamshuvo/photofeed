export default function loading() {
  // We create an array of different heights to simulate the "Masonry" look
  // rather than having them all be the same size.
  const skeletonItems = [
    "h-64",
    "h-96",
    "h-48",
    "h-80",
    "h-72",
    "h-64",
    "h-96",
    "h-56",
    "h-72",
  ];

  return (
    <div className="p-4 mx-auto max-w-7xl">
      {/* This parent div mimics the masonry layout.
         Adjust 'columns-1 md:columns-3' to match your actual grid css.
      */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {skeletonItems.map((heightClass, index) => (
          <div key={index} className="break-inside-avoid">
            <div className="relative group">
              {/* Image Skeleton */}
              <div
                className={`w-full ${heightClass} bg-gray-200 rounded-xl animate-pulse`}
              ></div>

              {/* Text/Title Skeleton (optional, matches your UI text below images) */}
              <div className="mt-2 flex flex-col space-y-2">
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
