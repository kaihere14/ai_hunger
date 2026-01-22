
"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AnswerContextType {
    answer: string;
    setAnswer: (answer: string) => void;
}

const AnswerContext = createContext<AnswerContextType | undefined>(undefined);

export const AnswerProvider = ({ children }: { children: ReactNode }) => {
    const [answer, setAnswer] = useState("");

    return (
        <AnswerContext.Provider value={{ answer, setAnswer }}>
            {children}
        </AnswerContext.Provider>
    );
};

export const useAnswer = () => {
    const context = useContext(AnswerContext);
    if (!context) {
        throw new Error("useAnswer must be used within an AnswerProvider");
    }
    return context;
};
