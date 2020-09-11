import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

function Input(props) {

    const [isFocus, setIsFocus] = useState(false);

    const colorFocus = {
        fieldset: {
            marginTop: 10,
            borderWidth: 1.5,
            borderRadius: 3,
            borderColor: '#8257E6',
        },
        label: {
            color: '#8257E6',
            backgroundColor: '#fff',
            paddingHorizontal: 4,
        }
    }

    const colorBlur = {
        fieldset: {
            marginTop: 10,
            borderWidth: 1.5,
            borderRadius: 3,
            borderColor: '#ddd',
        },
        label: {

            color: '#a5a5a5',
            backgroundColor: '#fff',
            paddingHorizontal: 4,
        },
    }

    const styles = {
        textInput: {
            paddingHorizontal: 8,
            height: 40
        },
        legend: {
            marginTop: -12,
            paddingHorizontal: 4,
            flexDirection: 'row',
        },
    }

    const handleFocus = () => {
        setIsFocus(true)
    }

    const handleBlur = () => {
        setIsFocus(false)
    };


    return (
        <View style={isFocus ? colorFocus.fieldset : colorBlur.fieldset}>
            <View style={styles.legend}>
                <Text style={isFocus ? colorFocus.label : colorBlur.label}>{props.legend}</Text>
                <Text></Text>
            </View>

            <TextInput
                style={styles.textInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                
                onChangeText={props.propsOnChangeText}
                placeholder={props.placeholder}
                keyboardType={props.type}
                value={props.value}
            />
        </View>
    )
}

export default Input;