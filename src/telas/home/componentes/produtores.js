import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import Produtor from "./produtor";
// import { carregaProdutores } from "../../../servicos/carregaDados";
import useProdutores from "../../../hooks/userProdutores";

// Utilizar como 'Função'
export default function Produtores({ topo: Topo }) {
  // Variável de State: const [estado, método_alteração_estado] = useState('valor inicial')
  // Deve estar declarado no começo da função
  // const [titulo, setTitulo] = useState('');
  // const [lista, setLista] = useState([]);

  // Executar uma vez quando o componente for carregado
  // useEffect(() => {
  //   const retorno = carregaProdutores();
  //   setTitulo(retorno.titulo);
  //   setLista(retorno.lista);
  // }, []); // Array vazio para funcionar como componentDidMount de componentes do tipo 'Classe'

  // Utilizr Hook personalizado
  const [titulo, lista] = useProdutores();

  const topoLista = () => {
    return <>
      <Topo />
      <Text style={estilos.titulo}>{ titulo }</Text>
    </>
  }

  return <FlatList
    data={ lista }
    // renderItem={({ item: { nome } }) => <Text>{ nome }</Text>} // Passar pela propriedade item para desconstruir o objeto, dento do item terá o mesmo objeto da lista e fica acessível a propriedade nome;
    renderItem={({ item }) => <Produtor {...item} />}
    keyExtractor={({ nome }) => nome }
    ListHeaderComponent={ topoLista }
  />
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#464646",
  }
})