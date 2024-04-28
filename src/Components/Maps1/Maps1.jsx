import "./Maps.scss"
import MapsImg from "../Image1/Maps_img.png"

function Maps1() {
    return (
        <>
            <section className="maps">
                <div className="container">
                    <div className="maps__info">
                        <h3 className="maps__heading">Uncompromising quality</h3>
                        <p className="maps__text">
                            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                        </p>
                    </div>
                    <img className="maps__imgs" src={MapsImg} alt="img" width="445" height="474" />
                </div>
            </section>
        </>
    )
}

export default Maps1;