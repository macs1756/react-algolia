import './App.css';

import {
  HierarchicalMenu,
  Hits,
  InstantSearch,
  RefinementList,
  useInstantSearch,
} from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import MainTypes from './components/MainTypes';
import Brands from './components/Brands';
import { useState } from 'react';
import Substances from './components/Substances/';
import ProductTypes from './components/ProductTypes';

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


        <div className='grid'>

          <div>
            
            <Brands currentType={currentType} attribute="brand" limit={999} />
            <Substances attribute="substances.name" limit={999} />
            <ProductTypes
             attributes={[
              'product_types.lvl0',
              'product_types.lvl1',
              'product_types.lvl2',
            ]}
            limit={999} />

            <RefinementList className='none' attribute="post_type" />
            <RefinementList className='none' attribute="brand" limit={999} />
            <RefinementList className='none' attribute="substances.name" limit={999} />
            <RefinementList className='none' attribute="substances.name" limit={999} />

           


          </div>

          <div>

          <HierarchicalMenu
              attributes={[
                'product_types.lvl0',
                'product_types.lvl1',
                'product_types.lvl2',
              ]}
            />

          <MainTypes
              handleTypeChange={handleTypeChange}
            />

            <Hits />

          </div>


        </div>
      </InstantSearch>
      <div className='space'></div>
    </div>
  );
}

export default App;
