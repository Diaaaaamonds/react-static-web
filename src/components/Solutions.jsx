import React from 'react'
import SectionHeading from './SectionHeading'
import Logo from '../logo.svg'

function Solutions() {
  return (
    <div>
        <SectionHeading title="解决方案" subTitle="解决方案解决方案解决方案"></SectionHeading>
        <div className='grid lg:grid-cols-2 gap-20'>
            <div>
                <h3 className='mt-7 text-[32px] font-bold'>强有力的工具</h3>
                <p className='mt-4 mb-8 text-gray-500'>
                强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具
                </p>
                <ul className='grid gap-3'>
                    {
                        [1,2,3].map(v => (
                            <li 
                                className={`p-5 justify-between rounded border-zinc-100 ${v===1 && "bg-zinc-100"}`}
                                key={v}
                            >
                                <p className='text-lg' font-bold>构建简单主页</p>
                                <div className='flex justify-between relative'>
                                    <p className='text-lg leading-7 mt-1'>
                                    构建简单主页构建简单主页构建简单主页构建简单主页构建简单主页构建简单主页构建简单主页
                                    </p>
                                    <img src={Logo} alt="" className='w-[38px] h-[38px]' />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <img src={Logo} alt="" className='w-[500px] h-[580px]' />

        </div>
    </div>
  )
}

export default Solutions