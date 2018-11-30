export class Exercise {
    constructor(
        public id: number,
        public name: string,
        public date: string,
        public calories: number
        // public userId:
    ) { }

    get_id() {
        return this.id;
    }

    set_id(id: number) {
        this.id = id;
    }

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

    get_date() {
        return this.date;
    }

    set_date(date: string) {
        this.date = date;
    }
}
