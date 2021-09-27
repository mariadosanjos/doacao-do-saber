import { useState } from "react";

function Formulario() {

    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e) => {
        let regexTelefone = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
        e.preventDefault()
        if (!regexTelefone.test(telefone)) {
            alert("Insira um número de telefone válido!")
        }

    }

    return (
        <div id="grad2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-xs-12">
                        <h1 id="contatotitulo" style={{ fontWeight: 700 }}> Fale com a gente!</h1>
                        <p className="mensagem-contato">
                            O Doação do Saber ficará feliz em receber sua mensagem! Seja alguma dúvida, sugestão ou para relatar um problema,
                            sinta-se livre para nos contatar. Estaremos à sua disposição para lhe ajudar.
                            <br />
                            <br />
                            Para facilitar a comunicação, por favor, preencha o formulário de contato abaixo:
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label"><b>E-mail</b></label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="amolivros@email.com..."
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label"><b>Telefone</b></label>
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="(00)00000-0000"
                                        onChange={e => setTelefone(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"><b>Escreva aqui sua mensagem</b></label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    onChange={e => setMensagem(e.target.value)}
                                    required
                                >
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-light">Enviar</button>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="tab">
                        <h6>Diga nos o assunto que quer falar</h6>
                        <h3>Obrigado pelo seu feedback!</h3>
                        <span>Agradecemos sua valiosa informação! Ela vai nos ajudar a melhorar nosso serviço. Tentaremos entrar em contato o mais rápido possível!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formulario;