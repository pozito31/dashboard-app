import { IComment } from './../interfaces/icomment';
import { set, get } from 'lodash-es';

export class Comment implements IComment {

    constructor(data) {
        set(this, 'data', data)
    }

    get user() {
        return get(this, 'data.user');
    }

    get date() {
        return get(this, 'data.date');
    }

    get text() {
        return get(this, 'data.text');
    }

    get post() {
        return get(this, 'data.post');
    }


}
