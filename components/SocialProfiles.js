import React from 'react';
import SOCIAL_PROFILES from '../src/data/socialProfiles';
import { blockStatement } from '@babel/types';

const SocialProfile = props =>{
    const { link, image} = props.socialProfile;
    return(
        <div style={{display: 'inline-block', height: 50, width: 50}}>
        <a href={link}><img src={image} alt='social-profile' style={{width: 35, height: 35}}/></a>
        
        </div>
    )
}

const SocialProfiles  = () =>(
  
            <div>
                <h2>Connect with me</h2>
                <div>{
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE =>
                        (
                            <SocialProfile key = {SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                        )
                    )
                }</div>
            </div>

        )

export default SocialProfiles;