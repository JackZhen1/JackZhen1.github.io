const App = () => {

  return (
    // body
    <div className='flex items-center justify-center min-h-dvh'>

      {/* cmd container */}
      <div className='border-white border w-4/6 '>

        {/* header */}
        <div className='bg-gray-800 h-12 flex flex-col justify-end'>

          {/* tab */}
          <div className='bg-black w-fit ml-4 p-2 rounded-t-3xl'>
            <span className='text-white px-2'>Command Prompt</span>
          </div>
        </div>

        {/* window */}
        <div className='p-2 font-bitcount text-xl' id=''>
          <span className='text-2xl'>Commands: </span>
          
          <ul className="text-xl ml-2">
            <li className="">{'> '}about-me</li>
            <li>{'> '}projects</li>
          </ul>
          
          {/* command line */}
          <div className="flex">
            <span className="">C:\Users\zwj1320{">"}</span>
            <input type="text" placeholder="enter your command here..."className="outline-none caret-white flex-1"></input>
          </div>

        </div>
        
      </div>
    </div>
    
  )
}

export default App;
