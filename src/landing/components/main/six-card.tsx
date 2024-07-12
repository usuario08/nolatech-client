import Pic6 from '../../../assets/Pic6.png'

export const SixCard = () => {
    return (
        <div className='six-card'>
            <img src={Pic6} alt='backgroun' style={{ position: 'absolute', width: '100%', objectFit: 'fill', zIndex: -1, maxHeight: '600px' }} />
            <div style={{ width: '40%', marginLeft: '5%', marginTop: '10%' }}>
                <h1 style={{ fontSize: '56px' }}>Lorem ipsum</h1>
                <p style={{ }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua.
                </p>
                <button className='btn-standar' style={{ marginTop: '10%' }}>VIEW ALL</button>
            </div>

        </div>
    )
}
