import React,  {useEffect, useRef, useState} from 'react';
import '../styles/menuBar.css';
import { motion } from "motion/react";
import { ContactBar } from "./ContactBar";
import logo from "../assets/logoPink.png";
import { HashLink } from 'react-router-hash-link';
import '../index';


export const Menu: React.FC = () => {
    const ref = useRef(null)
    const [openContact, setOpenContact] = useState(false);

    return (<>
        <motion.div className='sticky flex w-full m-0 p-0 z-40 right-0 top-0 h-20 bg-[#2a2a2e]
            justify-between items-center grid-cols-8 '
                    initial={{top: 0}}
                    ref={ref}
        >
            <img src={logo} alt="logo" className='h-6 w-auto px-8 fill-primary' />
           
            <nav className='col-start-2 col-end-6 ml-10'>
                <ul className="text-gray-500 h-full w-full uppercase text-xs float-left flex items-center">
                    <li className='menuBarItem'><HashLink  to={'startPage'} smooth  >start</HashLink></li>
                    <li className='menuBarItem'><HashLink  to={'about'} smooth  >about</HashLink></li>
                    <li className='menuBarItem'><HashLink  to={'experience'} smooth  >experience</HashLink></li>
                    <li className='menuBarItem'><HashLink  to={'skills'} smooth >skills</HashLink></li>
                    <li className='menuBarItem'><HashLink  to={'gallery'} smooth >gallery</HashLink></li>
                    <li className='menuBarItem'><HashLink  to={'contact'} smooth >contact</HashLink></li>
                </ul>
            </nav>
            <button className='btnWIthBorders font-semibold classicText col-end-9' onClick={() => setOpenContact(true)}>
                Contact
            </button>
        </motion.div>
        
        <ContactBar open={openContact} setOpen={setOpenContact}/>
      </>
    )
}