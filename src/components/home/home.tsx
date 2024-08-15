import Catalog from "../catalog/catalog.tsx";
import Faq from "./FAQ/FAQ.tsx";
import Hero from "./hero/hero.tsx";
import ScrollToAnchor from "../../handles/scrollToAnchor.tsx";


const Home = () => {
    return (
        <section>
            <ScrollToAnchor/>
            <Hero/>
            <Catalog/>
            <Faq/>
        </section>
    );
};

export default Home;
