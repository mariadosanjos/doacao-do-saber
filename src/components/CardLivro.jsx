function CardLivro(props) {
    return (
        <div className="col">
            <div className="card">
                <img src={props.book.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.book.name}</h5>       
                    <a className="btn btn-primary">Quero este livro</a>        
                </div>
            </div>
        </div>
    );
}

export default CardLivro;