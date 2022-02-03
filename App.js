import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/Rotas';
import Reactotron from 'reactotron-react-native';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  console.tron.log('App iniciado');
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  )
}
