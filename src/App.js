import { useState } from 'react';
import './App.css';
import ContainerCampos from './componentes/container-campos';
import Form from './componentes/form';
import Background from './componentes/shapes';

function App() {

  const [cartoes, setCartao] = useState([]);

  const aoNovoCartaoAdicionado = (cartao) => {
    cartoes.pop()
    setCartao([...cartoes, cartao])
    console.log(cartoes)
  }

  return (
    <div>
      <Background />
      <ContainerCampos aoCartaoCadastrado={cartao => aoNovoCartaoAdicionado(cartao)} />
      <Form cartoes={cartoes} />
    </div>
  );
}

export default App;
