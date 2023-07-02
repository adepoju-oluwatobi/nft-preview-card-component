import React from 'react'
import CardImg from '../assets/image-equilibrium.jpg'
import EthIcon from '../assets/icon-ethereum.svg'
import ClockIcon from '../assets/icon-clock.svg'
import Avatar from '../assets/image-avatar.png'
import IconView from '../assets/icon-view.svg'

function CardPreview() {
  return (
    <div className='bg-[#0d192b] h-[100vh] flex justify-center items-center'>
        <div className='bg-[#14253d] w-[280px] h-[450px] p-6 rounded-2xl shadow-2xl'>
        <div className='relative'>
            <img className='rounded-2xl' src={CardImg} alt="" />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 flex justify-center items-center bg-[#00fff7] bg-opacity-30 rounded-2xl">
                <img className='relative' src={IconView} alt="" />
            </div>
        </div>
        <div>
            <p className='text-white text-lg font-bold py-2 hover:text-[#00fff7] cursor-pointer'>Equilibrium #3429</p>
            <p className='text-slate-400 text-sm'>Our Equilibrium collection promotes balance and calm.</p>
            <div className='flex justify-between py-3'>
                <div className='flex justify-evenly items-center gap-2'>
                    <img src={EthIcon} alt="" />
                    <p className='text-[#00fff7] text-sm'>0.041ETH</p>
                </div>
                <div className='flex justify-evenly items-center gap-2'>
                    <img src={ClockIcon} alt="" />
                    <p className='text-slate-400 text-sm'>3 days left</p>
                </div>
            </div>
        </div>

        <hr className='py-1'></hr>

        <div className='flex justify-between items-center py-2'>
            <div className='w-7 border rounded-full border-white'>
                <img src={Avatar} alt="" />
            </div>
            <div>
                <p className='text-white text-sm hover:text-[#00fff7] cursor-pointer'><span className='text-slate-400'>Creation of</span> Jules Wyvern</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardPreview