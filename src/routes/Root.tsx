import { Header } from "../components/common/Header"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/common/Navbar"

export const Root: React.FC<unknown> = () => {
    return (
        <>
        <Header title={""} />
        <Navbar />
        <Outlet />
        </>
    )
}