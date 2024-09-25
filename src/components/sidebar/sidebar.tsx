import React from 'react';
import { useNavigate } from 'react-router';
import paths from './data';
import { Logout } from '../../assets/images-icon';

function SideBar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="w-[17.5%] h-screen flex-shrink-0 bg-[#242424]">
      <div className="pt-20 pl-5 flex flex-col gap-2.5">
        {paths.map((x) => (
          <div key={x.id}>
            <div
              className={`flex items-center h-8 pl-[10%] cursor-pointer text-capitalize w-[75%] hover:bg-[#5A5A5A] hover:text-[#ffffff]
                ${window.location.pathname === x.path ? 'bg-[#3B3B3B] h-10 w-full' : 'text-[#7E7F7F]'}`}
              onClick={() => x.path && navigate(x.path)}
            >
              <div className="mr-2">
                {x.icon}
              </div>
              <p
    className={`text-base font-normal leading-5 hover:text-[#fffff]  ${
      window.location.pathname === x.path ? 'text-[#ffffff]' : 'text-[#7E7F7F]'
    }`}
  >
    {x.name}
  </p>
            </div>
            
          </div>
        ))}
        <div className='mt-[80%] w-[77%] cursor-pointer hover:scale-110 transition-transform duration-300'>
    <img src={Logout} alt='logout'/>
  </div>
      </div>
    </div>
  );
}

export default SideBar;
