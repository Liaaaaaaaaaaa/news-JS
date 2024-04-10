import { LoaderFor, errorHandler, LoadCallBack } from '../../interfaces'


class Loader implements LoaderFor {
    baseLink: string;
    options: {};
    endpoint?: string ;

    constructor(baseLink: string, options: {}, endpoint?: string) {
        this.baseLink = baseLink;
        this.options = options;
        this.endpoint = endpoint;
    }


    public getResp(
        { endpoint, options = {} }: { endpoint: string, options?: {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: errorHandler) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: {}, endpoint: string) {
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            // console.log(typeof urlOptions)
            url += `${key}=${urlOptions[key]}&`;

        });

        return url.slice(0, -1);
    }

    load(method: string,
        endpoint: string,
        callback: LoadCallBack,
        options: {} = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
