import React from 'react'
import TeamCarousel from './TeamCarousel'

function Team() {
    return (
        <div>
            <div className='w-full py-10 lg:py-20 relative h-[400px] 2xl:hidden lg:flex hidden'>
                <div className='bg-[#4FBDBA] absolute bottom-0 left-0 w-[50%] px-14 lg:px-24 pt-14 pb-10 flex flex-col gap-5 lg:translate-y-0 xl:translate-y-[-100px]'>
                    <h1 className='text-black text-2xl font-semibold italic'>Happy to be a part of the team</h1>
                    <p className='text-white pr-24'>
                        June invests more in human resources for great Team building which is always a priority and getting a good team is like a blessing and feel proud to have such a lovely, energetic and confident team. We try to maintain work culture as fairly free and make sure that every teammate is in a position to take their own decision and we all stand by the same.
                    </p>
                </div>
                <div className='bg-[#062226] absolute bottom-0 right-0 w-[60%] min-h-[320px] overflow-hidden px-14 lg:px-24 pt-14 pb-10 gap-5 flex flex-col justify-start items-center'>
                    <h1 className='text-white text-2xl font-semibold italic'>Our Team</h1>
                    <div>
                        <TeamCarousel/>
                    </div>
                </div>
            </div>
            <div className='bg-[#062226] w-full min-h-[320px] overflow-hidden px-14 lg:px-24 pt-14 pb-10 gap-5 flex flex-col justify-start items-center lg:hidden'>
                <h1 className='text-white text-2xl font-semibold italic'>Our Team</h1>
                <div>
                    <TeamCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Team