import Card from '../UI/Card';
import './AvailableMeals.css';
import MealsItem from '../Meals/MealsItem/MealsItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Pizza',
        description: 'Finest paneer and veggies',
        price: 199.99,
    },
    {
        id: 'm2',
        name: 'Fries',
        description: 'A german specialty!',
        price: 59.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 39.99,
    },
    {
        id: 'm4',
        name: 'Ice-cream whaffel',
        description: 'Dark chocolate ice cream with crispy chocolate whaffel',
        price: 99.99,
    },
];

const AvailableMeals = () => {
    return (
        <section className='meals'>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(meals =>
                        <MealsItem id={meals.id}
                            key={meals.id}
                            name={meals.name}
                            description={meals.description}
                            price={meals.price}
                        />
                    )}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
