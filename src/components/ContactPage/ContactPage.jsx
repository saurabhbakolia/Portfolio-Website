import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import ContactUsSocial from './ContactUsSocial';
import NavLinks from './NavLinks';
import Copyright from './Copyright';
import ContactButtons from './ContactButtons';
import NavLogo from '../Navbar/NavLogo';

const ContactPage = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <main className="w-screen m-auto">
            <div className='contact-page-box'>
                <NavLogo />
                <ContactUsSocial />
                <ContactButtons />
                <NavLinks />
                <Copyright />
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0", "#4B5563"]
                        },
                        links: {
                            color: {
                                value: ["#2EB67D", "#4B5563"]
                            },
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 30,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />
        </main>
    )
}

export default ContactPage