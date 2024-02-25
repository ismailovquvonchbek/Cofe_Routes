import "./Ani.scss"

function Ani() {
    return (
        <>
            <section className="ani">
                <div className="container">
                    <h3 className="ani__heading">How it works</h3>

                    <div className="ani__circles">
                        <span className="ani__cirl"></span>
                        <span className="ani__cirl cor1"></span>
                        <span className="ani__cirl cor2"></span>
                    </div>

                    <ul className="ani__list">
                        <li className="ani__item">
                            <h4 className="ani__hoding">01</h4>
                            <h5 className="ani__bool">Pick your
                                coffee</h5>
                            <p className="ani__text">
                                Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
                            </p>
                        </li>

                        <li className="ani__item">
                            <h4 className="ani__hoding">02</h4>
                            <h5 className="ani__bool">Choose the frequency</h5>
                            <p className="ani__text">
                            Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
                            </p>
                        </li>

                        <li className="ani__item">
                            <h4 className="ani__hoding">03</h4>
                            <h5 className="ani__bool">Receive and enjoy!</h5>
                            <p className="ani__text">
                            We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
                            </p>
                        </li>
                    </ul>

                    <button className="hero__btn" type="button">Create your plan</button>
                </div>
            </section>
        </>
    )
}

export default Ani;