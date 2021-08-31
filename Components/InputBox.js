import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    style = () => {
        if (this.props.valid === true || this.props.valid === 'true')
            return style.validInput;
        return style.invalidInput;
    }

    errorMsg = () => {
        if (this.props.valid === false || this.props.valid === 'false')
            return <Text style={style.errorMsg}>"Campo requerido"</Text>
        return null;
    }

    render() {
        return (
            <View style={[ style.container, this.props.style ]}>
                <TextInput
                    placeholder={this.props.placeholder}
                    placeholderTextColor='#949494'
                    style={[ style.base, this.style() ]}
                    keyboardType='number-pad'
                    onChangeText={this.props.callback}
                />
                { this.errorMsg() }
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
    },
    base: {
        width: '80%',
        marginLeft: '10%',
        borderWidth: 1,
        marginTop: 20,
        fontSize: 24,
        borderRadius: 10,
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    validInput: {
        borderColor: 'white',
    },
    invalidInput: {
        borderColor: 'red',
    },
    errorMsg: {
        fontSize: 24,
        color: 'red',
        textAlign: 'center',
        marginTop: 5,
    },
})
