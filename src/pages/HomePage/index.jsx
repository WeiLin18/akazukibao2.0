import React from "react";
// import { Link } from "react-router-dom";
import HomeHeroHeader from "./HomeHeroHeader";
import HomeBrandSection from "./HomeBrandSection";
import HomeShopSection from "./HomeShopSection";
import RankSection from "../../components/RankSection";
import DisplaySection from "../../components/DisplaySection";
import InstagramFooter from "../../components/layout/InstagramFooter";
import MaterialSection from "../../components/material/MaterialSection";


const HomePage = () => {

    return (
        <>
            <HomeHeroHeader />
            <HomeBrandSection />
            {/* <RankSection /> */}
            <DisplaySection
                bgStyle="bg-pattern"
                labelText="人氣NＯ.1"
                title="經典豆沙包"
                price={35}
                details="小火慢熬的紅豆，手工揉製的麵團"
            />
            <MaterialSection />
            <HomeShopSection />
            <InstagramFooter />
        </>
    );
};

export default HomePage;
