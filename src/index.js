import React from 'react';
import ReactDOM from 'react-dom';

/*import './form_kit/index.css';
import './form_kit/ali.css';
import App from './form_kit/App';*/

/*import './test/ali_style.css';
import './test/index.css';
import App from './test/App';*/

/*import './test/ali_style.css';
import './ali_test/index.css';
import App from './ali_test/App';*/

import './redux_study/index.css';
import App from './redux_study/App';

import registerServiceWorker from './registerServiceWorker';

const moduleData = {
  mds: {
    moduleData: {
      "pagecnt": "4",
      "pricepre": true,
      "hideBottom": true,
      "productidsarray": [
        ""
      ],
      "minorderunitshow": true,
      "productfobpriceshow": true,
      "subjectshow": true,
      "navarray": [
        ""
      ],
      "strategyname": "groupRange",
      "embellishmenticoshow": true,
      "minorderunit": false,
      "isFluid": true,
      "productfobpriceunit": false,
      "catecnt": "1"
    }
  },
  gdc: []
}
ReactDOM.render(
  <App moduleData={moduleData}/>
  , document.getElementById('root'));
registerServiceWorker();