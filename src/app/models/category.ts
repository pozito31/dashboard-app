import { ICategory } from '../interfaces/icategory';
import { set, get } from 'lodash-es';

export class Category implements ICategory {

    constructor(data) {
        set(this, 'data', data)
    }

    get id() {
        return get(this, 'data.id')
    }

    set id(value: string) {
        set(this, 'data.id', value);
    }

    get name() {
        return get(this, 'data.name')
    }

    set name(value: string) {
        set(this, 'data.name', value);
    }

    get description() {
        return get(this, 'data.description')
    }

    set description(value: string) {
        set(this, 'data.description', value);
    }

    getData(){
        return get(this, 'data')
    }

}
