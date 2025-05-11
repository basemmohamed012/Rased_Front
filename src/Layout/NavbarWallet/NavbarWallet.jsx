import React, { useEffect, useState } from 'react'
import logo from '../../assets//images/logoNew.svg'
import Search from '../../assets/images/seacrh.svg'
import profile from '../../assets/images/profile.svg'
import comment from '../../assets/images/comment.svg'
import people from '../../assets/images/people.svg'
import motification from '../../assets/images/notification.svg'
import notificationActive from '../../assets/images/mdi_bell-ring.svg'
import DarkModeToggle from '../Navbar/DarkModeToggle'
import { useNavigate } from 'react-router-dom'
import { decryptToken } from '../../components/helpers/TokenHelper'
import { jwtDecode } from 'jwt-decode';
import { UserCog2Icon } from 'lucide-react'

const NavbarWallet = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userBadge, setUserBadge] = useState(null);

    // Get the access token
    const accessToken = localStorage.getItem('acc-token');
    useEffect(() => {
        if(!accessToken) {
            navigate('/login');
            return;
        }
        else {
            // decrypt the access token
            const originalAcessToken = decryptToken(accessToken);
            // decrypt the token itself to get the data required
            const jwtData = jwtDecode(originalAcessToken);
            // set data
            setToken(originalAcessToken);
            setUserName(jwtData.name);
            setUserBadge(jwtData.typ);

            console.log(jwtData.name);
        }
    }, []);


    const Notify = () => {
        navigate('/notification');
    }

    const isActive = location.pathname === '/notification';
    return (
        <div>
            <div className='flex justify-around mt-5'>

                <div onClick={() => navigate('/')} className='cursor-pointer'>
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
                            <button onClick={Notify}>
                                <div
                                    className={`w-[56px] h-[51px] rounded-[40px] p-[16px] gap-[10px] ${isActive ? 'bg-[#16423C]' : 'bg-[rgba(153,149,149,0.2)]'
                                        }`}
                                >
                                    <img src={isActive ? notificationActive : motification} />
                                </div>
                            </button>
                            <DarkModeToggle />
                            <div className="text-sm text-right">
                                <div className="font-semibold">{userName}</div>
                                <div className="text-gray-500 text-left text-xs">{userBadge}</div>
                            </div>
                                <UserCog2Icon />
                            {/* <img
                                src={profile}
                                alt="user"
                                className="w-8 h-8 rounded-full"
                            /> */}
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default NavbarWallet
