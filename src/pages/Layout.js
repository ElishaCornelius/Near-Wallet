import {Outlet, Link} from "react-router-dom";
import Header from "../header.js";
import Footer from "../footer.js";

function Layout(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
export default Layout;