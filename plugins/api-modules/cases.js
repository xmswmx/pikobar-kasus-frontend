export default {
    getCases (options) {
        return this.getItems(process.env.apiUrl + '/medical-cases', options)
    }
}
