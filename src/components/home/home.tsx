// import {Hero} from "./hero/hero.tsx";
import Catalog from "../catalog/catalog.tsx";
import Faq from "./FAQ/FAQ.tsx";
import {Hero} from "./hero/hero.tsx";


const Home = () => {
    return (
        <div style={{height: '100%'}}>
            <Hero/>
            <Catalog/>
            <Faq/>
        </div>
    );
};

export default Home;
