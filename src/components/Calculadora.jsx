import cifrao from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"
import "./Calculadora.css"
export function Calculadora(){
    return(
        <main>
            <form action="">
                <div className="bill">
                    <label htmlFor="bill">Conta</label>
                    <div className="input-box">
                        <img src={cifrao} alt="imagem do cifrão" />
                        <input type="number" id="bill" placeholder="0" />
                    </div>
                </div>
                <div className="tip-percentage">
                    <label htmlFor="">Selecione a Porcentagem %</label>
                    <div>
                        <input type="button" value="5%"/>
                        <input type="button" value="10%"/>
                        <input type="button" value="15%"/>
                        <input type="button" value="25%"/>
                        <input type="button" value="50%"/>
                        <input type="number" placeholder="Outra" id="custom" />
                    </div>
                </div>
                <div className="people">
                    <label htmlFor="people-number">Número de Pessoas</label>
                    <div className="input-box">
                        <img src={pessoa} alt="imgagem de pessoas" />
                        <input type="number" id="people-number" placeholder="0" />
                    </div>
                </div>
            </form>
            <section className="results">
                <div className="tip-amount">
                    <p>Gorjeta <br />
                    <span>/ pessoa</span>
                    </p>
                    <p>R$ 0.00</p>
                </div>
                <div className="total">
                    <p>
                        Total <br />
                        <span>/ pessoa</span>
                    </p>
                    <p>R$ 0.00</p>
                </div>
                <button>Limpar</button>
            </section>
        </main>
    )
}