import React, { createContext, useState, useContext, useEffect } from 'react';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
    const [compareList, setCompareList] = useState(() => {
        const saved = localStorage.getItem('compareList');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('compareList', JSON.stringify(compareList));
    }, [compareList]);

    const addToCompare = (tour) => {
        if (compareList.length >= 4) {
            alert("You can compare up to 4 journeys at a time.");
            return;
        }
        if (compareList.find(item => item.id === tour.id)) {
            alert("This journey is already in your comparison list.");
            return;
        }
        setCompareList([...compareList, tour]);
    };

    const removeFromCompare = (tourId) => {
        setCompareList(compareList.filter(item => item.id !== tourId));
    };

    const clearCompare = () => {
        setCompareList([]);
    };

    return (
        <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare }}>
            {children}
        </CompareContext.Provider>
    );
};

export const useCompare = () => useContext(CompareContext);
