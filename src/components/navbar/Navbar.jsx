import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import axios from 'axios';

import { selectTheme } from '../../features/slices/themeSlice';
import { logout, selectUser } from '../../features/slices/userSlice';
import { Nav } from './NavbarStyles';

const Navbar = () => {

    const user = useSelector(selectUser);
    const isDark = useSelector(selectTheme);
    const dispatch = useDispatch();

    const handleLogout = async() => {
        try {
            const { data } = await axios.post('http://localhost:5001/api/logout', {
                email: user.email,
                refreshToken: user.refreshToken
            });
            console.log(data);
            dispatch(logout());
        } catch (err) {
            
        }
    }

    return (
        <Nav isDark={isDark}>
            <Link to="/">Clean City</Link>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/reports">Reportes</NavLink></li>
                <li><NavLink to="/campaigns">Campañas</NavLink></li>
                <li><NavLink to="/about">Acerca de</NavLink></li>
                <li>
                    {
                        user ? 
                        <div className="account">
                            <p className="user">{user.firstname + ' ' + user.lastname}</p>
                            <div className="options">
                                <ul>
                                    <li>
                                        <div className="option" onClick={handleLogout}><BiLogOut /> &nbsp;Sign Out</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div style={{ color: '#fff' }}>
                            <NavLink to="signin">Iniciar sesión</NavLink>
                            <span>|</span>
                            <NavLink to="signup">Registrarse</NavLink>
                        </div>
                    }
                </li>
            </ul>
        </Nav>
    );
}

export default Navbar;