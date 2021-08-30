import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class Propina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '',
            porciento: '',
            propina: '',
        }
    }

    render() {
        const calcula = () => {
            var xhttp = new XMLHttpRequest();
            let _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   _this.setState({propina: xhttp.responseText });
                }
            };
            xhttp.open("GET", "https://cristianrobles4722.000webhostapp.com/calcula.php?cantidadTotal=" + this.state.total + "&porciento=" + this.state.porciento, true);
            xhttp.send();
        }
        return (
            <View>
                <TextInput style={{ borderWidth:1 }} keyboardType='number-pad' onChangeText={(total)=>this.setState({total})}></TextInput>
                <TextInput style={{ borderWidth:1 }} keyboardType='number-pad' onChangeText={(porciento)=>this.setState({porciento})}></TextInput>
                <Text>{this.state.propina}</Text>
                <Button title='Calcular la propina' onPress={calcula}></Button>
            </View>
        )
    }

}
