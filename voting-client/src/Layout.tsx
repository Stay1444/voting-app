import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div style={{color: 'red'}}>
            <Outlet/>
        </div>
    )
}

export default Layout;