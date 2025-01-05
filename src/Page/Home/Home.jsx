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


            <section className=" m-6 bg-gradient-to-r from-emerald-300 from-10% via-sky-500 via-30% to-emerald-600 to-90% ">
                <div className="text-center"><h1 className="text-7xl font-serif">|Why Choose Us</h1></div>
                <div className="grid grid-cols-3 p-14">
                    <div className="grid-cols-1 ">
                        <GiHouseKeys className="text-5xl" />
                        <strong className="text-4xl">2000+</strong>
                        <h1 className="text-4xl font-serif">project delivery</h1></div>
                    <div className="grid-cols-1">
                        <LiaUsersSolid className="text-5xl" />
                        <strong className="text-4xl">1500+</strong>
                        <h1 className="text-4xl font-serif">satsified customer</h1></div>
                    <div className="grid-cols-1">
                        <FaSearchDollar className="text-5xl" />
                        <strong className="text-4xl">1000+</strong>
                        <h1 className="text-4xl font-serif">cheap rates</h1></div>


                </div>
            </section>
            <section className="ClintQuestion w-2/4 mx-auto  text-center items-center p-16">
                <h1 className="text-4xl font-semibold pb-6">Our client Question</h1>

                <div className="">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Are utilities included in the rent,</div>
                        <div className="collapse-content">
                            <p>yes</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Can I make repairs to the unit?</div>
                        <div className="collapse-content">
                            <p>Yes <strong>conditions apply</strong></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Is a guarantor or co-signer required?</div>
                        <div className="collapse-content">
                            <p>No</p>
                        </div>
                    </div>
                </div>

            </section>

        </>

    );
};

export default Home;