
import StarRatings from 'react-star-ratings';
import { Link, useLoaderData } from 'react-router-dom';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Header from '../components/Header';



const SameBrandDetails = () => {
    const data = useLoaderData()
    if (data.length > 0) {
        return (
            <div className='background-image'>
                <Header></Header>

                <div>
                    <Zoom scale={0.7} indicators={true}>
                        {data.map((each, index) => (
                            <div key={index} className=' py-8'>
                                <img className='h-[100vh] w-full' style={{ objectFit: "cover", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} alt="Slide Image" src={each.image} />
                            </div>
                        ))}
                    </Zoom>
                </div>


                <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-14'>

                    {
                        data?.map((item) => {
                            return <div key={item._id}>

                                <div>

                                    <div>



                                    </div>

                                </div>


                                <div className="card bg-[#0d3b66] text-[#cae9ff] shadow-xl">
                                    <figure>
                                        <div className='h-[270px]'>
                                            <img className='w-full' src={item.image} alt="" />
                                        </div>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Brand: {item.name}</h2>
                                        <h4><span> Product Type :</span> {item.type}</h4>
                                        <p><span>Price: $</span>{item.price}</p>


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

                                        <p>Description: {item.discription}</p>
                                        <div className="card-actions justify-between pt-3">
                                            <Link to={`/moredetails/${item._id}`}><button className='btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize'>MoreDetails</button></Link>
                                            <Link to={`/updeddetails/${item._id}`}><button className='btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize'>Upded</button></Link>
                                        </div>
                                    </div>
                                </div>





                            </div>
                        })
                    }

                </div>

            </div>
        );
    }
    else {
        return <div><p>No data here</p></div>
    }


};

export default SameBrandDetails;