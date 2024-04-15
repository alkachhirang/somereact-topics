import React from 'react';


const MapCard = () => {
    const data = [
        {
            content: 'Software Dveloper',
            para: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            width: 'w-[526px]'
        },
        {
            content: 'UI/UX Designer',
            para: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            width: 'w-[416px]'
        },
        {
            content: 'Back end Developer',
            para: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            width: 'w-[416px]'
        },
        {
            content: 'Wordpress',
            para: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            width: 'w-[526px]'
        },

    ]
    return (
        <div>
            <div className='container mx-auto py-[50px]'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-center text-semibold mb-[20px] max-w-[230px] p-[15px]  '>Month:-April</h2>
                </div>
                <h3 className='text-black text-lg font-bold mb-[40px] text-center'>Map Cards by React</h3>
                <div className='flex-row flex-wrap flex gap-3 justify-center'>
                    {data.map((a, index) => (
                        <div key={index} className={`${a.width} flex`} >
                            <div key={index} className='bg-grey hover:bg-gradientbg group hover:border-transparent p-[20px] cursor-pointer rounded-[25px] border-solid border-[1px] border-[#000] relative transition-all ease-linear duration-500 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradientbg after:opacity-0 hover:after:opacity-100 after:rounded-[25px] after:transition-all after:ease-linear after:duration-300 '>
                                <p className='mb-[8px] text-black text-sm font-semibold relative z-[2]'>{a.content}</p>
                                <p className='mb-[8px] text-xs text-black font-normal relative z-[2]'>{a.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MapCard;
