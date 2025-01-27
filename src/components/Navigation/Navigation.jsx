import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

export const Navigation = () => {
    return (
        <div className={css.navigation}>
            <NavLink to='/' className={({ isActive }) => (isActive ? css.active : css.link)}>
                Home
            </NavLink>
            <NavLink to='/catalog' className={({ isActive }) => (isActive ? css.active : css.link)}>
                Catalog
            </NavLink>    
        </div>
    );
};