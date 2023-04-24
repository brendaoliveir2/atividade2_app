import Styles from "./rodape.module.css"
import facebook from "../imagens/face.jpg"
import instagram from "../imagens/insta.jpg"
import tiktok from "../imagens/tiktok.png"
import whatsApp from "../imagens/whtas.png"

function Rodape(){
    return(
        <footer id={Styles.rodapé}>
            <h3>Siga-nos em nossas redes sociais</h3>

            <div>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={tiktok} alt="tiktok" />
                <img src={whatsApp} alt="whatsApp" />
            </div>

            <h3>Telefone de contato: (11)9555-3355</h3>

        </footer>
    )
}

export default Rodape