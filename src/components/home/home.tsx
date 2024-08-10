import Catalog from "../catalog/catalog.tsx";
import Faq from "./FAQ/FAQ.tsx";
import {Hero} from "./hero/hero.tsx";
import ScrollToAnchor from "../../handles/scrollToAnchor.tsx";


const Home = () => {
    return (
        <div style={{height: '100%'}}>
            <ScrollToAnchor />
            <Hero/>
            <Catalog/>
            <Faq/>
        </div>
    );
};

export default Home;
