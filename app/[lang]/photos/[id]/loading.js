export default function loading() {
  return (
    <div className="container my-4 lg:my-8">
      <div className="grid grid-cols-12 gap-4 2xl:gap-10 animate-pulse">
        {/* Image Skeleton */}
        <div className="col-span-12 lg:col-span-8 border rounded-xl flex items-center justify-center">
          <div className="w-full h-[70vh] bg-gray-300 rounded-xl"></div>
        </div>

        {/* DetailsCard Skeleton */}
        <div className="p-6 border rounded-xl col-span-12 lg:col-span-4">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-4"></div>
          {/* Tags Skeleton */}
          <div className="h-4 bg-gray-300 rounded-md w-1/2 mb-6"></div>

          {/* Info Rows Skeleton */}
          <div className="space-y-2.5">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
            </div>
          </div>

          {/* Author Info Skeleton */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div className="size-12 lg:size-14 rounded-full bg-gray-300"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded-md w-24"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-16"></div>
                </div>
              </div>
              <div className="h-8 bg-gray-300 rounded-md w-20"></div>
            </div>
            {/* Bio Skeleton */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 rounded-md w-full"></div>
              <div className="h-3 bg-gray-300 rounded-md w-5/6"></div>
            </div>
          </div>

          {/* Actions Skeleton */}
          <div className="mt-6">
            <div className="flex items-stretch gap-3">
              <div className="flex-1 border py-1.5 rounded h-10 bg-gray-300"></div>
              <div className="flex-1 border py-1.5 rounded h-10 bg-gray-300"></div>
              <div className="flex-1 border py-1.5 rounded h-10 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
