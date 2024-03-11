import React, {useState} from 'react';
import CarBanner from '../assets/images/binar.car.banner.png';
import Button from '../components/Button';
import Toggle from '../assets/menu.png';

const urlLink = [{
    link: "#",
    navName: 'Our Services'
}, {
    link: "#",
    navName: 'Why Us'
}, {
    link: "#",
    navName: 'Testimonials'
}, {
    link: "#",
    navName: 'FAQ'
}];


const Header = () => {

    const [open, setopen] = useState(false); //tutup

    //open false
    const toggle = () => {
        setopen(!open);
    }

    return (
        <header className="padding bg-color">
            <nav>
                <div className="logo">
                </div>
                <ul className="link">
                        <li className="BCR">BCR</li>

                    {urlLink?.map((item, index) => (
                        <li key={index}>{item?.navName}</li>
                    ))}
                </ul>

                <div className='btn-responsive'>

                    <img className="toggle" onClick={toggle} src={Toggle} alt="togglebutton" />

                    {open && <div id="toggle" className="responsive-nav">
                        <ul className="navbar">
                            <li>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span> BCR </span>
                                    <button onClick={toggle} style={{ border: 0, margin: '0px 70px', background: 'white', fontSize: 24 }}><i className='fa fa-times'></i></button>
                                </div>
                            </li>
                            {urlLink?.map((item, index) => (
                                <li key={index}>{item?.navName}</li>
                            ))}
                        </ul>
                    </div>}
                </div>
             
                
                {/* <img className="toggle"  src={Toggle} alt="togglebutton" /> */}

            </nav>

            <div className="hero">
                <div>
                    <h1>Sewa & Rental Mobil Terbaik di Bandung</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil
                        kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <div>
                        <Button type="button" class="btn btn-success">Mulai Sewa Mobil</Button>
                    </div>
                </div>
                <div className="car-grid">
                    <div className="hero-car">
                        <img className="car-banner" src={CarBanner} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header