import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
import { useLayoutEffect, useEffect } from 'react';

export const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}
// @ts-ignore
const useGSAP = (animationCallback, dependencies = []) => {
    const elementRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(animationCallback, elementRef);

        return () => {
            ctx.revert();
        };
    }, dependencies);

    return elementRef;
};

export default useGSAP;
