import './header.scss'

export const Header = () => {
    return (
        <header>
            <div className='d-flex justify-content-center bg-success text-white gap-2 div-header'>
                <span className='d-flex align-items-center h-100 bg-danger px-3'>Live &nbsp;&nbsp;<i className='fa-solid fa-satellite-dish'></i></span>
                <span className='d-flex align-items-center h-100'> Lorem ipsu dolor sit amet </span>
                <span className='d-flex align-items-center h-100 custom-hover px-2'> Join Now &nbsp;&nbsp;<i className='fa-solid fa-circle-play'></i></span>
            </div>
        </header>
    )
}
