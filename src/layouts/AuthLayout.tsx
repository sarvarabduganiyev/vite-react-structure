import {Outlet, useLocation} from "react-router-dom";
import {AuthProvider} from "../app/providers/auth-provider/AuthProvider.tsx";
import {Box} from "@mui/material";
import {motion} from "framer-motion";
import {layoutVariants} from "./index.ts";

export function AuthLayout () {
    const {pathname} = useLocation();
    return (
        <AuthProvider>
            <Box sx={{overflowX: "hidden"}}>
                <motion.div
                    key={pathname}
                    initial={"initial"}
                    animate="in"
                    variants={layoutVariants}
                >
                    <Outlet/>
                </motion.div>
            </Box>
        </AuthProvider>
    )
}