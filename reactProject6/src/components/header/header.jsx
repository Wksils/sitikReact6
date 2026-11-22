import './header.scss'
import { Photo } from '../../Photo'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src={Photo.bakery} alt="" />
                    <div className='navigation'>
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">Services</a>
                        <a href="">Blog</a>
                    </div>
                    <div className='login'>
                        <a href="">Login/Register</a>
                        <div>
                            <img src={Photo.heart} alt="" />
                            <img src={Photo.cart} alt="" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}