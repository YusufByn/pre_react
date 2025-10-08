import Title from './Title.jsx'
import Text from './Text.jsx'

function Article(props) {

    return (
    <>
        <article>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </article>
    </>
    )
}

export default Article