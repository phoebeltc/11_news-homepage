import './styles.scss'
import New from './New'

const news = [
    { 
        "title": "Hydrogen VS Electric Cars", 
        "content": "Will hydrogen-fueled cars ever catch up to EVs?"
    }, 
    {
        "title": "The Downsides of AI Artistry", 
        "content": "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        "title": "Is VC Funding Drying Up?", 
        "content": "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
]

const News = () => {
    return<>
    <div className='news-container'>
        <h2>New</h2>
        {news.map((
            {title, content}, index
        )=> {
            return (
                <New 
                    title={title}
                    content={content}
                />
            )
        })
        }    
    </div>
    </>          
}

export default News; 