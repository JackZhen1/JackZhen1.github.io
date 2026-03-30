import { useRef, useState} from "react";
import useTypeWriter from "./hooks/useTypeWriter";
import Social from "./components/social";
import Projects from "./components/projects";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const titles = ["Full Stack Developer.", "Web Administrator.", "abcdwadwa."];
  const text = useTypeWriter(titles, 100, 50, 2000);


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputValue === 'about-me') {
       setShowAboutMe(true);
      } else if (inputValue === 'projects'){
        setShowProjects(true);
      }
      setInputValue('');
    }
  }
  return (
    <div className="">
      <Social />
      <div className='flex flex-col'>
        
        {/* body */}
        <div className="flex flex-col items-center">
          {/* hero text */}
          <h1 className="text-8xl">Hi,</h1>
          <h2 className="text-5xl">I'm Jack Zhen</h2>
          <h2 className="text-3xl">I'm a <span className="text-cyan-300">{text}</span>|</h2>

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
            <div className='p-2 font-bitcount text-xl h-150'>
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

              {showProjects && <Projects />}

            </div>
            
          </div>
        </div>
        

        
      </div>

    </div>
    
    
  )
}

export default App;
