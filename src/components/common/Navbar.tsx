import { NavLink } from "react-router-dom";

type NavbarType = {
    title?: string;
}
export const Navbar: React.FC<NavbarType> = () => {
    return (
        <>
        <p><NavLink to={"/home"}>Home</NavLink><NavLink to={"/jenn"}>Jenn</NavLink><NavLink to={"/sophia"}>Sophia</NavLink></p>
        </>
    )
}