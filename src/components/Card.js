import React from 'react';
import { Text, View } from 'react-native';

function Card(props) {

    return (
        <View style={styles.card}>{props.children}</View>
    )
}

const styles = {
    card: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 16,
        marginBottom: 16,

        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
}

export default Card;