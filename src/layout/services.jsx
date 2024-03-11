import ic_checklist from '../assets/icon/ic_checklist.svg';
import userService from '../assets/images/binar.user.service.png';



const listItem = [{
    icon: ic_checklist,
    text: 'Sewa Mobil Dengan Supir di Bandung 12 Jam'
}, {
    icon: ic_checklist,
    text: 'Sewa Mobil Lepas Kunci di Bandung 24 Jam'
}, {
    icon: ic_checklist,
    text: 'Sewa Mobil Jangka Panjang Bulanan'
}, {
    icon: ic_checklist,
    text: 'Gratis Antar - Jemput Mobil di Bandara'
}, {
    icon: ic_checklist,
    text: 'Layanan Airport Transfer / Drop In Out'
}];

const Services = () => {

    window.addEventListener('click', (event) => {
        console.log(event);
    });

    return (
        <section className="px-5">
            <div className="section-services">
                <div>
                    <img className="section-service-banner" src={userService} />
                </div>
                <div>
                    <h2>Best Car Rental for any kind of trip in Bandung!</h2>
                    <p>Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik</p>
                    <ul >
                        {
                            listItem?.map((item, index) => (
                                <li key={index} >
                                    <i><img src={item?.icon} /></i>
                                    <span className="section-list-title">{item?.text}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Services