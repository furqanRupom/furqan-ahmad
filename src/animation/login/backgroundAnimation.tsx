
"use client";
import * as React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
interface AnimatedBackgroundProps {
    children:React.ReactNode
}
const AnimatedBackground:React.FunctionComponent<AnimatedBackgroundProps> = ({children}) => {
    const backgroundRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() =>{
    
  })


    React.useEffect(() => {
        const background = backgroundRef.current;

        gsap.fromTo(
            background,
            { opacity: .3 },
            {
                opacity: 1,
                duration: 5,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true
            }
        );
    }, []);

    return (
        <div ref={backgroundRef} >
            <div>
              {children}
            </div>
        </div>
    );
};

export default AnimatedBackground;
