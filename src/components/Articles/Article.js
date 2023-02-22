

const Article = (
    {image, number, title, content}
) => {
    return (
        <div className="article-container">
            <div className="article-image">
                <img src={process.env.PUBLIC_URL + image}></img>
            </div>
            <div className="article-content">
                <div>{number}</div>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>   
        </div> 
    )
    
}

export default Article; 