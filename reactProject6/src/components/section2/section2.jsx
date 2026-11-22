import './section2.scss'
import { Photo } from '../../Photo'

export default function Section2(){
    return(
        <>
            <section className='sect2'>
                <div className='container'>
                    <div className='left'>
                        <p>See Collection</p>
                        <h2>OUR FINE HOME MADE CHOCOLATES</h2>
                    </div>
                    <div className='right'>
                        <img src={Photo.cakes} alt="" />
                        <div>
                            <p>There are some redeming factors in greeking text</p>
                            <p>There are some redeming factors in greeking text</p>
                            <p>There are some redeming factors in greeking text</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}