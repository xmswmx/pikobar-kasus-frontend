import axios from 'axios';
import moduleReference from './api-modules/references';

export default ({ app }, inject) => {
    inject('api', {
        empty (value) {
            return value === undefined || value === null || value.length === 0 || value === '';
        },
        exists (object, key) {
            return !this.empty(object) && !this.empty(object[key]);
        },
        get (api) {
            return axios.get(api).then((response) => response.data).catch((error) => {
                if (error.response && error.response.status === 401) {
                    app.context.redirect({ name: 'account-logout' });
                } else if (error.response) {
                    console.log(error.response);
                } else {
                    console.log(error);
                }
            });
        },
        getItems (api, options = {}) {
            if (!this.exists(options, 'cache')) {
                var params = [];
                if (this.exists(options, 'search')) {
                    params.push('search=' + options.search);
                }
                if (this.exists(options, 'pagination')) {
                    if (!this.empty(options.pagination.page)) {
                        params.push('page=' + (options.pagination.page - 1));
                    }
                    if (!this.empty(options.pagination.rowsPerPage)) {
                        params.push('size=' + options.pagination.rowsPerPage);
                    }
                    if (!this.empty(options.pagination.size)) {
                        params.push('size=' + options.pagination.size);
                    }
                    if (!this.empty(options.pagination.sortBy)) {
                        var order = options.pagination.descending ? 'desc' : 'asc';
                        params.push('sort=' + options.pagination.sortBy + ',' + order);
                    }
                }
                if (this.exists(options, 'published')) {
                    params.push('aktif=' + options.published);
                }

                if (typeof options.filters !== 'undefined') {
                    for (var key in options.filters) {
                        if (options.filters[key]) {
                            params.push(key + '=' + options.filters[key]);
                        }
                    }
                }

                api = api + '?' + params.join('&');

                return this.get(api).then((response) => response);
            } else {
                return Promise.resolve(options.cache);
            }
        },
        ...moduleReference
    });
};
