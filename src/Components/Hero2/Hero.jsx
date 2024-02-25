import "./Hero.scss"


function Hero() {
    return (
        <>
            <main className="main">
                <section className="hero">
                    <div className="container">
                        <div className="hero__item">
                            <h1 className="hero__heading">
                                Great coffee
                                made simple.
                            </h1>
                            <p className="hero__text">
                                Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                            </p>
                            <button className="hero__btn" type="button">Create your plan</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hero;