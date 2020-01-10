import * as React from 'react';

export interface FoodProps {
    food: {
        title: string;
        preview: string;
    };
}

export const Food: React.FunctionComponent<FoodProps> = ({ food }) => {
    return (
        <div className="food card">
            <img className="card-img-top" src={food.preview} />
            <div className="card-body">
                <h5 className="card-title">{food.title}</h5>
                <a href="#" className="btn btn-primary">
                    Show more
                </a>
            </div>
        </div>
    );
};
