import { useRef, useEffect, useState } from "react";
import useTypeWriter from "../hooks/useTypeWriter"

const projects = [
    {
        'name': 'UoA Your Way',
        'imageUrl': '/cs399.jpg',
        'projectUrl': 'https://github.com/JackZhen1/UoA-Online-Cross-Platform-Web-Mobile-Application-',
        'description': `UoA Your Way A .....app Tech Stack: Front End: React, React Native, TypeScript.`
    },
    {
        'name': 'Game Libary',
        'imageUrl': '/game_library.png',
    },
    {
        'name': 'UoA Your Way',
        'imageUrl': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500',
    },
    {
        'name': 'UoA Your Way',
        'imageUrl': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500',
    },
    {
        'name': 'UoA Your Way',
        'imageUrl': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500',
    },
    {
        'name': 'UoA Your Way',
        'imageUrl': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500',
    },
]


const Projects = () => {
    const imgLength = projects.length

    const ringRef = useRef(null);
    const rotation = useRef(0);
    const animationFrame = useRef(null);
    const velocity = useRef(0);

    const isHovered = useRef(false);
    const [focusedIndex, setFocusedIndex] = useState(null);
    const focusedIndexRef = useRef(null);

    const titleText = useTypeWriter(['My Projects'], 200, 0, 0);
    const updateAnimation = () => {
        const constSpeed = 0.001


        if(focusedIndexRef.current !== null && isHovered.current){
            const targetAngle = -(focusedIndexRef.current * 360 / imgLength - 90)
            const diff = targetAngle - rotation.current;
            const shortestDiff = ((diff + 180) % 360 + 360) % 360 - 180;
            velocity.current += shortestDiff * 0.001;
        } else if (!isHovered.current) {
            velocity.current += constSpeed
        }
        
        rotation.current += velocity.current

        if (ringRef.current) {
            ringRef.current.style.transform = `rotateY(${rotation.current}deg)`;
        }

        // inertia
        velocity.current *= 0.97

        animationFrame.current = requestAnimationFrame(updateAnimation);
    }

    useEffect(() => {
    animationFrame.current = requestAnimationFrame(updateAnimation);

    return () => cancelAnimationFrame(animationFrame.current);
    }, []);

    const handleWheel = (e) => {
        velocity.current += e.deltaY * 0.028
        setFocusedIndex(null)
        focusedIndexRef.current = null
    }

    return (
        <div className="w-full flex flex-col items-center">
            <p className="text-4xl text-center my-8">{titleText}</p>

            <div className="flex items-center justify-center perspective-[7000px]" 
            onWheel={handleWheel}
            onMouseEnter={() => isHovered.current = true}
                onMouseLeave={() => {
                isHovered.current = false
                setFocusedIndex(null)
                focusedIndexRef.current = null}}>

                <div className="relative w-50 h-75" style={{ transformStyle: 'preserve-3d' }} ref={ringRef}>

                    {projects.map((project, index) => {
                        const angle = 360/imgLength * index - 90
                        const isFocused = index === focusedIndex
                        return (
                            <div key={index} className="absolute top-0 left-0 w-full h-full flex flex-col" 
                            style={{transform: `rotateY(${angle}deg) translateZ(${1200/Math.PI}px)`}}
                            onClick={() => {
                                setFocusedIndex(index)
                                focusedIndexRef.current = index}}>
                                <p className="text-center">{project.name}</p>

                                <img src={project.imageUrl} className={`w-full h-full object-cover ${isFocused? 'scale-120 border-4 border-white brightness-110' :
                                    'cursor-pointer hover:border-4 hover:border-white/70  hover:brightness-110  hover:scale-105'}`}>
                                </img>
                                {/* <a className="text-center z-50 bg-black/70" href={project.projectUrl} target="_blank" rel="noopener noreferrer">Link to GitHub</a> */}
                            </div>
                        )
                    })}

                </div>
                
            </div>
            {focusedIndex !== null && (
                <div className="mt-20">
                    <p>{projects[focusedIndex].description}</p>
                </div>             
            )}
        </div>
       
    ) 
};

export default Projects;