import Pic5 from '../../../assets/Pic5.png'

export const ThreeCard = () => {
    return (
        <div className='three-card'>
            <div className='three-card-content'>
                <p className='text-card-three'>
                    Lorem ipsum
                    dolor sit
                    amet,
                    consetetur
                </p>
                <button className='btn-three-card'>LOREM IPSUM DOLOR SIT</button>
                <button className='btn-three-card2'>LOREM IPSUM DOLOR SIT AMET</button>
            </div>
            <img src={Pic5} alt='pic5' className='three-card-image' />
        </div>
    )
}
