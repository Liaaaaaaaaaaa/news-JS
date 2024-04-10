import AppController from '../controller/controller';
import { AppView } from '../view/appView';

import { LoaderGetNews , DrawNewsInterface, AppViewInterface} from '../../interfaces';



class App {
    controller: LoaderGetNews ;
    view: AppViewInterface;
    

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) => 
        this.controller.getNews(e , (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
