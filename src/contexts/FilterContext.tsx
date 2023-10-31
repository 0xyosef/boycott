"use client"
import React, { createContext, useContext, useState } from 'react';



type FilterContextType =[string, React.Dispatch<React.SetStateAction<string>>]

const FilterContext = createContext<FilterContextType | undefined>(undefined);
interface ProviderProps {
    children: React.ReactNode;
    name: string;
}
export function FilterProvider({children,name}:ProviderProps) {
    const state=useState(name)
    return (
        <FilterContext.Provider value={state}>
            {children}
        </FilterContext.Provider>
    );
}

export function useFilter() {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
}
