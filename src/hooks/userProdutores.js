import { useState, useEffect } from "react";

import { carregaProdutores } from "../servicos/carregaDados";

export default function useProdutores() {
  // Variável de State: const [estado, método_alteração_estado] = useState('valor inicial')
  // Deve estar declarado no começo da função
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  // Executar uma vez quando o componente for carregado
  useEffect(() => {
    const retorno = carregaProdutores();
    // Ordenar
    retorno.lista.sort(
      (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
    );
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []); // Array vazio para funcionar como componentDidMount de componentes do tipo 'Classe'

  return [titulo, lista]
}