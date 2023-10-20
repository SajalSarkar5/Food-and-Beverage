import Header from "../components/Header";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className="background-image">
            <Header></Header>
            <Banner></Banner>
            <Card></Card>
            <Footer></Footer>
        </div>
    );
};

export default Home;