export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-4 border rounded">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}