
import Pic2 from '../../../assets/Pic2.png'
import Pic3 from '../../../assets/Pic3.png'
import Pic4 from '../../../assets/Pic4.png'

export const SecondCard = () => {
    return (
        <div className='second-card'>
            <h1 style={{ fontSize: 56 }}>Lorem ipsum</h1>
            <p style={{ width: '50%', textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p>
            <div className='second-card-content'>
                <div className='item-card'>
                    <img src={Pic2} alt='pic2' className='card-image' />
                    <button className='btn-card'>LOREM IPSUM</button>
                </div>
                <div className='item-card'>
                    <img src={Pic3} alt='pic2' className='card-image' />
                    <button className='btn-card'>LOREM IPSUM</button>
                </div>
                <div className='item-card'>
                    <img src={Pic4} alt='pic2' className='card-image' />
                    <button className='btn-card'>LOREM IPSUM</button>
                </div>
            </div>
            <button className='btn-second-card'>LEARN MORE</button>
        </div>
    )
}
