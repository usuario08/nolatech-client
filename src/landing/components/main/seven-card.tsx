import Pic7 from '../../../assets/Pic7.png'
import Pic8 from '../../../assets/Pic8.png'
import Pic9 from '../../../assets/Pic9.png'

export const SevenCard = () => {
    return (
        <div className='seven-card'>
            <h1 style={{ fontSize: 56, color: 'white' }}>Lorem ipsum</h1>
            <div style={{ display: 'flex', gap: '5%' }}>
                <img src={Pic7} alt='pci' style={{ objectFit: 'fill', width: 300, height: 400 }} />
                <img src={Pic8} alt='pci' style={{ objectFit: 'fill', width: 300, height: 400 }} />
                <img src={Pic9} alt='pci' style={{ objectFit: 'fill', width: 300, height: 400 }} />
            </div>
            <div style={{ display: 'flex', marginTop: '2%', width: '100%', justifyContent: 'center', gap: '2%' }}>
                <i className='text-white fa-solid fa-circle' ></i>
                <i className='text-white fa-regular fa-circle' ></i>
                <i className='text-white fa-regular fa-circle' ></i>
            </div>
            <button className='btn-standar' style={{ color: 'black', backgroundColor: 'white', marginTop: '5%' }}>VIEW ALL</button>
        </div>
    )
}
