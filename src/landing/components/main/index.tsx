import { FirstCard } from './first-card'
import { FiveCard } from './five-card'
import { FourCard } from './four-card'
import './index.scss'
import { SecondCard } from './second-card'
import { SevenCard } from './seven-card'
import { SixCard } from './six-card'
import { ThreeCard } from './three-card'

export const Main = () => {
    return (
        <main>
            <FirstCard />
            <SecondCard />
            <ThreeCard />
            <FourCard />
            <FiveCard />
            <SixCard />
            <SevenCard />
        </main>
    )
}
