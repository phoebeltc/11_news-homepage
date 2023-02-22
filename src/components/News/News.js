import './styles.scss'
import New from './New'

const news = [
    { 
        "id": "1",
        "title": "Hydrogen VS Electric Cars", 
        "content": "Will hydrogen-fueled cars ever catch up to EVs?"
    }, 
    {
        "id": "2",
        "title": "The Downsides of AI Artistry", 
        "content": "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        "id": "3",
        "title": "Is VC Funding Drying Up?", 
        "content": "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
]

const News = () => {
    return<>
    <div className='news-container'>
        <h2>New</h2>
        {news.map((
            {title, content}, id
        )=> {
            return (
                <New 
                    title={title}
                    content={content}
                    key={id}
                />
            )
        })
        }    
    </div>
    </>          
}

export default News; 