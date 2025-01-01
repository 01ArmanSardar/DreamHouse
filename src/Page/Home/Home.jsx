import Marquee from "react-fast-marquee";
import Pic1 from "../../../public/pexels-alexander-isreb-880417-1797393.jpg"
import Pic2 from "../../../public/pexels-asphotograpy-101808.jpg"
import Pic3 from "../../../public/pexels-binyaminmellish-106399.jpg"
import Pic4 from "../../../public/pexels-binyaminmellish-1396122.jpg"
import Pic5 from "../../../public/pexels-christa-grover-977018-2121121.jpg"
import Pic6 from "../../../public/pexels-lina-3639540.jpg"
import './Home.css'
import { useEffect, useState } from "react";
// import { FaSortAmountDownAlt } from "react-icons/fa";
import SingleHouse from "./SingleHouse";
import 'animate.css';

const Home = () => {
    const [Houses,SetHouses]=useState([])
    useEffect(()=>{

        fetch('https://dreamhouseserverside-1.onrender.com/houses/')
        .then(res=>res.json())
        .then(data=>SetHouses(data))
    },[])

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
                            Houses.map(house=><SingleHouse key={house.id} house={house}></SingleHouse>)
                        }
                    </div>

                </div>
            </section>
            <section ></section>
            <section></section>
        </>
        
    );
};

export default Home;