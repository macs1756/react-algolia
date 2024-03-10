import './App.css';

import {
  Hits,
  InstantSearch,
  RefinementList,
  useInstantSearch,
} from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import MainTypes from './components/MainTypes';
import Brands from './components/Brands';
import { useState } from 'react';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

function App() {
  
  const [currentType, setCurrentType] = useState('')

  const handleTypeChange = (newType) => {
    setCurrentType(newType);
  };

  return (
    <div className="App">
      <h2>Algolia search:</h2>
      <InstantSearch searchClient={searchClient} indexName="full">
        {/* <Discounts /> */}

        <MainTypes
        handleTypeChange={handleTypeChange}
         />
  
        <Brands currentType={currentType} attribute="brand" limit={999} />

        <RefinementList className='none' attribute="post_type" />
        <RefinementList className='none'  attribute="brand" limit={999} />


        <Hits />
      </InstantSearch>
    </div>
  );
}

export default App;
