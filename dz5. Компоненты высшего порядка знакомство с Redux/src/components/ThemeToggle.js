import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../actions/actions';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div>
            <button onClick={handleToggle}>
                {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
            </button>
            <style jsx>{`
                body {
                    background-color: ${isDarkTheme ? '#333' : '#FFF'};
                    color: ${isDarkTheme ? '#FFF' : '#000'};
                    transition: background-color 0.3s, color 0.3s;
                }
            `}</style>
        </div>
    );
};

export default ThemeToggle;
