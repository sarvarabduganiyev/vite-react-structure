import {AuthGuard} from "../app/guard/AuthGuard.tsx";
import {Outlet, useLocation} from "react-router-dom";
import {motion} from "framer-motion"
import {layoutVariants} from "./index.ts";


export const MainLayout = () => {
    const {pathname} = useLocation();
    return (
        <AuthGuard>
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                variants={layoutVariants}
                transition={{duration: 0.5}}
            >
                <Outlet/>
            </motion.div>
        </AuthGuard>
    );
};