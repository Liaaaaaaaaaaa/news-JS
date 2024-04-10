import AppLoader from './appLoader';

import { EGetNews } from '../../interfaces';

class AppController extends AppLoader {
    getSources(callback: (() => void) | undefined) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e:  EGetNews , callback: (() => void) | undefined) {
     
        let target = e.target;
   
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }

                return;
            }
            target = target.parentNode as HTMLInputElement;
        }
    }
}

export default AppController;
