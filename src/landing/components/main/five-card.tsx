import JoinUs from '../../../assets/Join Us.png'

export const FiveCard = () => {
    return (
        <div className='five-card'>
            <img src={JoinUs} alt='backgroun'
                style={{ position: 'absolute', width: '100%', objectFit: 'fill', zIndex: -1, maxHeight: ' 800px' }} />
            <div className='form-five-card'>
                <h1 style={{ fontSize: 56, fontWeight: 'bold', color: 'white', margin: '2%' }}>JOIN US</h1>
                <h1 style={{ fontSize: 16, fontWeight: 'bold', color: 'white', margin: '2%' }}>Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr,</h1>
                <div style={{ display: 'flex' }}>
                    <input type='text' className='input-form-basic' placeholder='Name'
                        style={{ marginRight: 0, width: '100%' }} />
                    <input type='text' className='input-form-basic' placeholder='Username' style={{ width: '100%' }} />
                </div>
                <div style={{ display: 'flex' }}>
                    <input type='text' className='input-form-basic' placeholder='Phone'
                        style={{ marginRight: 0, width: '100%' }} />
                    <input type='text' className='input-form-basic' placeholder='Email' style={{ width: '100%' }} />
                </div>
                <input type='text' className='input-form-basic' placeholder='Departamen' />
                <textarea className='input-form-basic' placeholder='Mensajse'
                    style={{ height: 120, paddingTop: '16px' }}></textarea>
                <button className='btn-standar' style={{ maxWidth: 'fit-content', margin: '2%' }}>I’M IN</button>
                <p
                    style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginTop: '2%', marginLeft: '2%', textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                </p>
            </div>
        </div>
    )
}
