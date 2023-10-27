import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import swal from 'sweetalert';

const MoreDetails = () => {
    const data = useLoaderData()
    const navigate = useNavigate()

    const handelAddCard = (data) => {

        fetch('https://food-and-beverage-server-m8xlps9v5-sarkar-sajals-projects.vercel.app/addcard', {
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                image: data.image,
                select: data.select,
                type: data.type,
                price: data.price,
                discription: data.discription,
                rating: data.rating
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.acknowledged) {
                    swal("Good job!", ` sucessfully add your card`, "success");
                    navigate('/')
                }
            });
    }
    return (
        <div>
            <h1>{data.select}</h1>


            <div className='background-image  flex justify-center items-center h-[100vh]'> 


                <div class="relative flex w-full max-w-[48rem] rounded-xl bg-[#0d3b66] bg-clip-border text-gray-700 shadow-md flex-col md:flex-col lg:flex-row">
                    <div class="relative w-full h-[400px] lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                        <img
                            src={data.image}
                            alt="image"
                            class="object-cover w-full h-full"
                        />
                    </div>
                    <div class="p-6 text-[#cae9ff]">
                        <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#cae9ff] capitalize">
                            <span>Brand : {data.name}</span>
                        </h6>
                        <h4><span className='text-base font-semibold'>Product Type : </span> {data.type}</h4>
                        <p className='py-2'><span className='text-base font-semibold'>Price : $</span>{data.price}</p>
                        
                        <div className="flex justify-start items-center gap-5 pb-2">
                                            <div>
                                                <StarRatings
                                                    rating={parseInt(data.rating)}
                                                    starDimension="20px"
                                                    starSpacing="5px"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="text-[#cae9ff] text-base">{data.rating}</h5>
                                            </div>
                                        </div>

                        <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-[#cae9ff]">
                            <span className='text-base font-semibold'>Description :</span> {data.discription}
                        </p>

                        <button className='btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize' onClick={() => handelAddCard(data)}>Add To Card</button>
                       
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default MoreDetails;