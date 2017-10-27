import { Comment } from './comment';

export class Dish {
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}
// update the dish class to allow a dish to have an array of comments
