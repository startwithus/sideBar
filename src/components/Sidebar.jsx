import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoHome } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { RiBillFill } from "react-icons/ri";
import { TiSupport } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import logo from '../assets/white-logo.png'
import { FaThList } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import './sidebar.css'

const Sidebar = ({children }) => {

    const [isOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!isOpen);

    const routes = [
        {
            path: "/user",
            name: "Home",
            icon: <IoHome />
        },
        {
            path: "/customer",
            name: "customer",
            icon: <RiCustomerServiceFill />
        },
        {
            path: "/billing",
            name: "Billing",
            icon: <RiBillFill />
        },
        {
            path: "/support",
            name: "support",
            icon: <TiSupport />
        },
    ];

    return (
        <>
            <div className='main-container'>

                <motion.div animate={{ width: isOpen ? "220px" : "45px" }} className='sidebar'>
                    <div className='logo-section'>
                        {isOpen && <img src={logo} alt="" />}
                        <h3 style={{ cursor: "pointer" }} onClick={toggle}><FaThList /></h3>
                    </div>

                    <div className='search'>
                        <div className='search-section'>
                            <h2 style={{ cursor: "pointer" }}><IoSearch /></h2>
                            {isOpen && <input type="text" placeholder="Search.." />}
                        </div>
                    </div>
                    <section className='routes'>
                        {
                            routes.map((el, l) => (
                                <NavLink to={el.path} key={el.name} className="link">
                                    <div className='icon'>{el.icon}</div>
                                    <div className='link_text'>{el.name}</div>
                                </NavLink>
                            )
                            )}
                    </section>
                </motion.div>
                <main>{children}</main>
            </div>

        </>
    )
}

export default Sidebar