import Pic1 from '../../../assets/Pic1.png'

export const FourCard = () => {
    return (
        <div className='four-card'>
            <h1 style={{ fontSize: 48, fontWeight: 'bold' }}>Latest videos</h1>
            <div className='four-card-content'>
                <div className='four-card-file'>
                    <i className='fa-solid fa-play' style={{ position: 'absolute', color: 'white' }}></i>
                    <img src={Pic1} alt='file' style={{ objectFit: 'cover', maxWidth: 250 }} />
                    <p style={{ marginTop: '5%' }}>
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className='four-card-file'>
                    <i className='fa-solid fa-play' style={{ position: 'absolute', color: 'white' }}></i>
                    <img src={Pic1} alt='file' style={{ objectFit: 'cover', maxWidth: 250 }} />
                    <p style={{ marginTop: '5%' }}>
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className='four-card-file'>
                    <i className='fa-solid fa-play' style={{ position: 'absolute', color: 'white' }}></i>
                    <img src={Pic1} alt='file' style={{ objectFit: 'cover', maxWidth: 250 }} />
                    <p style={{ marginTop: '5%' }}>
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className='four-card-file'>
                    <i className='fa-solid fa-play' style={{ position: 'absolute', color: 'white' }}></i>
                    <img src={Pic1} alt='file' style={{ objectFit: 'cover', maxWidth: 250 }} />
                    <p style={{ marginTop: '5%' }}>
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className='four-card-file'>
                    <i className='fa-solid fa-play' style={{ position: 'absolute', color: 'white' }}></i>
                    <img src={Pic1} alt='file' style={{ objectFit: 'cover', maxWidth: 250 }} />
                    <p style={{ marginTop: '5%' }}>
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className='four-card-file'>
                    <i className='fa-solid fa-play' style={{ position: 'absolute', color: 'white' }}></i>
                    <img src={Pic1} alt='file' style={{ objectFit: 'cover', maxWidth: 250 }} />
                    <p style={{ marginTop: '5%' }}>
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
            </div>
            <button className='btn-four-card'>VIEW ALL</button>
        </div>
    )
}
