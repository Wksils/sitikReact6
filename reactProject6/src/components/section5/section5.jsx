import './section5.scss'
import { Photo } from '../../Photo'

export default function Section5(){
    return(
        <>
            <section className='sect5'>
                <div className='container'>
                    <h2>OUR CUSTOMERS</h2>
                    <div className='cards'>
                        <div className='card'>
                            <div className='info'>
                                <img src={Photo.ppl1} alt="" />
                                <div>
                                    <h3>Bianka P.</h3>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                        <div className='card'>
                            <div className='info'>
                                <img src={Photo.ppl2} alt="" />
                                <div>
                                    <h3>Jakub S.</h3>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}