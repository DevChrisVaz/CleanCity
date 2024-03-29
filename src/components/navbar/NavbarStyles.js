import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: ${props => props.isDark ? '2px 0 15px 8px #111' : '2px 0 10px 5px #999'};
    background: ${props => props.isDark ? '#174025' : "#2E8049"};
    transition: all .3s ease;

    & > a {
        font-size: 28px;
        font-weight: 700;
        color: #fff;
    }

    & ul{
        display: flex;
    }

    & ul li{
        list-style: none;
        margin: 0 10px;

        & a{
            padding: 21px 10px;
            color: #fff;
        }
        & .account {
            position: relative;
            display: flex;
        }
        & .account .user{
            color: #fff;
            font-weight: 600;
            user-select: none;
        }

        & .account .options-button {
            color: #fff;
            transform: translate(5px, 2px);
            cursor: pointer;
        }

        & .account li {
            width: 80%;
        }

        & .account .options {
            position: absolute;
            right: 0;
            padding: 10px 0;
            background: ${props => props.isDark ? '#181818' : '#EEE'};
            color: #2E8049;
            margin-top: 10px;
            border-radius: 15px;
            box-shadow: 2px 0 4px 2px rgba(0,0,0,.2);
            transform: translateY(0);
            transition: .5s;
            width: 170px;
            transform: translate(20px, 25px);
            &:before {
                position: absolute;
                content: '';
                transition: transform .5s ease;
                border-style: solid;
                border-width: 0 15px 15px 15px;
                border-color: ${props => props.isDark ? 'transparent transparent #181818 transparent' : 'transparent transparent #EEE transparent'};
                /* border-color: transparent transparent #fff transparent; */
                top: -10px;
                right: 10px;
            }
            & .option {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                user-select: none;
            }
        }

        & .theme-button-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 75px; 
                user-select: none;

                & .switch {
                    position: relative;
                    width: 40px;
                    height: 20px;
                    background: #c6c6c6;
                    border-radius: 10px;
                    outline: none;
                    box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);
                    transition: .5s;
                    cursor: pointer;
                    user-select: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;

                    &:checked{
                        background: #0082cc;
                    }

                    &:before{
                        content: '';
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        top: 0;
                        left: 0;
                        background: #fff;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
                        transform: scale(1.1);
                        transition: .5s;
                        user-select: none;
                    }

                    &:checked:before{
                        left: 20px;
                        user-select: none;
                    }
                }
            }
    }

    & ul li a.active{
        color: ${props => props.isDark ? '#62A077' : "#2E8049"};
        font-weight: bold;
        background: ${props => props.isDark ? "#2D2D2D" : "#EEE"};
    }

    & ul li .options {

    }
`;


export const Sun = styled(FaSun)`
    color: #ffef00;
    font-size: 25px;
    @media screen and (max-width: 480px){
        font-size: 35px;
    }
`;

export const Moon = styled(FaMoon)`
    color: #fff;
    font-size: 20px;
    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`;

export const ThemeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px; 
    user-select: none;
    
    @media screen and (max-width: 1080px){
        margin: 1rem 0 5rem 0;
    }

    @media screen and (max-width: 480px){
        width: 90px;
    }
`;

export const Switch = styled.input`
    position: relative;
    width: 40px;
    height: 20px;
    background: #c6c6c6;
    border-radius: 10px;
    outline: none;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);
    transition: .5s;
    cursor: pointer;
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:checked{
        background: #2E8049;
    }

    &:before{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 0;
        left: 0;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
        transform: scale(1.1);
        transition: .5s;
        user-select: none;
    }

    &:checked:before{
        left: 20px;
        user-select: none;
    }
`;