import React from 'react'
import FollowMe from './FollowMe'
const About = () => {
    return (
        <div class="flex items-center justify-center h-screen">
            <FollowMe/>
            <div className="text-center w-full space-y-3">
                <h1 className="text-3xl text-[#CACACA] font-bold">Hello, my name is Mayank Agarwal</h1>
                <div className="flex-col justify-center items-center text-[#CACACA] space-y-2">
                    <p>
                        I am an award-winning full-stack web developer and UI/UX JavaScript specialist.
                    </p>
                    <p>
                        Check out my articles, React and React Native UI components at the code laboratory.
                    </p>
                    <p>
                        Feel free to take a look at my latest projects on the web portfolio page.
                    </p>
                    <p>
                        You can contact me at mayankaga1170@gmail.com
                    </p>
                </div>
            </div>
        </div >
    )
}

export default About