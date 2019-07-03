import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults () {
        const key = 'ed8b45752782350d0adf7e24895cc597';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes
            return this.result;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}