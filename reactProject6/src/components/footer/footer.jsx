import { Photo } from '../../Photo'
import './footer.scss'

export default function Footer(){
    return(
        <>
            <footer>
                <div className='container'>
                    <div className='left'>
                        <img src={Photo.bakery} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div>
                            <img src={Photo.facebook} alt="" />
                            <img src={Photo.linkedin} alt="" />
                            <img src={Photo.instagram} alt="" />
                        </div>
                    </div>
                    <div className='right'>
                        <ul>
                            <li>OUR STORES</li>
                            <li>SLOVAKIA</li>
                            <li>CZECH REPUBLIC</li>
                            <li>FINLAND</li>
                            <li>POLAND</li>
                        </ul>
                        <ul>
                            <li>USEFUL LINKS</li>
                            <li>HOME</li>
                            <li>PRIVACY POLICY</li>
                            <li>TERMS CONDITIONS</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}