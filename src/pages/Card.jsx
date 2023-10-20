import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = () => {

    const [cardImage, setCardImage] = useState([]);

    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setCardImage(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            {
                cardImage.map((card, i) => {
                    return <Link to={`branddetails/${card.brand}`} key={i}>
                        <div className="card bg-base-100 shadow-xl image-full">
                            <figure>
                                <div className="h-[200px]">
                                    <img className="w-full" src={card.image} alt="" />
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.brand}</h2>
                            </div>
                        </div>
                    </Link>
                })
            }

        </div>
    );
};

export default Card;