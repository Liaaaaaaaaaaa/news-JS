import './sources.css';

import { SourceInterface } from '../../../interfaces';

class Sources {
    draw(data: [SourceInterface]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item: SourceInterface) => {
            const sourceClone = ((sourceItemTemp as HTMLTemplateElement).content.cloneNode(true)) as DocumentFragment ;

            (sourceClone.querySelector('.source__item-name') as HTMLDivElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;
