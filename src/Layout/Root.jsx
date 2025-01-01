import { Outlet } from "react-router-dom";
import Header from "../Page/CommonComponents/Header";
import Fotter from "../Page/CommonComponents/Fotter";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Root;