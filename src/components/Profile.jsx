import React from "react";
import classes from "./Profile.module.css";

export const Profile = () => {
    return <div className={classes.content}>
        <div><img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jtzLV8nbTiaPVkbonKgPJAHaDk%26pid%3DApi&f=1'
        /></div>
        <div>
            ava + description
        </div>
        <div className={classes.posts}>My post
            <div>New post</div>
        </div>
        <div className={classes.wall}>
        <div>Post 1</div>
        <div>Post 2</div>
            </div>
    </div>
}

