import React from 'react';
import '../styles/beta.scss';
import { styled } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Beta = () => {

    const CustomizedRightArrow = styled(ArrowRightAltIcon)`
        color: #fff;
        margin-Left: 10px;
    `;



    return (
        <>
            <section className='backgroundBeta'>
                {/* <span className='lineFeatures linePricing'></span> */}
                <div className='wrapper'>
                    <div>
                        <p className='text'>

                            We' re in beta.
                            <br />
                            Get your invite
                            <br />
                            today!
                        </p>
                    </div>
                    <div className='rightBox'>
                        <button className='inviteButton'>Get an invite</button>
                        <CustomizedRightArrow />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Beta