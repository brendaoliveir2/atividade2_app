import Styles from "./home.module.css"
import logo from "../imagens/viagens.jpg"
import lupa from "../imagens/lupa.png"
import mala from "../imagens/mala.jpg" 


function Home(){
    return(
        <div>
        <header id={Styles.header}>
           <div id={Styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            
            <ul id={Styles.links}>
                <li><link to='/'>Home</link></li>
                <li><link to='/GrandCanyon'>Grand Canyon</link></li>
                <li><link to='/Escocia'>Escócia</link></li>
                <li><link to='/Muralha'>Muralhas da China</link></li>
                <li><link to='/Aruba'>Aruba</link></li>
            </ul>

            <div id={Styles.pesquisa}>
                <p></p>
                <img src={lupa} alt="lupa" />
            </div>


        </header>

        <section id={Styles.section_home}>
            <div className={Styles.img_home}>
               <img src={mala} alt="mala" />
            </div>
            <div className={Styles.texto_home}>
                <h1>Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugiat quaerat voluptatibus ex! Mollitia laborum similique non, ipsa neque soluta quasi modi sapiente, officia, voluptatem consectetur eum recusandae velit necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus voluptate neque laudantium doloribus similique enim eum modi reiciendis error officiis laborum, esse asperiores, explicabo, ut molestiae suscipit saepe.</p>
            </div>
        </section>
        </div>
    )
}

export default Home;