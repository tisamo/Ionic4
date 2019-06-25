export class Categories {
    private _id: number;
    private _name: string;
    private _image: string;
    private _categoryIds: number[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get categoryIds(): number[] {
        return this._categoryIds;
    }

    set categoryIds(value: number[]) {
        this._categoryIds = value;
    }

    constructor(id: number, name: string, image: string, categoryIds: number[]) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._categoryIds = categoryIds;
    }

}
