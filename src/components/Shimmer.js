
const Shimmer = () => {
    return (
        <>
        {Array(8).fill("").map((e, index)=>
         <div key={index} className="h-80 w-72 m-3 p-2 bg-white flex flex-col relative">
         <div className="bg-slate-300 w-full h-44"></div>
         <div className="flex justify-between">
             <h1 className="font-bold m-1 text-lg leading-none flex items-center"></h1>
             <h2 className="m-1 px-2 h-10 w-10 rounded-full text-xs font-medium flex items-center bg-slate-300 text-slate-300 ">stars</h2>
         </div>
         <h3 className="m-1 text-sm"></h3>
         
             <h3 className="m-1 w-[266] text-center rounded-2xl text-lg font-bold absolute bottom-1 bg-slate-300 text-slate-300">..</h3>
     </div>
        )}
       
       </>
      )
}

export default Shimmer;