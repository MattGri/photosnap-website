import React from 'react';
import '../styles/pricing.scss';

const Pricing = () => {
    return (
        <>
            <header className='wrapper'>
                <div className='pricing'>
                    <span className='line'></span>
                    <div className='container'>
                        <h1 className='title'>Pricing</h1>
                        <p className='text'>
                            Create your stories, Photosnap is a platform for
                            <br />
                            photographers and visual storytellers. It's the simple
                            <br />
                            way to create and share your photos.
                        </p>
                    </div>
                </div>
                <div className='priceImageContainer'>
                    <img className='priceImage' src='./images/price.jpg' alt='price' />
                </div>
            </header>
        </>
    )
}

export default Pricing