import React from 'react';
import { NavbarMenu } from '../mockData/data';
import { FaArrowRight } from 'react-icons/fa';
import { FaBookOpenReader } from 'react-icons/fa6';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {

    const [open,setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8 px-8">
          {/* Logo section */}
          <div className="text-primary loboto text-2xl flex items-center gap-2 font-bold">
            <FaBookOpenReader />
            <p>Kidoria</p>
          </div>
          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icon section */}
          <div>
            <button className="hidden lg:flex rounded-full px-4 py-2 text-md text-white bg-primary  items-center gap-4 hover:bg-lighter">
              <p>Join Us</p>
              <FaArrowRight className="text-lg" />
            </button>
          </div>
          {/* Mobile hamburger menu section */}
          <div className='lg:hidden' onClick={()=>setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveMenu open={open}/>
    </>
  );
};

export default Navbar;
