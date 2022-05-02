import axios from 'axios';

let apiUrl = process.env.REACT_APP_API_EXAMPLE;


var manageCallback = function(promise) {
    return new Promise((resolve, reject) => {
        promise
            .then(response => resolve(response.data))
            .catch(error => {
                reject(error.response ? error.response.data : error);
            });
    });
};

let client = {
    plain: {
        get: function(path, config) {
            return manageCallback(axios.get(path, config));
        },
        put: function(path, data, config) {
            return manageCallback(axios.put(path, data, config));
        },
        post: function(path, data, config) {
            return manageCallback(axios.post(path, data, config));
        },
        delete: function(path, data, config) {
            return manageCallback(axios.delete(path, data, config));
        },
        fileUpload: function(path, data, config) {
            config.cancelToken = config.cancelToken || axios.CancelToken.source().token;
            return manageCallback(
                axios.post(path, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    ...config
                })
            );
        }
    },
    get: function(path, config) {
        return client.plain.get(apiUrl + path, config);
    },
    put: function(path, data, config) {
        return client.plain.put(apiUrl + path, data, config);
    },
    post: function(path, data, config) {
        return client.plain.post(apiUrl + path, data, config);
    },
    delete: function(path, data, config) {
        return client.plain.delete(apiUrl + path, data, config);
    },
    fileUpload: function(path, data, config) {
        return client.plain.fileUpload(apiUrl + path, data, config);
    },
    utils: {
        get: function(path, config) {
            return manageCallback(axios.get(path), config);
        }

    }
};

export default client;