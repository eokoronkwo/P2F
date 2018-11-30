export class CalEvent {
    constructor(
    public title: string,
    public start = new Date,
    public calories: number,
    ) {}

    get_title() {
        return this.title;
    }
    set_title(title: string) {
        this.title = title;
    }
    get_date() {
        return this.start;
    }
    set_date(date: string) {
        this.start = new Date(date);
    }
}
