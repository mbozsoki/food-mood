import * as React from 'react';

export interface FoodProps {
    food: {
        title: string;
        preview: string;
    };
}

export const Food: React.FunctionComponent<FoodProps> = ({ food }) => {
    return (
        <div className="food-item">
            <img src={food.preview} />
            <span className="title">{food.title}</span>
        </div>
    );
};
