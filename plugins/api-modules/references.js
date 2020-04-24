export default {
    getOccupations (options) {
        return this.getItems(process.env.apiUrl + '/master/occupations', options)
    }
}
