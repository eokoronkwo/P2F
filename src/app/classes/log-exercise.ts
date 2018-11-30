export class LogExercise {
    public name: string;
    public caloriesBurned: number;
    public date: Date;

    get_name() {
        return this.name;
    }

    set_name(name: string) {
        this.name = name;
    }

    get_calories() {
        return this.caloriesBurned;
    }

    set_calories(calories: number) {
        this.caloriesBurned = calories;
    }

    get_date() {
        return this.date;
    }

    set_date() {
        this.date = new Date;
    }
}
