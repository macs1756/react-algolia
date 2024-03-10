import './App.css';

import {
  Hits,
  InstantSearch,
  RefinementList,
  useInstantSearch,
} from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import MainTypes from './components/MainTypes';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

function App() {
  //const { indexUiState, setIndexUiState } = useInstantSearch();

  return (
    <div className="App">
      <h2>Algolia search:</h2>
      <InstantSearch searchClient={searchClient} indexName="full">
        {/* <Discounts /> */}
        <MainTypes />
        <RefinementList className='none' attribute="post_type" />

        <RefinementList attribute="brand" />


        <Hits />
      </InstantSearch>
    </div>
  );
}

export default App;
