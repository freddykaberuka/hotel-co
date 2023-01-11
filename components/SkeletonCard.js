export const SkeletonCard = () => {
  let skeletons =[];
  for(let i=0;i<=10;i++){
    skeletons.push(i);
  }
    return ( 
      <>
        {skeletons.map((item)=>(<div className='grid max-w-sm overflow-hidden animate-pulse' key={item.id}>
            <div className="bg-gray-400 rounded-lg">
              <div className="rounded-lg h-60 w-72"/>
            </div>
            <div className='pt-2'>
              <h2 className='inline-block text-sm font-semibold text-black-700 mr-2 bg-gray-400 h-6 w-9/12'></h2>
              <p className='text-sm text-gray-700 mr-2 bg-gray-400 h-6 w-9/12'></p>
              <span className='text-sm text-gray-700 mr-2 bg-gray-400 h-6 w-9/12'></span>
              <p className='text-sm text-black-700 mr-2 bg-gray-400 h-6 w-9/12'></p>
            </div>
          </div>))}
        </>
     );
}
 
export default SkeletonCard;