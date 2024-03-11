import ImageMale from '../assets/images/binar.user.testi.male.png';
import Star from '../assets/star.png';

const Testi = () => {
    return (
        <section className="carousel">
        <div className="section-carousel-title">
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
        </div>

        <div className="section-box padding">
            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={ImageMale} alt="human-pic" />
                        <div className="section-content-text">
                            <div>
                                <img src={Star}/>
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet”</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={ImageMale} alt="human-pic" />
                        <div className="section-content-text">
                            <div>
                                <img src={Star}/>
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet””</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-carousel">
                <div className="section-carousel-box">
                    <div className="section-carousel-component">
                        <img src={ImageMale} alt="human-pic" />
                        <div className="section-content-text">
                            <div>
                                <img src={Star}/>
                            </div>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet”</p>
                            <p className="text-carousel">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="carousel-nav">
            <span className="icon-left"><i className="fa fa-chevron-left"></i></span>
            <span className="icon-right"><i className="fa fa-chevron-right"></i></span>
        </div>
    </section>
    )

}

export default Testi;
