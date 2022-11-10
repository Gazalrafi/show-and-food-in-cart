
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card.js';
import MealItem from './MealItem/MealItem.js';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Biryani',
      description: 'Chicken biryani with delicious raita',
      price: 250,
    },
    {
      id: 'm2',
      name: 'Tandoor dish',
      description: 'Tandoori chicken and creamy afghani chicken',
      price:300 ,
    },
    {
      id: 'm3',
      name: 'chowmein',
      description: 'egg,chicken and veggies',
      price: 150,
    },
    {
      id: 'm4',
      name: 'protein salad',
      description: 'Boiled chicken with veggies',
      price: 200,
    },
  ];

  const AvailableMeals=(props)=>{
    const mealsList=DUMMY_MEALS.map((meal)=>
    <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}/>
    );
  return <section className={classes.meals}>
    <Card>
     <ul>{mealsList} </ul>  
    </Card>
  </section>
  }
  export default AvailableMeals;



