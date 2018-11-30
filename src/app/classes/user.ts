export class User {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public birthday: string,
        public userName: string
    ) {}

    get_id() {
        return this.id;
    }
    set_id(id: number) {
        this.id = id;
    }

    get_username() {
        return this.userName;
    }

    set_username(userName: string) {
        this.userName = userName;
    }
}
