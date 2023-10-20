import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";


const MyCart = () => {

    const [card, setCard] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/allcard')
            .then(response => response.json())
            .then(json => {
                setCard(json)
            })
    }, [])


    const handelDelet = (id) => {
        fetch(`http://localhost:5000/deletcard/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                const newArray = card.filter(item => item._id !== id)
                setCard(newArray)
            });
    }



    return (
        <div className="background-image flex justify-center items-center">
            {
                card.length > 0 ? <div>
                    {
                        card?.map((item) => {
                            return <div className="pb-20">


                                <div class="relative flex w-full max-w-[48rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md flex-col md:flex-col lg:flex-row">
                                    <div class="relative w-full h-[400px] lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                                        <img
                                            src={item.image}
                                            alt="image"
                                            class="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div class="p-6">
                                        <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                                            <span>Brand: {item.name}</span>
                                        </h6>
                                        <h4><span>Product Type :</span> {item.type}</h4>
                                        <p><span>Price : $</span>{item.price}</p>

                                        <div className="flex justify-start items-center gap-5">
                                            <div>
                                                <StarRatings
                                                    rating={parseInt(item.rating)}
                                                    starDimension="20px"
                                                    starSpacing="5px"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="text-[#cae9ff] text-base">{item.rating}</h5>
                                            </div>
                                        </div>

                                        <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                            <span>Description:</span> {item.discription}
                                        </p>

                                        <div>
                                            <button className='btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize' onClick={() => handelDelet(item._id)}>Delete</button>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        })
                    }
                </div> : <div><p>No data acced card</p></div>
            }
        </div>
    );
};

export default MyCart;