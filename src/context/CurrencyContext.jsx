import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const currencies = {
    USD: { symbol: '$', rate: 1, label: 'USD', icon: '🇺🇸' },
    EUR: { symbol: '€', rate: 0.92, label: 'EUR', icon: '🇪🇺' },
    GBP: { symbol: '£', rate: 0.79, label: 'GBP', icon: '🇬🇧' },
    AUD: { symbol: 'A$', rate: 1.52, label: 'AUD', icon: '🇦🇺' },
    LKR: { symbol: 'Rs.', rate: 310, label: 'LKR', icon: '🇱🇰' }
};

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(() => {
        const saved = localStorage.getItem('preferred_currency');
        return saved || 'USD';
    });

    useEffect(() => {
        localStorage.setItem('preferred_currency', currency);
    }, [currency]);

    const formatPrice = (usdPrice) => {
        if (typeof usdPrice === 'string') {
            usdPrice = parseFloat(usdPrice.replace(/[^0-9.]/g, ''));
        }
        const currentCurrency = currencies[currency];
        const converted = Math.round(usdPrice * currentCurrency.rate);
        
        if (currency === 'LKR') {
            return `${currentCurrency.symbol} ${converted.toLocaleString()}`;
        }
        return `${currentCurrency.symbol}${converted.toLocaleString()}`;
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, currencies }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
};
