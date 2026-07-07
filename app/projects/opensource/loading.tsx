export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto animate-pulse">
      <div className="h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      
      <div className="h-5 w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-6" />

      <div className="grid gap-6 sm:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <div 
            key={index} 
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900/50 h-56 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-5 w-14 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-5 w-10 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
              
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
