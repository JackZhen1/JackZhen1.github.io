import { useRef, useState} from "react";
import useTypeWriter from "./hooks/useTypeWriter";
import Social from "./components/social";
import Projects from "./components/projects";
import AboutMe from "./components/aboutMe";

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
      } else if ((inputValue === 'clear') || (inputValue === 'c')) {
        setShowAboutMe(false);
        setShowProjects(false);

      }
      setInputValue('');
    }
  }
  return (
    <div className="">

        {/* body */}
        <div className="flex flex-col items-center h-screen w-full snap-mandatory snap-y overflow-y-scroll scroll-smooth">
          <Social/>
          {/* hero text */}
          <div className="snap-start h-[35vh] pt-10 flex flex-col items-center shrink-0">
            <h1 className="text-8xl">Hi,</h1>
            <h2 className="text-5xl">I'm Jack Zhen</h2>
            <h2 className="text-3xl">I'm a <span className="text-cyan-300">{text}</span>|</h2>
          </div>
          
          {/* cmd container */}
          <div className='border-white border w-4/6 snap-start min-h-125 shrink-0'>

            {/* header */}
            <div className='bg-gray-800 h-12 flex flex-col justify-end'>

              {/* tab */}
              <div className='bg-black w-fit ml-4 p-2 rounded-t-3xl'>
                <span className='text-white px-2'>Command Prompt</span>
              </div>
            </div>

            {/* window */}
            <div className='p-2 font-bitcount text-xl flex-1 flex flex-col'>
              <p className="text-center p-4 text-2xl">Hello! Welcome to my website, start by enter one of the commands below!</p>
              <span className='text-2xl'>Commands: </span>
              
              <ul className="text-xl ml-2">
                <li className="">{'> '}about-me</li>
                <li>{'> '}projects</li>
              </ul>
              
              {/* command line */}
              <div className="flex overflow-clip">
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
              {showAboutMe && <AboutMe />}

              {showProjects && <Projects />}
            </div>
            
          </div>
        </div>

      </div>  
    
  )
}

export default App;
