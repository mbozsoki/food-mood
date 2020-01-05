import * as React from 'react';
import { Food } from './Food';

export interface IFood {
    title: string;
    preview: string;
}
export const FoodList: React.FunctionComponent = () => {
    const [foods, setFoods] = React.useState([
        { title: 'salad', preview: './assets/sampleImages/salad.jpg' },
        { title: 'fish', preview: './assets/sampleImages/fish.jpg' },
        { title: 'pizza', preview: './assets/sampleImages/pizza.jpg' },
        { title: 'toast', preview: './assets/sampleImages/toast.jpg' },
    ]);

    return (
        <div className="food-list">
            {foods.map((food: IFood, index: number) => (
                <Food key={index} food={food} />
            ))}
        </div>
    );
};
