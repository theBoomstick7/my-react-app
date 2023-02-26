const Movie = (props) => {
    return (
    <article>
       <h2>Title: {props.title}</h2> 
       <p>year: {props.year}</p> 
    </article>
    )
};
export default Movie;