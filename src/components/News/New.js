import './styles.scss'



const New = ({
    title, content
}) => {
    return<>
    <div className='new-box'>
        <h3>{title}</h3>
        <p className='new-content'>{content}</p>
    </div>
    </>          
}

export default New; 