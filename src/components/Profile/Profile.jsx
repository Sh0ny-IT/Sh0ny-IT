import React from "react";
import classes from "./Profile.module.css";

export const Profile = () => {
    return (

        

        <div className={classes.content}>



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



            <div className={classes.wall}>
                <div>Wall Post 3</div>
                <div>Wall Post 2</div>
            </div>



        </div>
    )
}

//