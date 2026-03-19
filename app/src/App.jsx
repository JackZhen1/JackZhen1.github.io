import { useRef, useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [showAboutMe, setShowAboutMe] = useState(false);

  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputValue === 'about-me') {
       setShowAboutMe(true);
      }
      console.log('execute command')
      setInputValue('');
    }
  }
  return (
    // body
    <div className='flex flex-col items-center justify-center min-h-dvh'>
      
      <h1 className="font-geologica text-9xl">Hi,</h1>
      <h2 className="font-geologica text-5xl">I'm Jack Zhen</h2>
        
      
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

            <input type="text" placeholder="enter your command here..." value={inputValue} autoFocus
            className="outline-none caret-white flex-1"
            onChange={(e)=> setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            onBlur={()=>inputRef.current.focus()}>
            </input>
          </div>

          {/* About Me */}
          {showAboutMe && (
            <span>With a Bachelor of Science in Computer Science from The University of Auckland, I have developed a solid foundation in technology and hands-on experience across various roles. From designing and managing web applications as a Full Stack Developer Intern to optimizing SEO strategies as an IT & Web Administrator, my professional journey has equipped me with diverse skills. My leadership experience as Director of Event Planning for the Auckland University Chinese Student Society enhanced my ability to manage teams, coordinate logistics, and execute successful large-scale events.
            </span>
          )}

        </div>
        
      </div>
    </div>
    
  )
}

export default App;
