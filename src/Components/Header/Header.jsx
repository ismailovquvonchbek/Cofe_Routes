import "./Header.scss"
import HdrLogo from "../Image2/CofeLogo.svg"
import Langs from "../Localization/Lokalization"
import { NavLink } from "react-router-dom"


function Header({lang, setLangs}) {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a className="header__link" href="#link">
                        <img src={HdrLogo} alt="HeaderLogo"/>
                    </a>

                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink  className="nav__link" to="home">
                                    {Langs[lang].hdr.nav.link1}
                                </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink className="nav__link" to="about">
                                {Langs[lang].hdr.nav.link2}
                                </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink className="nav__link" to="create">
                                {Langs[lang].hdr.nav.link3}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <select className="header__select" value={lang} onChange={(evt) => setLangs(evt.target.value)}>
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="ar">AR</option>
                        <option value="kh">KH</option>
                    </select>
                </div>
            </header>
        </>
    )
}

export default Header