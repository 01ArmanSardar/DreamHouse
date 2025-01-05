import Marquee from "react-fast-marquee";
import Pic1 from "../../../public/pexels-alexander-isreb-880417-1797393.jpg"
import Pic2 from "../../../public/pexels-asphotograpy-101808.jpg"
import Pic3 from "../../../public/pexels-binyaminmellish-106399.jpg"
import Pic4 from "../../../public/pexels-binyaminmellish-1396122.jpg"
import Pic5 from "../../../public/pexels-christa-grover-977018-2121121.jpg"
import Pic6 from "../../../public/pexels-lina-3639540.jpg"
import { GiHouseKeys } from "react-icons/gi";
import { LiaUsersSolid } from "react-icons/lia";
import { FaSearchDollar } from "react-icons/fa";
import './Home.css'
import { useEffect, useState } from "react";
import Pricing from "./Pricing";
// import { FaSortAmountDownAlt } from "react-icons/fa";
import SingleHouse from "./SingleHouse";

import 'animate.css';

const Home = () => {
    // const colors=[['#ff0a9e','#fad0c4'],['#a18cd1','#fbc2eb'],['#fad0c4','fbc2eb']]
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

            <section>
                {<Pricing></Pricing>}
            </section>

            {/* <section className="">
                <div className="place-items-center bg-purple-500">
                    <div><h1 className=" text-6xl">Why Choose US</h1></div>
                    <div className=" text-slate-50 stats stats-vertical lg:stats-horizontal shadow">


                        <div className="stat">
                            <div className="stat-title">Project Delivry</div>
                            <div className="stat-value">2000</div>
                            <div className="stat-desc">Jan 1st - dec 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Staisfited Customer</div>
                            <div className="stat-value">1500</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Cheap Rates</div>
                            <div className="stat-value">500</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className=" m-6 bg-gradient-to-r from-emerald-300 from-10% via-sky-500 via-30% to-emerald-600 to-90% ">
                <div className="text-center"><h1 className="text-7xl font-serif">|Why Choose Us</h1></div>
                <div className="grid grid-cols-3 p-14">
                    <div className="grid-cols-1 "> 
                        <GiHouseKeys  className="text-5xl"/>
                        <strong className="text-4xl">2000+</strong>
                        <h1 className="text-4xl font-serif">project delivery</h1></div>
                    <div className="grid-cols-1">
                    <LiaUsersSolid className="text-5xl"/>
                        <strong className="text-4xl">1500+</strong>
                        <h1 className="text-4xl font-serif">satsified customer</h1></div>
                    <div className="grid-cols-1">
                    <FaSearchDollar className="text-5xl" />
                        <strong className="text-4xl">1000+</strong>
                        <h1 className="text-4xl font-serif">cheap rates</h1></div>
                
                    
                </div>
            </section>
            
        </>

    );
};

export default Home;