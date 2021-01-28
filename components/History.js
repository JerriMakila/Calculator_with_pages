import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function History({route, navigation}){
    const history = route.params;

    return(
        <View style={styles.list}>
            <View style={styles.listContainer}>
                <Text style={styles.header}>History:</Text>
                <FlatList
                data={history.history}
                renderItem={({item}) =>
                    <Text style={{fontSize: 20}}>{item.calculation}</Text>}>
                </FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },

    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})