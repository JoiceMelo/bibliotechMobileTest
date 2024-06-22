import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Acervo = () => {
    const navigation = useNavigation();

    const handleAddBook = () => {
        navigation.navigate('Coleções');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/images/images-project/bibliotech.png")}
                    style={styles.logo}
                />
                <Text style={styles.pageTitle}>Bibliotech</Text>
            </View>
            <Image
                source={require('../assets/images/images-project/books.jpg')}
                style={styles.image}
            />
            <Text style={styles.message}>Adicione um livro a sua coleção!</Text>
            <TouchableOpacity style={styles.button} onPress={handleAddBook}>
                <Text style={styles.buttonText}>Criar novo livro</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#be7abb",
    },
    header: {
        position: 'absolute',
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logo: {
        height: 55,
        width: 55,
    },
    pageTitle: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 40,
        marginLeft: 10, // Espaçamento entre a logo e o texto
    },
    image: {
        width: 150,
        height: 150,
    },
    message: {
        fontSize: 25,
        color: "#000",
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#ac58aa",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: 200,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Acervo;