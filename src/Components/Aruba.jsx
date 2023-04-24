import Styles from './Aruba.module.css'
import logo from '../imagens/viagens.jpg'

function Aruba(){
    return(
        <div>
            <section id={Styles.aruba}>
                <div id={Styles.quadrado}>
                    <h3>Venha explorar esse lugar incrível Aruba</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia nam, repellendus deserunt quas aspernatur, reiciendis ipsa delectus iure accusamus culpa eius illo? Quas, reiciendis accusantium et incidunt rem odio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quam dolores, nisi harum laboriosam cumque impedit, officiis rem dolore, sunt dolor. Ea eius mollitia doloremque vero quam, deleniti fuga corporis.</p>

                    <img src={logo} alt="logo" />
                </div>
            </section>
        </div>
    )
}

export default Aruba;