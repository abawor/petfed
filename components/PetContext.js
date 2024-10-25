import React, { createContext, useState } from 'react';

const testURI = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fpetfed-f2595dad-ec9e-4720-855d-812410dc6629/ImagePicker/b0b496c0-72be-41cb-b5f6-784127a8e538.jpeg"

export const PetContext = createContext();

export function PetProvider({ children}) {
    const [pets, setPets] = useState([
        { id: 'add', name: 'Add pet' },
        { id: '1', photo: testURI , name: 'Poppy'},
    ])

    return (
        <PetContext.Provider value={{ pets, setPets }}>
            {children}
        </PetContext.Provider>
    )
};
