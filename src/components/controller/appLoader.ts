import Loader from './loader';



class AppLoader extends Loader {
    

    constructor(
    ) {

        const API_URL = process.env.API_URL as string;
        super(
            API_URL,
            {
                apiKey: process.env.API_KEY,
            }); 

    }


}



export default AppLoader;

