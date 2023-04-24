import Styles from './Muralha.module.css'
import logo from '../imagens/viagens.jpg'

function Muralha(){
    return(
        <div> 
            <section id={Styles.muralha}>
                <div id={Styles.quadrado}>
                    <h3>Venha explorar esse lugar incrível Muralhas da China</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia nam, repellendus deserunt quas aspernatur, reiciendis ipsa delectus iure accusamus culpa eius illo? Quas, reiciendis accusantium et incidunt rem odio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quam dolores, nisi harum laboriosam cumque impedit, officiis rem dolore, sunt dolor. Ea eius mollitia doloremque vero quam, deleniti fuga corporis.</p>

                    <img src={logo} alt="logo" />
                </div>
            </section>
        </div>
    )
}

export default Muralha;