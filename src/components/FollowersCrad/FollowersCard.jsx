import React from 'react'
import "./FollowersCard.css"

import { Followers } from '../../Data/FollowersData';
 
function FollowersCard() {
  return (
    <div className="FollowerCard">
        <h3>Who is following You</h3>


        {Followers. map(( follwer, id) => {
            return(
                <div className="follower">
                    <div>
                        <img src={follwer.img} alt="" className='followerImage'  />
                        <div className='name'>
                            <span>{follwer.name}</span>
                            <span>@{follwer.username}</span>
                        </div>
                    </div>

                    <button className='button fc-button'>
                        Follow
                    </button>

                </div>
            )
        })}

    </div>
  )
}

export default FollowersCard