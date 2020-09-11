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
        marginBottom: 14,
        marginTop: 2,
        marginHorizontal: 1,

        borderWidth: 0,
        borderColor: '#ddd',
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 0, },
        // shadowOpacity: 1,
        // shadowRadius: 3,
        elevation: 4,
    }
}

export default Card;