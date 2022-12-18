
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

    return(
        <>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="App">
            <ResponsiveAppBar />
            <header className="App-header">
                <h1> OUR STORY </h1>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center', paddingLeft: "50px", paddingRight: "50px", marginLeft:"100px", marginRight:"100px"}}>
                ‘Bang!’ is a feature-packed internet café reservation management system where we put more emphasis on the amount of time the customer uses the PC rather than standing up to order something or waiting in line for a vacant PC. Reserve now and play non-stop.
                </Typography>
                <br></br>
                <h1> THE DEVELOPERS </h1>
                <div className='CARDS'>
                    <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                    <AboutCard title="Joshua Taboso" description="Developer" image="images/tabs.jpg"/>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                    <AboutCard title="Rian Francis Cabanero" description="Developer" image=""/>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                    <AboutCard title="Kayken Gosuico" description="Developer" image=""/>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                    <AboutCard title="Art Emmanuel Ilustrisimo" description="Developer" image=""/>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                    <AboutCard title="Renzeus Ruiz" description="Developer" image=""/>
                    </motion.a>
                </div>
                <br></br>
                <h1> MORE FROM US... </h1>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center', paddingLeft: "50px", paddingRight: "50px", marginLeft:"100px", marginRight:"100px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ligula erat, ut accumsan massa tempus a. Nam at ullamcorper nisl, sit amet luctus leo. Quisque sed metus eu lectus auctor porta. Nam neque tortor, luctus sagittis sem ut, finibus vestibulum felis. Curabitur ligula mi, vehicula vel suscipit vitae, maximus sed sapien. Nullam et efficitur ipsum. Aenean non erat risus. Vivamus congue mi placerat turpis viverra aliquet. Nullam interdum suscipit turpis, facilisis placerat enim. Nulla facilisi. Ut ultricies porttitor felis vitae hendrerit. Suspendisse tortor massa, dignissim vel egestas nec, tincidunt sed magna. Nulla eget odio a arcu aliquet tincidunt ac a elit. Fusce porttitor dolor ut arcu pellentesque, et ultricies enim mollis. Etiam semper dolor magna, vel aliquet tellus vestibulum eu.
                <br></br><br>   </br>
                Mauris luctus tincidunt dictum. Fusce laoreet lorem in lobortis ullamcorper. Aliquam in sapien id sapien luctus aliquam. Donec eu est tortor. Quisque varius lacinia est, ut commodo ipsum convallis et. Donec interdum risus ut est faucibus placerat. Etiam pretium purus orci, luctus aliquet diam aliquam sit amet. Maecenas sodales, turpis vitae congue convallis, magna erat posuere odio, et luctus ligula libero et nibh. Ut at purus ornare, vestibulum leo ut, bibendum orci. Suspendisse sed porttitor risus. Ut eget euismod ex. In pellentesque bibendum eros ac viverra.
                </Typography>
            </header>
        </div>
        </>
    );
}