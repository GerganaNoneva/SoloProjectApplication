import React from 'react';
import AvatarImage from 'public/images/avatar.png'
import classNames from "classnames";
import styles from "./Avatar.module.scss";

export default function Avatar ({size=90, url, verified = false, }) {

    return (
        <div className={classNames(styles.avatar)}>
            <img src={url} className={classNames(styles.image)}>
                <svg src=
            </img>
        </div>
            
            
    )


}