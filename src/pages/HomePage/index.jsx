import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import HomeHeroHeader from './HomeHeroHeader'
import HomeBrandSection from './HomeBrandSection'
import HomeShopSection from './HomeShopSection'
import LoadingSection from '../../components/LoadingSection'
import RankSection from '../../components/RankSection'
import DisplaySection from '../../components/DisplaySection'
import MaterialSection from '../../components/material/MaterialSection'
import HomeProductSection from './HomeProductSection'

const HomePage = () => {
    const [heroImgLoaded, setHeroImgLoaded] = useState(false)

    return (
        <main>
            {!heroImgLoaded && <LoadingSection />}
            <HomeHeroHeader
                onReadyShow={() => {
                    setHeroImgLoaded(true)
                }}
            />
            <HomeBrandSection />
            <RankSection />
            <DisplaySection
                className="bg-pattern py-16"
                labelText="人氣NＯ.1"
                title="經典豆沙包"
                price={35}
                details="小火慢熬的紅豆，手工揉製的麵團"
            />
            <HomeProductSection />
            <MaterialSection className="pt-25" />
            <HomeShopSection />
        </main>
    )
}

export default HomePage
