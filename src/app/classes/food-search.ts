export class FoodSearch {
    constructor(
        public name: string,
        public calories: number,
    ) {}

    get_name() {
        return this.name;
    }

    set_name(name: string) {
        this.name = name;
    }

    get_calories() {
        return this.calories;
    }

    set_calories(calories: number) {
        this.calories = calories;
    }
}
