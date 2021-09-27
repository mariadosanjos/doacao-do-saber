import { Link } from "react-router-dom";

function Main() {
    return (
    <main>
        <div id="grad1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="ilustacao">
                            <img id="student-book" className="responsive" src="/img/student-book.png" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="descricao">
                            <h1>Doação do Saber</h1>
                            <p id="mensagem-francis-bacon">Os livros têm grande importância em nossas vidas não só porque auxiliam na construção de nosso conhecimento, mas também porque nos trazem palavras de encanto, doçura e suavidade. -Francis Bacon</p>
                            <div class="botao">
                                <a> 
                                    <Link to="/catalogo-livros">
                                        <button type="button" className="btn btn-primary btn-lg">Escolha seu livro</button>
                                    </Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Main;