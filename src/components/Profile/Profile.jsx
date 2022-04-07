import React from "react";
import classes from "./Profile.module.css";
import {WallPost} from "./WallPost/WallPost";

export const Profile = () => {
    return (


        <div>


            <div><img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jtzLV8nbTiaPVkbonKgPJAHaDk%26pid%3DApi&f=1'
            /></div>


            <div>
                ava + description
            </div>


            <div className={classes.posts}>My post
                <div>classes.postsclasses.postst</div>
                <textarea cols="30" rows="5"> </textarea>
                <div>
                    <button>post</button>
                </div>
                <div>
                    <button>post remove</button>
                </div>
            </div>


            <WallPost message='Hi how are you' likevaley='likes:10'/>
            <WallPost message='THX i`m fine' likevaley='likes:20'/>
            <WallPost message='I`m want in toalet' likevaley='likes:30'/>
            <WallPost message='My first React' likevaley='likes:40'/>


        </div>
    )
}

//