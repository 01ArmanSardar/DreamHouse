import Marquee from "react-fast-marquee";
import Pic1 from "../../../public/pexels-alexander-isreb-880417-1797393.jpg"
import Pic2 from "../../../public/pexels-asphotograpy-101808.jpg"
import Pic3 from "../../../public/pexels-binyaminmellish-106399.jpg"
import Pic4 from "../../../public/pexels-binyaminmellish-1396122.jpg"
import Pic5 from "../../../public/pexels-christa-grover-977018-2121121.jpg"
import Pic6 from "../../../public/pexels-lina-3639540.jpg"
import './Home.css'
import { useEffect, useState } from "react";
import Pricing from "./Pricing";
// import { FaSortAmountDownAlt } from "react-icons/fa";
import SingleHouse from "./SingleHouse";
import 'animate.css';

const Home = () => {
    const [Houses, SetHouses] = useState([])
    useEffect(() => {

        fetch('https://dreamhouseserverside-3.onrender.com/houses/')
            .then(res => res.json())
            .then(data => SetHouses(data))
    }, [])

    return (

        <>
            <section className="Slider lg:p-24">
                <Marquee className=" lg:rounded-3xl " speed={150} pauseOnHover="true">
                    <img className="mx-2" src={Pic1} alt="RealStateImage" />
                    <img className="mx-2" src={Pic2} alt="RealStateImage" />
                    <img className="mx-2" src={Pic3} alt="RealStateImage" />
                    <img className="mx-2" src={Pic4} alt="RealStateImage" />
                    <img className="mx-2" src={Pic5} alt="RealStateImage" />
                    <img className="mx-2" src={Pic6} alt="RealStateImage" />

                </Marquee>
            </section>
            <section className="Estates">

                <div className="p-5">
                    <h1 className="p-8 text-center text-lime-500 text-5xl font-bold font-mono animate__animated animate__jello animate__slower  animate__infinite">Dream In Below </h1>



                    <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2">
                        {
                            Houses.map(house => <SingleHouse key={house.id} house={house}></SingleHouse>)
                        }
                    </div>

                </div>
            </section>
            {/* <section className="PriceSection " >
                <h1>Our PRice</h1>
                <div className="grid grid-cols-2  justify-items-center">
                    <div className="grid-cols-1"><div className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div> </div>
                    <div className="grid-cols-1"> <div className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div></div>
                    <div className="grid-cols-1"><div className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div></div>

                </div>
            </section> */}
            <section>
                {<Pricing></Pricing>}
            </section>
        </>

    );
};

export default Home;