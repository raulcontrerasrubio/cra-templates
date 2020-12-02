import React from 'react';
import {useSelector} from 'react-redux';
import Navigation from './Navigation';

function App() {
  const appState = useSelector(state => state.app);

  return (
    <Navigation loggedUserId={appState.loggedId} />
  );
}
export default App;