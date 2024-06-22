import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
        navigation.navigate("LoggedInTabs");
        // lógica de autenticação
    };

    const handleRegisterNavigation = () => {
        navigation.navigate("Register");
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/images-project/bibliotech.png")}
                style={styles.logo}
            />
            <Text style={styles.pageTitle}>Bibliotech</Text>
            <View style={styles.loginBox}>
                <Text style={styles.title}>Faça login na sua conta!</Text>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    label="Email:"
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                </View>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.registerText}>
                    Não tem uma conta ainda?{' '}
                    <Text style={styles.registerLink} onPress={handleRegisterNavigation}>
                        Criar conta
                    </Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#be7abb",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 65,
        width: 65,
        textAlign: "left"
    },
    pageTitle: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 40,
        marginBottom: 20,
        marginTop: 5
    },
    title: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20,
        marginTop: 20,
        width: "100%",
        textAlign: 'left'
    },
    loginBox: {
        width: '80%',
        maxWidth: 400,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 16,
        alignItems: "center",
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: "#f1f1f1",
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    label: {
        color: "#000",
        fontSize: 14,
        marginBottom: 8,
        textAlign: 'left',
    },
    loginButton: {
        backgroundColor: "#ac58aa",
        borderRadius: 8,
        width: '100%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
    },
    registerText: {
        fontSize: 14,
        color: "#000000",
        marginTop: 10,
    },
    registerLink: {
        color: "#007BFF",
        textDecorationLine: "underline",
    }
})

export default Login;
