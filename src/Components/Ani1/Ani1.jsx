import "./Ani.scss"   
import AniImg from "../Image1/Ani_Img.svg"

function Ani() {
    return (
        <>
            <section className="ani">
                <div className="container">
                    <h3 className="ani__heading">Our headquarters</h3>

                    <ul className="ani__list">
                        <li className="ani__item">
                            <img className="ani__img" src={AniImg} alt="img" />
                            <h4 className="ani__item__heading">United Kingdom</h4>
                            <p className="ani__p">68  Asfordby Rd</p>
                            <p className="ani__p">Alcaston</p>
                            <p className="ani__p">SY6 1YA</p>
                            <a className="ani__link ani__p" href="tel:+44 1241 918425">+44 1241 918425</a>
                        </li>

                        <li className="ani__item">
                            <img className="ani__img" src={AniImg} alt="img" />
                            <h4 className="ani__item__heading">Canada</h4>
                            <p className="ani__p">68  Asfordby Rd</p>
                            <p className="ani__p">Alcaston</p>
                            <p className="ani__p">SY6 1YA</p>
                            <a className="ani__link ani__p" href="tel:+44 1241 918425">+44 1241 918425</a>
                        </li>

                        <li className="ani__item">
                            <img className="ani__img" src={AniImg} alt="img" />
                            <h4 className="ani__item__heading">Australia</h4>
                            <p className="ani__p">68  Asfordby Rd</p>
                            <p className="ani__p">Alcaston</p>
                            <p className="ani__p">SY6 1YA</p>
                            <a className="ani__link ani__p" href="tel:+44 1241 918425">+44 1241 918425</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Ani;