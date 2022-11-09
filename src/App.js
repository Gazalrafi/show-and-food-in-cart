
import Header from'./components/Layout/Header';
import {Fragment} from 'react';
import Meals from './components/Meals/Meals.js';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;