import React from 'react'


const Home = () => {
    return (
        <div>
            <div className='add-to-cart'>

            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png" alt="" />

            </div>
            <h1>Home Component</h1>
            <div className='card-wrapper'>

                <div className='img-wrapper item'>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_960_720.png" alt="" />
                </div>

                <div className='img-wrapper item'>
                    <span>I-Phone Price:</span>
                    <span> $1000.00</span>
                </div>
                <div className='img-wrapper item'>
                    <button className='btn-wrapper'>Add To Cart</button>
                </div>
            </div>

        </div>

    )
}

export default Home
