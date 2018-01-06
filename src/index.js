import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Loadable from 'react-loadable';
const App = Loadable.Map({
  loader: {
    app1: () => import(/* webpackChunkName: 'foo' */'./App1.js'),
    app2: () => import(/* webpackChunkName: 'bar' */'./App2.js'),
    app3: () => import(/* webpackChunkName: 'baz' */'./App3.js'),
  },
  loading: () => (<div>...LOADING...</div>),
  render(loaded, props) {
    return (
      <div>
      {Object.keys(loaded).map((name, index) => {
        const Component = loaded[name].default;
        return <Component key={`loaded-component-${index}`} />;
      })}
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
