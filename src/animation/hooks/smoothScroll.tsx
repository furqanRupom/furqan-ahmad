
"use client";
import * as React from "react"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'


interface ISmoothScrollProps {
    children: React.ReactNode
}
const SmoothScroll: React.FunctionComponent<ISmoothScrollProps> = ({ children }) => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    return (
        <ReactLenis root options={{
            smoothWheel: true,
            duration:1.5,
            lerp:0.2
        }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll