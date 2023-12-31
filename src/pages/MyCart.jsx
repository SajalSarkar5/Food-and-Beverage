import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import Header from "../components/Header";


const MyCart = () => {

    const [card, setCard] = useState([])


    useEffect(() => {
        fetch('https://food-and-beverage-server-m8xlps9v5-sarkar-sajals-projects.vercel.app/allcard')
            .then(response => response.json())
            .then(json => {
                setCard(json)
            })
    }, [])


    const handelDelet = (id) => {
        fetch(`https://food-and-beverage-server-m8xlps9v5-sarkar-sajals-projects.vercel.app/deletcard/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                const newArray = card.filter(item => item._id !== id)
                setCard(newArray)
            });
    }



    return (
        <div className="background-image">
            <Header></Header>
            <div className=" flex justify-center items-center">

                {
                    card.length > 0 ? <div>
                        {
                            card?.map((item) => {
                                return <div className="pb-20">


                                    <div class="relative flex w-full max-w-[48rem] rounded-xl bg-[#0d3b66] bg-clip-border text-gray-700 shadow-md flex-col md:flex-col lg:flex-row">
                                        <div class="relative w-full h-[400px] lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                                            <img
                                                src={item.image}
                                                alt="image"
                                                class="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div class="p-6 text-[#cae9ff]">
                                            <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal  capitalize">
                                                <span className='text-base font-semibold'>Brand : {item.name}</span>
                                            </h6>
                                            <h4 className="py-2"><span className='text-base font-semibold'>Product Type :</span> {item.type}</h4>
                                            <p><span className='text-base font-semibold'>Price : $</span>{item.price}</p>

                                            <div className="flex justify-start items-center gap-5 py-2">
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

                                            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed ">
                                                <span className='text-base font-semibold'>Description :</span> {item.discription}
                                            </p>

                                            <div>
                                                <button className='btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize' onClick={() => handelDelet(item._id)}>Delete</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>



                            })
                        }
                    </div> : <div className="my-20"><p className="text-white text-3xl text-center font-semibold">No data acced card</p></div>
                }
            </div>
        </div>
    );
};

export default MyCart;