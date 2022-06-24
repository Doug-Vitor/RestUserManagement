class HttpRequest {
    static request(method, url, params = {}) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(method.toUpperCase(), url);
            
            request.onerror = (error) => {
                reject(error);
            }

            request.onload = () => {
                let response = {};
                try {
                    response = JSON.parse(request.responseText);
                } catch (error) {
                    reject(error);
                    console.log(error);
                }

                resolve(response);
            };
            
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(params));
        });    
    }

    static get(url, params = {}) {
        return HttpRequest.request('GET', url, params);
    }

    static post(url, params = {}) {
        return HttpRequest.request('POST', url, params);
    }

    static put(url, params = {}) {
        return HttpRequest.request('PUT', url, params);
    }

    static delete(url, params = {}) {
        return HttpRequest.request('DELETE', url, params);
    }
}