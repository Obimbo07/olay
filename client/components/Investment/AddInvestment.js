import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const AddInvestment = () => {
    const activeInvestments = [
        { id: '1', name: 'Tech Company', amount: 1000 },
        { id: '2', name: 'Renewable', amount: 1500 },
        { id: '3', name: 'Adata', amount: 2000 },
        { id: '4', name: 'Oasis', amount: 1000 },
        { id: '5', name: 'Renewable', amount: 1500 },
        { id: '6', name: 'Western Kid Trift', amount: 2000 },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handleInvestmentSelection(item)}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>Amount: ${item.amount}</Text>
        </TouchableOpacity>
    );

    const handleInvestmentSelection = (investment) => {
        // Implement logic to handle investment selection
        console.log("Selected Investment:", investment);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={activeInvestments}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddInvestment;
