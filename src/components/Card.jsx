const Card = ({post}) => {
    return (
        <div>
            <p> {post.title} </p>
            <p>By 
                <span> {post.author} </span> On
                <span> {post.category} </span>
            </p>
            <p>Posted On {post.date} </p>
            <p> {post.content} </p>
            <div>
                {
                    post.tags.map((tag, index) => (
                        <span key={index} > #{tag} </span>
                    ))
                }
            </div>
        </div>
    )
}
export default Card;