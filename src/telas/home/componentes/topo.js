import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { carregaTopo } from "../../../servicos/carregaDados";
import logo from '../../../assets/logo.png';

// Utilizar como 'Classe'
class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    }
  }

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno });
    // console.log(retorno)
  }

  componentDidMount() { // Ciclo de Vida
    this.atualizaTopo() // 'this' "esta classe"
  }

  render() {
    return <View style={ estilos.topo }>
      <Image source={logo} style={ estilos.imagem }/>
      <Text style={ estilos.boasVindas }>{ this.state.topo.boasVindas }</Text>
      <Text style={ estilos.legenda }>{ this.state.topo.legenda }</Text>
    </View>
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16
  },
  imagem: {
    width: 70,
    height: 28
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    color: "#464646"
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: "#A3A3A3"
  }
});

export default Topo;
