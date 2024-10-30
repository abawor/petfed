import React, { createContext, useState } from 'react';

export const MealsContext = createContext();

export function MealsProvider({ children }) {
    const [meals, setMeals] = useState([
        { id: '1', type: 'Dry', quantity: '50', unit: 'grams', notes: 'Kibble' },
        { id: '2', type: 'Wet', quantity: '100', unit: 'grams', notes: 'Fish flavour' },
        { id: '3', type: 'Snack', quantity: '1', unit: 'count', notes: 'Dental chew' },
    ])

    return (
        <MealsContext.Provider value={{ meals, setMeals }}>
            {children}
        </MealsContext.Provider>
    )
};
