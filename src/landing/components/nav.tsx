import PrbHeader from '../../assets/Prb Header.png'
import Icongrab from '../../assets/icongrab.png'
import './nav.scss'

export const Nav = () => {
    return (
        <nav>
            <img src={PrbHeader} alt='prb_header' className='w-100 object-fit-cover position-absolute nav-bg' />
            <div>
                <div className='d-flex justify-content-evenly'>
                    <img src={Icongrab} alt='grab' className='object-fit-contain icon-headern-nav' />
                    <div className='d-flex flex-column gap-5'>
                        <div className='d-flex justify-content-around align-items-center route-nav'>
                            <a href='' className='text-white route text-decoration-none'>LOREM IPSUM</a>
                            <a href='' className='text-white route text-decoration-none'>LOREM IPSUM</a>
                            <a href='' className='text-white route text-decoration-none'>LOREM IPSUM</a>
                            <a href='' className='text-white route text-decoration-none'>LOREM IPSUM</a>
                            <a href='' className='text-white route text-decoration-none'>LOREM IPSUM</a>
                            <a href='' className='text-white route text-decoration-none'>LOREM IPSUM</a>
                        </div>
                        <div className='d-flex flex-column gap-4 body-nav'>
                            <h1 className='text-white body-nav-title'>LOREM IPSUM</h1>
                            <h1 className='text-black bg-white body-nav-title-2'>LOREM IPSUM DOLOR &nbsp;</h1>
                            <h1 className='text-white body-nav-title'>LOREM IPSUM</h1>
                            <button className='text-white body-nav-button'>WHAT IS NEXT</button>
                        </div>
                    </div>
                </div>
                <div className='d-flex bg-success footer-nav'>
                    <div className='d-flex justify-content-center align-items-center text-white footer-conten-text-nav'>
                        <p className='m-0'>Lorem ipsum dolor sit amet, consetetur</p>
                    </div>
                    <div className='footer-conten-time-nav'>
                        <div className='block-time'>
                            <span>170</span>
                            <span className='block-span'>days</span>
                        </div>
                        <div className='divider' ></div>
                        <div className='block-time'>
                            <span>13</span>
                            <span className='block-span'>Hour</span>
                        </div>
                        <div className='divider' ></div>
                        <div className='block-time'>
                            <span>39</span>
                            <span className='block-span'>Minutes</span>
                        </div>
                        <div className='divider' ></div>
                        <div className='block-time'>
                            <span>29</span>
                            <span className='block-span'>Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
