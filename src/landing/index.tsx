import { Header } from './components/header'
import { Main } from './components/main'
import { Nav } from './components/nav'

export const ManagerLanding = () => {
    return (
        <div className='position-relative'>
            <Header />
            <Nav />
            <Main />
        </div>
    )
}
