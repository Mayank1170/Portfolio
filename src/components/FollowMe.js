import React from 'react'
import twitter from './../images/twitter.jpg'
import GitHub from './../images/GitHub.jpg'
import LinkedIn from './../images/LinkedIn.jpg'
const FollowMe = () => {
  return (
    <div>
      <ul className="">
          <li className="w-14 border-8 border-t-[15px] border-[#1DA1F2] rounded-tr-lg">
              <img src ={twitter} alt={"Twitter logo"}/>
          </li>
          <li className="w-14 border-8 border-black">
          <img src ={GitHub} alt={"GitHub logo"}/>
          </li>
          <li className="w-14 border-8 border-[#0274B3] rounded-br-lg">
          <img src ={LinkedIn} alt={"LinkedIn logo"}/>
          </li>
      </ul>
    </div>
  )
}

export default FollowMe;