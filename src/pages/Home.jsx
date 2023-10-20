import Header from "../components/Header";
import Banner from "./Banner";
import Card from "./Card";
import Company from "./Company";
import Footer from "./Footer";
import Informasion from "./Informasion";


const Home = () => {
    return (
        <div className="background-image">
            <Header></Header>
            <Banner></Banner>
            <Card></Card>
            <Company></Company>
            <Informasion></Informasion>
            <Footer></Footer>
        </div>
    );
};

export default Home;