import { useEffect, useState } from "react";
import loadBooks from "../service";
import CardLivro from "./CardLivro";


function BodyCatalogoLivros() {

  const [books, setBooks] = useState()

  useEffect(() => {
    function carregaLivros() {
      loadBooks().then((items) => {
        setBooks(items)
      })
    }
    carregaLivros()
  }, [])

  return (
    <body>
      <div id="grad1">
        <div className="container">
          <section className="catalogo-livros row">
            {books && books.map((book) => (<CardLivro book={book} key={book.id} />))}
          </section>
        </div>
      </div>
    </body>
  );
}

export default BodyCatalogoLivros;