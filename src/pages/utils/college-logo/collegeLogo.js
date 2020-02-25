import React from 'react';

import collegeLogoStyle from './collegeLogoStyle.module.css';

const CollegeLogo = () =>{
    return(
        <div className={collegeLogoStyle.container}>
            <div className={collegeLogoStyle.image}></div>
            <div className={collegeLogoStyle.title}>
                RAJIV GANDHI INSTITUTE OF TECHNOLOGY<br/>
                KOTTAYAM
            </div>
        </div>
    )
};

export default CollegeLogo;