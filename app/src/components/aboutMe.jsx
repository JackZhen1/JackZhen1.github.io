import useTypeWriter from "../hooks/useTypeWriter";

const PARAGRAPHS = `UserName: Jack(Weijie) Zhen \n
I was born in China and moved to New Zealand when I was 13, showing strong interest and expertise in Computer Technology. I completed my High School and University studies focused on modern web application development. I completed my Bachelor degree in Computer Science in May 2025, and now have moved to Melbourne, Australia, looking for new opportunities and experiences!
With a Bachelor of Science in Computer Science from The University of Auckland, I have developed a solid foundation in technology and hands-on experience across various roles. From designing and managing web applications as a Full Stack Developer Intern to optimizing SEO strategies as an IT & Web Administrator, my professional journey has equipped me with diverse skills. My leadership experience as Director of Event Planning for the Auckland University Chinese Student Society enhanced my ability to manage teams, coordinate logistics, and execute successful large-scale events.
Tech Stack: \n
Front end: React, JavaScript/TypeScript, HeroUI, Icon library \n
Back end: .NET Core, Python \n`;


function AboutMe() {
  const displayText = useTypeWriter([PARAGRAPHS], 1, 0, 1000);

  return (
    <div className="flex gap-4"> 
      <img src="/jack.png" className="w-3/10 h-auto shrink-0 object-cover"/>
      <div className="space-y-2">
        <p>{displayText}</p>
      </div>
    </div>
  );
}

export default AboutMe;
