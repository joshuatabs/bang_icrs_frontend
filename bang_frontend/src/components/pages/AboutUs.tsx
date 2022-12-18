import { motion, useScroll, useSpring } from 'framer-motion';
import { Typography } from "@mui/material";

import ResponsiveAppBar from '../global/navbar';
import AboutCard from '../global/AboutCard';



export default function About() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <div className="App">
                <ResponsiveAppBar />
                <header className="App-header">
                    <h1> OUR STORY </h1>
                    <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', paddingLeft: "50px", paddingRight: "50px", marginLeft: "100px", marginRight: "100px" }}>
                        ‘Bang!’ is a feature-packed internet café reservation management system where we put more emphasis on the amount of time the customer uses the PC rather than standing up to order something or waiting in line for a vacant PC. Reserve now and play non-stop.
                    </Typography>
                    <br></br>
                    <h1> THE DEVELOPERS </h1>
                    <div className='CARDS'>
                        <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => { }} onHoverEnd={e => { }}>
                            <AboutCard title="Joshua Taboso" description="Developer" image="/static/images/Profiles/Tabs.jpg" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => { }} onHoverEnd={e => { }}>
                            <AboutCard title="Rian Francis Cabanero" description="Developer" image="/static/images/Profiles/Rian.jpg" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => { }} onHoverEnd={e => { }}>
                            <AboutCard title="Kayken Gosuico" description="Developer" image="/static/images/Profiles/Ken.jpg" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => { }} onHoverEnd={e => { }}>
                            <AboutCard title="Art Emmanuel Ilustrisimo" description="Developer" image="/static/images/Profiles/Art.jpg" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => { }} onHoverEnd={e => { }}>
                            <AboutCard title="Renzeus Ruiz" description="Developer" image="/static/images/Profiles/Enzo.jpg" />
                        </motion.a>
                    </div>
                    <br></br>
                    <h1> MORE FROM US... </h1>
                    <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', paddingLeft: "50px", paddingRight: "50px", marginLeft: "100px", marginRight: "100px" }}>
                        At 'Bang!', we understand that time is valuable, especially when you're looking to enjoy a gaming or online experience at an internet café. 
                        That's why we've developed a reservation management system that puts more emphasis on the amount of time you spend on the PC, rather than standing in line or waiting for a vacant machine.
                        With 'Bang!', you can reserve your spot in advance and play non-stop without any interruptions.
                        <br></br><br></br>
                        Our feature-packed system makes it easy to find and book a PC that meets your needs, whether you're looking for a high-powered gaming rig or a more basic setup for web browsing and email. 
                        We also offer a range of amenities and services to make your visit more enjoyable, including refreshments, snacks, and other conveniences.
                        <br></br><br></br>
                        At 'Bang!', our goal is to provide an exceptional internet café experience for all of our customers. So why wait? Reserve your spot now and start playing!
                    </Typography>
                </header>
            </div>
        </>
    );
}