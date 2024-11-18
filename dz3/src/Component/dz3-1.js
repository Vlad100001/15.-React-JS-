import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [error, setError] = useState('');

    const ABSOLUTE_ZERO_C = -273.15;
    const ABSOLUTE_ZERO_F = -459.67;

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setError(''); // Сбрасываем ошибку

        if (value !== '') {
            const celsiusValue = parseFloat(value);
            if (celsiusValue < ABSOLUTE_ZERO_C) {
                setError('Температура не может быть ниже абсолютного нуля (-273.15 °C)');
                setFahrenheit('');
            } else {
                const convertedValue = (celsiusValue * 9 / 5) + 32;
                setFahrenheit(convertedValue.toFixed(2));
            }
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        setError(''); // Сбрасываем ошибку

        if (value !== '') {
            const fahrenheitValue = parseFloat(value);
            if (fahrenheitValue < ABSOLUTE_ZERO_F) {
                setError('Температура не может быть ниже абсолютного нуля (-459.67 °F)');
                setCelsius('');
            } else {
                const convertedValue = (fahrenheitValue - 32) * 5 / 9;
                setCelsius(convertedValue.toFixed(2));
            }
        } else {
            setCelsius('');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: 'auto' }}>
            <TextField
                label="Цельсий (°C)"
                variant="outlined"
                value={celsius}
                onChange={handleCelsiusChange}
                type="number"
                error={!!error}
            />
            <TextField
                label="Фаренгейт (°F)"
                variant="outlined"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                type="number"
                error={!!error}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button variant="contained" onClick={() => { setCelsius(''); setFahrenheit(''); setError(''); }}>
                Очистить
            </Button>
        </Box>
    );
};

export default TemperatureConverter;
