import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import InputBox from '../Components/InputBox'

export default class Propina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '',
            porciento: '',
            propina: '',
            baseEndpoint: 'https://cristianrobles4722.000webhostapp.com/calcula.php?',
            totalValid: true,
            porcientoValid: true,
        }
    }

    calcula = () => {
        if (this.state.total.length > 0 && this.state.porciento.length > 0) {
            var xhttp = new XMLHttpRequest();
            let _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   _this.setState({propina: xhttp.responseText });
                }
            };
            xhttp.open("GET",
                `${this.state.baseEndpoint}cantidadTotal=${this.state.total}&porciento=${this.state.porciento}`,
                true);
            xhttp.send();
        } else {
            if (this.state.total.length < 1)
                this.setState( { totalValid: false } )
            if (this.state.porciento < 1)
                this.setState( { porcientoValid: false } )
        }
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>CALCULADOR DE PROPINAS</Text>
                <View style={style.inputContainer}>
                    <InputBox
                        placeholder='Total'
                        valid={ this.state.totalValid }
                        callback={
                            (e) => this.setState({ totalValid: true, total: e })
                    }/>
                    <InputBox
                        placeholder='Porcentaje'
                        valid={ this.state.porcientoValid }
                        callback={
                            (e) => this.setState({ porcientoValid: true, porciento: e })
                    }/>
                </View>
                <TouchableOpacity onPress={this.calcula} style={style.btn}>
                    <Text style={style.btnText}>CALCULAR LA PROPINA</Text>
                </TouchableOpacity>
                <Text style={style.propina}>PROPINA: {this.state.propina}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        height: '100%',
    },
    inputContainer: {
        marginTop: '10%',
    },
    btn: {
        backgroundColor: 'cyan',
        width: '46%',
        marginLeft: '27%',
        padding: 10,
        borderRadius: 15,
        marginTop: 50,
    },
    btnText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    propina: {
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        marginTop: '20%',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
        color: 'white',
        marginTop: '20%',
    },
})
