const Loading = () => {
  return (
    <>{
        (
            Array(5)
              .fill(null)
              .map((_, id) => (
                <div
                  className="h-[350px] 2xl:h-[405px] bg-gray-300 rounded-2xl animate-pulse"
                  key={id}
                >
                  <div className="h-[260px] bg-gray-400 w-full rounded-t-2xl"></div>
                 
                  <div className="h-[20px] bg-gray-400 mt-4 mx-auto w-[70%] rounded"></div>
                  
                  <div className="h-[20px] bg-gray-400 mt-2 mx-auto w-[50%] rounded"></div>
                </div>
              ))
          )
        }</>
  )
}

export default Loading