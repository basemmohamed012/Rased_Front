import React from 'react'
import logo from '../../assets//images/logoNew.svg'
import Search from '../../assets/images/seacrh.svg'
import profile from '../../assets/images/profile.svg'
import comment from '../../assets/images/comment.svg'
import people from '../../assets/images/people.svg'
import motification from '../../assets/images/notification.svg'
// import arow from '../../assets/images/arowblack.svg'
import DarkModeToggle from '../Navbar/DarkModeToggle'
const NavbarWallet = () => {
    return (
        <div>
            <div className='flex justify-around mt-5'>

                <div>
                    <img src={logo} className='ml-40 ' />
                </div>


                <div>
                    {/* Left side: Profile + Icons */}
                    <div className="flex items-center gap-3">         {/* Language Dropdown */}


                        {/* User Info */}
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <input
                                    type="text"

                                    className="w-[425.58px] h-[40px] border-none p-[8px] pl-4 rounded-[20px] bg-[rgba(235,234,234,0.5)] "
                                />
                                <img src={Search} className='absolute z-10 bottom-3 right-4' alt="" />
                            </div>
                            {/* <button className=" bg-[rgba(235,234,234,1)] w-[80px] h-[38px] rounded-[40px] px-3 py-1  text-sm">
                                <div className='flex gap-2'>
                                    <p className='font-[cairo] font-bold text-[12px]'>
                                        عربية
                                    </p>
                                    <img src={arow} alt="" />

                                </div>

                            </button> */}
                            <div className='w-[52px] h-[51px] bg-[rgba(153,149,149,0.2)] rounded-[40px] p-[16px] gap-[10px]'>
                                <img src={comment} alt="" />
                            </div>
                            <div className='w-[50px] h-[51px] bg-[rgba(153,149,149,0.2)] rounded-[40px] p-[16px] gap-[10px]'>
                                <img src={people} alt="" />
                            </div>
                            <div className='w-[56px] h-[51px] bg-[rgba(153,149,149,0.2)] rounded-[40px] p-[16px] gap-[10px]'>
                                <img src={motification} alt="" />
                            </div>
                            <DarkModeToggle />
                            <div className="text-sm text-right">
                                <div className="font-semibold">Basant Selim</div>
                                <div className="text-gray-500 text-left text-xs">UX Designer</div>
                            </div>
                            <img
                                src={profile}
                                alt="user"
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default NavbarWallet
