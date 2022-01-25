import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';

import { store } from './state/store';
import CellList from './components/cell-list';
import Header from './components/header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
