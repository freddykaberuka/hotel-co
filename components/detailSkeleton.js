const DetailSkeleton = () => {
    return ( 
        <div className="max-w-7xl mx-auto px-8 pt-8 sm:px-16 pb-4 grid overflow-hidden animate-pulse">
        <div className="mb-4 pb-4 w-32">
          <h1 className="bg-gray-400 h-6 w-9/12"></h1>
        </div>
        <div className="flex ">
          <div className="rounded-l-lg bg-gray-400 w-2/4">
            
          </div>
          <div className="grid pl-2 rounded-r-lg">
            <div className="pb-1 bg-gray-400 w-80 h-52">
            </div>
            <div className="pt-1 bg-gray-400 w-80 h-52">
            </div>
          </div>
          <div className="grid pl-2 rounded-r-lg">
            <div className="pb-1 rounded-tr-lg bg-gray-400 w-80 h-52">
              
            </div>
            <div className="pt-1 rounded-br-lg bg-gray-400 w-80 h-52">
              
            </div>
          </div>
        </div>
        </div>
     );
}
 
export default DetailSkeleton;