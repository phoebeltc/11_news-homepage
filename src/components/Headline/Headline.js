import './styles.scss';

const Headline = () => {
    return <>
    <picture>
        <source media="(max-width: 480px)" srcSet={`${process.env.PUBLIC_URL + '/images/image-web-3-mobile.jpg'} 480w`} />
        <source srcSet={`${process.env.PUBLIC_URL + '/images/image-web-3-desktop.jpg'} 1280w`}  />
        <img src={process.env.PUBLIC_URL + '/images/image-web-3-desktop.jpg'} alt="Web3" className='headline-img'></img>   
    </picture>

    <div>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
    But is it really fulfilling its promise?</p>
            <button className='button'>Read more</button>
        </div>
    </div>

    </>
}

export default Headline; 