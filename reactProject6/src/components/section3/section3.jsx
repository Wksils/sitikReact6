import './section3.scss'
import { Photo } from '../../Photo'

export default function Section3(){
    return(
        <>
            <section className='sect3'>
                <div className='container '>
                    <h2>OUR BEST SELLERS</h2>
                    <a href="">See All</a>
                    <div className='cards'>
                        <div className='card'>
                            <img src={Photo.card1} alt="" />
                            <p className='title'>3-tier red velvet cake</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div>
                                <p>45.90 €</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Photo.card2} alt="" />
                            <p className='title'>3-tier red velvet cake</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div>
                                <p>45.90 €</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Photo.card3} alt="" />
                            <p className='title'>3-tier red velvet cake</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div>
                                <p>45.90 €</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}