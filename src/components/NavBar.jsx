import { Link } from "react-router-dom";

const height = {
    height: "70px"
}

const justifyContentStyle = {
    justifyContent: "center"
}

const textDecorationStyle = {
    textDecoration: "none"
}

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-light bg-light" style={height}>
                <div className="container">
                    <Link to="/" style={textDecorationStyle}>
                        <a className="navbar-brand" style={justifyContentStyle}>
                            <img id="book-img" src="/img/book.png" className="d-inline-block align-top" width="35" height="35"
                                alt="" />Doação do Saber
                        </a>
                    </Link>
                    <div>
                        <a className="espacamento">Sobre nós</a>
                            <Link to="/contato" style={textDecorationStyle}>
                                <a className="espacamento">Contato</a>
                            </Link> 
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;