import React, { createContext, useState } from 'react';

export const MealsContext = createContext();

export function MealsProvider({ children }) {
    const [meals, setMeals] = useState([
        { id: 'add', name: 'Add meal' },
        { id: '1', name: 'Kibble', type: 'Dry', quantity: '50', unit: 'grams' },
        { id: '2', name: 'Fish', type: 'Wet', quantity: '100', unit: 'grams' },
        { id: '3', name: 'Dental chew', type: 'Snack', quantity: '1', unit: 'count' },
    ])

    return (
        <MealsContext.Provider value={{ meals, setMeals }}>
            {children}
        </MealsContext.Provider>
    )
};
