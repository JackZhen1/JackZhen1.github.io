import { useRef, useEffect } from "react";

const images = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500',
];

const Projects = () => {
    const imgLength = images.length

    const ringRef = useRef(null);
    const rotation = useRef(0);
    const animationFrame = useRef(null);
    const velocity = useRef(0);

    const updateAnimation = () => {
        const constSpeed = 0.001
        velocity.current += constSpeed
        rotation.current += velocity.current

        if (ringRef.current) {
            ringRef.current.style.transform = `rotateY(${rotation.current}deg)`;
        }

        velocity.current *= 0.95
        animationFrame.current = requestAnimationFrame(updateAnimation);
    }

    useEffect(() => {
    animationFrame.current = requestAnimationFrame(updateAnimation);

    return () => cancelAnimationFrame(animationFrame.current);
    }, []);

    const handleWheel = (e) => {
        velocity.current += e.deltaY * 0.028
    }

    return (
        <div className="w-full h-125 flex items-center justify-center perspective-[7000px]" onWheel={handleWheel}>
            <div className="relative w-50 h-75" style={{ transformStyle: 'preserve-3d' }} ref={ringRef}>

                {images.map((img, index) => {
                    const angle = 360/imgLength * index - 90
                    return (
                        <div key={index} className="absolute top-0 left-0 w-full h-full" 
                        style={{transform: `rotateY(${angle}deg) translateZ(${1200/Math.PI}px)`}}>
                            <img src={img} className="w-full h-full object-cover" />
                        </div>
                    )
                })}

            </div>
        </div>
    ) 
};

export default Projects;