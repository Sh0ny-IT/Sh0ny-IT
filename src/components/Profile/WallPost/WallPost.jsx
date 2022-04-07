import classes from './WallPost.module.css';
import React from "react";

export const WallPost = (props) => {

    return (
        <div className={classes.wall}>
            <img src="https://www.google.com/search?q=img+avatar&newwindow=1&rlz=1C5CHFA_enRU904RU904&tbm=isch&source=iu&ictx=1&vet=1&fir=BrXIyKK93MqxCM%252CIN--qpeX1hje-M%252C_%253BcP2BTcdRqLyfXM%252CIN--qpeX1hje-M%252C_%253BdnkpuKfT7z0WLM%252CVPch0WgdgDqcAM%252C_%253BZZcMOZGo1g8vCM%252Cnj5Z31eZQnbTDM%252C_%253BIdAFWUi25smL9M%252CcyPowwVV5ZV6IM%252C_%253BYXFOtw6K8pXS2M%252CHcu5m3IV3lUJEM%252C_%253B5su5szEJvwLQcM%252Ci2uUooOSfzviYM%252C_%253Br1OkoAP2SglDDM%252CN7iTzoygmlSzgM%252C_%253BcPXYODj90LFBgM%252CUUPtDBJdc_Dc4M%252C_%253BrVevTNzq-OAnEM%252CHcu5m3IV3lUJEM%252C_%253B_Gxw1e0xqeLJaM%252CUYDmY7Zj74fvBM%252C_%253B9gJhPhI8STvNOM%252CK_ntMWzSsdUazM%252C_%253BxrjRQM3cTvqV3M%252C3KXCVaMYBme6jM%252C_%253BvU2Oh3d7iQ_MvM%252CRPz6avDGgLzP7M%252C_%253BhtXKixAcxjebdM%252CpmcOnllnBz73oM%252C_&usg=AI4_-kStqQS0B0HlJRdr71DGaJvZrzEQWA&sa=X&ved=2ahUKEwijjuLypvr2AhXpSPEDHVf9Br8Q9QF6BAgmEAE#imgrc=dnkpuKfT7z0WLM"/>
            <div> {props.message} </div>
            <span>{props.likevaley}</span>

        </div>
    )
}