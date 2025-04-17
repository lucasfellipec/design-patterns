interface MealCompositeProtocol {
    getPrice(): number;
};

export interface MealBuilderProtocol {
    makeMeal(): this;
    makeBeverage(): this;
    makeDessert(): this;
};

export class VeganDishBuilder implements MealBuilderProtocol {
    private _meal: ComposedMeal = new ComposedMeal();

    reset(): this {
        this._meal = new ComposedMeal();

        return this;
    }

    makeMeal(): this {
        const rice = new Rice("Rice", 32.99);
        const beans = new Beans("Beans", 9.99);
        const egg = new Egg("Egg", 1.99);

        this._meal.insert(rice, beans, egg);

        return this;
    }

    makeBeverage(): this {
        const beverage = new Beverage("Beverage", 6.99);

        this._meal.insert(beverage);

        return this;
    }

    makeDessert(): this {
        const dessert = new Dessert("Dessert", 8.99);

        this._meal.insert(dessert);

        return this;
    }

    getMeal(): ComposedMeal {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
};

export class DishBuilder implements MealBuilderProtocol {
    private _meal: ComposedMeal = new ComposedMeal();

    reset(): this {
        this._meal = new ComposedMeal();

        return this;
    }

    makeMeal(): this {
        const rice = new Rice("Rice", 32.99);
        const beans = new Beans("Beans", 9.99);
        const meat = new Meat("Meat", 43.99);

        this._meal.insert(rice, beans, meat);

        return this;
    }

    makeBeverage(): this {
        const beverage = new Beverage("Beverage", 6.99);

        this._meal.insert(beverage);

        return this;
    }

    makeDessert(): this {
        const dessert = new Dessert("Dessert", 8.99);

        this._meal.insert(dessert);

        return this;
    }

    getMeal(): ComposedMeal {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
};

abstract class AbstractMeal implements MealCompositeProtocol {
    private name: string;
    private price: number;

    constructor(_name: string, _price: number) {
        this.name = _name;
        this.price = _price;
    }

    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }
};

export class ComposedMeal implements MealCompositeProtocol {
    private readonly _children: MealCompositeProtocol[] = [];

    getPrice(): number {
        return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
    }

    insert(...meal: MealCompositeProtocol[]): void {
        meal.forEach((item) => this._children.push(item));
    }
};

class Rice extends AbstractMeal {};
class Beans extends AbstractMeal {};
class Egg extends AbstractMeal {};
class Meat extends AbstractMeal {};
class Beverage extends AbstractMeal {};
class Dessert extends AbstractMeal {};

const dishBuilder = new DishBuilder();
dishBuilder.makeMeal().makeDessert().makeBeverage();

console.log(dishBuilder.getMeal());
console.log(dishBuilder.getPrice());

dishBuilder.reset();

const meal = dishBuilder.makeBeverage().getMeal();

console.log(meal);
console.log(meal.getPrice());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal();

console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
