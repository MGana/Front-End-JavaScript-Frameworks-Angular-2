import { Comment } from './comment';

export class Dish {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    comments: Comment[];
}
// update the dish class to allow a dish to have an array of comments
