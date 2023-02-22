import "./styles.scss";
import Article from "./Article";

const articles = [
    { 
        "id": "01",
        "number": "01",
        "image" : "/images/image-retro-pcs.jpg",
        "title": "Reviving Retro PCs", 
        "content": "What happens when old PCs are given modern upgrades?"
    }, 
    {
        "id": "02",
        "number": "02",
        "image" : "/images/image-top-laptops.jpg",
        "title": "Top 10 Laptops of 2022", 
        "content": "Our best picks for various needs and budgets."
    },
    {
        "id": "03",
        "number": "03",
        "image" : "/images/image-gaming-growth.jpg",
        "title": "The Growth of Gaming", 
        "content": "How the pandemic has sparked fresh opportunities."
    }
]

const Articles = () => {
    return <>
        {articles.map((
            {image, title, content, number}, id 
        )=>{
            return(
                <Article 
                    key={id}
                    image={image}
                    title={title}
                    content={content}    
                    number={number}
                />
            )
        })

        }
    </>
}

export default Articles; 