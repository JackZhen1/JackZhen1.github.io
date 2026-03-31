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
    const isHovered = useRef(false);

    const updateAnimation = () => {
        const constSpeed = 0.001

        if (!isHovered.current) {
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
    }

    return (
        <div className="flex items-center justify-center perspective-[7000px]" 
        onWheel={handleWheel}
        onMouseEnter={() => isHovered.current = true}
        onMouseLeave={() => isHovered.current = false}>
            <div className="relative w-50 h-75" style={{ transformStyle: 'preserve-3d' }} ref={ringRef}>

                {images.map((img, index) => {
                    const angle = 360/imgLength * index - 90
                    return (
                        <div key={index} className="absolute top-0 left-0 w-full h-full" 
                        style={{transform: `rotateY(${angle}deg) translateZ(${1200/Math.PI}px)`}}>
                            <a href="https://www.youtube.com/?hl=zh-cn">
                                <img src={img} className="w-full h-full object-cover" />
                            </a>
                            
                        </div>
                    )
                })}

            </div>
        </div>
    ) 
};

export default Projects;