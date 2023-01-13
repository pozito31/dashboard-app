import { IPost } from './../interfaces/ipost';
import { set, get } from 'lodash-es';

export class Post implements IPost {

    constructor(data) {
        set(this, 'data', data);
    }

    get id() {
        return get(this, 'data.id');
    }

    set id(value: string) {
        set(this, 'data.id', value);
    }

    get title() {
        return get(this, 'data.title');
    }

    set title(value: string) {
        set(this, 'data.title', value);
    }

    get content() {
        return get(this, 'data.content');
    }

    set content(value: string) {
        set(this, 'data.content', value);
    }

    get categories() {
        return get(this, 'data.categories');
    }

    set categories(value: string[]) {
        set(this, 'data.categories', value);
    }

    get date() {
        return get(this, 'data.date');
    }

    set date(value: string) {
        set(this, 'data.date', value);
    }

    get img() {
        return get(this, 'data.img');
    }

    set img(value: string) {
        set(this, 'data.img', value);
    }

    getData(){
        return get(this, 'data');
    }


}
