import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Main = ({children}) => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return <main className="mt-20 w-full">{children}</main>
}

export default Main;