import React, { useState } from 'react';

const NavPractice = () => {
    const [nav, setNav] = useState(true);
    if (nav === false) {
        document.body.classList.add('max-lg:overflow-hidden')
    } else {
        document.body.classList.remove('max-lg:overflow-hidden')
    }

    return (
        <div>
            <div className='container px-3'>
                <div className='flex justify-between py-[20px]'>
                    <a href=''>
                        <h2 className='text-[20px] font-semibold text-black'>Navlogo</h2>
                    </a>
                    <ul className={`${nav ? 'left-[-100%]' : 'left-0 bg-white'} flex items-center gap-[30px] lg:flex-row max-lg:justify-center  max-lg:flex-col top-0 max-lg:min-h-screen max-lg:w-full max-lg:fixed transition-all duration-300 ease-linear z-[4] `}>
                        <li><a onClick={() => setNav(!nav)} href='#link' className='text-black font-senibold text-[18px] after:h-[2px] after:w-[0] hover:after:w-full after:bg-black after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-3px] after:rounded-[20px]'>Link</a></li>
                        <li><a onClick={() => setNav(!nav)} href='#link' className='text-black font-senibold text-[18px] after:h-[2px] after:w-[0] hover:after:w-full after:bg-black after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-3px] after:rounded-[20px]'>Link</a></li>
                        <li><a onClick={() => setNav(!nav)} href='#link' className='text-black font-senibold text-[18px] after:h-[2px] after:w-[0] hover:after:w-full after:bg-black after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-3px] after:rounded-[20px]'>Link</a></li>
                        <li><a onClick={() => setNav(!nav)} href='#link' className='text-black font-senibold text-[18px] after:h-[2px] after:w-[0] hover:after:w-full after:bg-black after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-3px] after:rounded-[20px]'>Link</a></li>
                        <li><a onClick={() => setNav(!nav)} href='#link' className='text-black font-senibold text-[18px] after:h-[2px] after:w-[0] hover:after:w-full after:bg-black after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-3px] after:rounded-[20px]'>Link</a></li>
                    </ul>
                    <div className='flex items-center lg:hidden'>
                        <div onClick={() => setNav(!nav)} className='lg:hidden flex w-[40px] h-[26px] justify-between items-center flex-col z-[6] relative'>
                            <span className={`${nav ? '' : 'rotate-[50deg] translate-y-[22px]'} bg-black h-[4px] w-full rounded-[10px] transition-all ease-linear duration-300`}></span>
                            <span className={`${nav ? '' : 'hidden'} bg-black h-[4px] w-full transition-all duration-300 ease-linear rounded-[10px]`}></span>
                            <span className={`${nav ? '' : 'rotate-[-50deg] translate-y-[10%]'} bg-black h-[4px] w-full transition-all duration-300 ease-linear rounded-[10px]`}></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavPractice;
