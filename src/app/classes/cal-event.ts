export class CalEvent {
    constructor(
    public title: string,
    public start = new Date,
    public calories: number,
    public color: any
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
const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
