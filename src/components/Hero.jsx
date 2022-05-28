import React from 'react'
import Logo from '../logo.svg'

function Hero() {
  return (
    <div className='grid justify-items-center gap-8 pb-28 relative'>
        <p className='text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal'>
            打造一个美美网站
        </p>
        <p className='text-xl text-gray-700 md:w-1/2 text-cencter'>
            好美，真的太美。好美，真的太美。好美，真的太美。好美，真的太美。好美，真的太美。好美，真的太美。好美，真的太美。好美，真的
        </p>
        <div>
            <button className='rounded bg-blue-500 text-base text-white py-3 px-8'>
                立即试用
            </button>
            <button className='rounded bg-blue-900 text-base text-white py-3 px-8 ml-3'>
                了解更多
            </button>
        </div>
        <div className='relative w-full'>
            <svg
            width="256"
            height="256"
            viewBox='0 0 256 256'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute right-0 -z-10'
            >
                <circle cx="128" cy="128" r="128" fill='url(#paint0_linear_0_22'></circle>
                <defs>
                    <linearGradient
                    id='paint0_linear_0_22'
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="256"
                    gradientUnits='userSpaceOnUse'
                    >
                        <stop stopColor='white'></stop>
                        <stop offset="0.774017" stopColor='#eaeaea'></stop>
                        <stop offset="1" stopColor='#dfdfdf'></stop>
                    </linearGradient>
                </defs>

            </svg>
        </div>
        <div className='relative grid justify-items-center'>
            <img src={Logo} alt="" className='w-[768px] h-[470px] object-cover object-top'/>
            <div className='flex absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl'>点击查看演示视频</div>
        </div>
        <svg
        width="128"
        height="128"
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute bottom-0 md:bottom-20 -left-10 -z-10'
        >
            <circle cx="64" cy="64" r="64" fill='url(#paint0_linear_0_23'></circle>
            <defs>
                <linearGradient
                id='paint0_linear_0_23'
                x1="0"
                y1="0"
                x2="0"
                y2="128"
                gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='white'></stop>
                    <stop offset="0.774017" stopColor='#eaeaea'></stop>
                    <stop offset="1" stopColor='#dfdfdf'></stop>
                </linearGradient>
            </defs>

        </svg>
    </div>
  )
}

export default Hero