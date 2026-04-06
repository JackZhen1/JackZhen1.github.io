import { useEffect, useState } from "react";

const useTypeWriter = (list, writingSpeed, deletingSpeed, delay) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    useEffect(()=> {
        const updateText = () => {
            const currentFullText = list[currentIndex];
            isDeleting ? setText(currentFullText.substring(0, text.length - 1))
                : setText(currentFullText.substring(0, text.length + 1))
            if (!isDeleting && text === currentFullText) {
                if (delay === 0) {
                    return; 
                }
                setIsDeleting(true);
            }
            else if (isDeleting && text === '') {
                setIsDeleting(false);
                setCurrentIndex((currentIndex + 1) % list.length);
            }
        }
        
        const speed = (text === list[currentIndex] && !isDeleting) 
        ? delay 
        : (isDeleting ? deletingSpeed : writingSpeed);
        
        if (speed > 0) {
            const timer = setTimeout(updateText, speed);
            return () => clearTimeout(timer);
        }
        
        
        
    },[text, isDeleting])
    
    return text;
};

export default useTypeWriter;