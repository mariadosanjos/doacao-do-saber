const backgroundColor = {
    backgroundColor: "rgba(0, 0, 0, 0.2)"
}

function Footer() {
    return (
    <footer className="bg-dark text-center text-white">
        {/*Grid container*/}
        <div className="container p-4 pb-0">
            <div className="text-center p-3 siga-nos">
                Siga-nos nas redes sociais
            </div>
            {/*Section: Social media*/}
            <section className="mb-4">
                {/*Facebook*/}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><i
                        className="fab fa-facebook-f"></i></a>

                {/*Twitter*/}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><i
                        className="fab fa-twitter"></i></a>

                {/*Google*/}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><i
                        className="fab fa-google"></i></a>

                {/*Instagram*/}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><i
                        className="fab fa-instagram"></i></a>
            </section>
            {/*Section: Social media*/}
        </div>
        {/*Grid container*/}

        {/*Copyright*/}
        <div className="text-center p-3" style={backgroundColor}>
            © 2021 | EU <i className="fa fa-heart" aria-hidden="true"></i> LIVROS
        </div>
        {/*Copyright*/}
    </footer>
    );
}

export default Footer;