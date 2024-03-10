import './App.css';
	
import {
  InstantSearch,
  RefinementList,
  useInstantSearch,
} from 'react-instantsearch';


function App() {
  const { indexUiState, setIndexUiState } = useInstantSearch();

  return (
    <div className="App">
      <h2>Algolia search:</h2>

    </div>
  );
}

export default App;
