import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as Fa6Icons from 'react-icons/fa6';
import * as RiIcons from 'react-icons/ri';
import * as VscIcons from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import '../../assets/styles/navAdmin.css';
import { IconContext } from 'react-icons';

const SidebarData = [
  {
    title: 'Beranda',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Data User',
    path: '/user',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Data Laboran',
    path: '/laboran',
    icon: <FaIcons.FaUserCog />,
    cName: 'nav-text'
  },
  {
    title: 'Data Asisten',
    path: '/asisten',
    icon: <FaIcons.FaUserTie />,
    cName: 'nav-text'
  },
  {
    title: 'Kehadiran Asisten',
    path: '/kehadiran',
    icon: <Fa6Icons.FaListCheck />,
    cName: 'nav-text'
  },
  {
    title: 'Validasi Data Pendaftaran',
    path: '/validasi',
    icon: <FaIcons.FaClipboardCheck />,
    cName: 'nav-text'
  }
];

export default function NavAdmin() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{ color: '#000' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </IconContext.Provider>
    </>
  );
}
