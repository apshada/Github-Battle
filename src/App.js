import React from 'react';
import './App.css';
import Battle from './batlle';
import { IonApp } from '@ionic/react';
import Header from './Header';

function App() {
  return (
   <IonApp>
     <Header />
     <Battle />
   </IonApp>
    
  );
}

export default App;
