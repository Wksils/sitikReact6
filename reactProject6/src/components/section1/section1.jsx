import './section1.scss'
import { Photo } from '../../Photo'

export default function Section1(){
    return(
        <>
            <section className='sect1'>
                <div className='container'>
                    <div className='mainDiv'>
                        <div className='left'>
                            <h1>Sweet moments, freshly baked with love</h1>
                            <p>Customized cakes, treats and every thing sweet for all your special moments.</p>
                            <button>Shop Now</button>
                            <div>
                                <img src={Photo.facebook} alt="" />
                                <img src={Photo.linkedin} alt="" />
                                <img src={Photo.instagram} alt="" />
                            </div>
                        </div>
                        <div className='right'>
                            <img src={Photo.donats} alt="" />
                        </div>
                    </div>
                    <img className='arrow' src={Photo.arrow} alt="" />
                </div>
            </section>
        </>
    )
}