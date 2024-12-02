export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="w-24 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>

      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}