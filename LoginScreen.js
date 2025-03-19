import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { AppContext } from './App';

const LoginScreen = () => {
    const { setIsLoggedIn } = useContext(AppContext);
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const isValidPhone = /^(0[3|5|7|8|9])([0-9]{8})$/.test(phone);
        setErrorMessage(phone.length > 0 ? (isValidPhone ? 'Số điện thoại hợp lệ!' : 'Số điện thoại không hợp lệ!') : '');
    }, [phone]);

    const handleRegister = () => {
        Alert.alert('Đăng ký thành công', `Số điện thoại: ${phone}`);
        setIsLoggedIn(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.t1}>Đăng Nhập</Text>
            <Text style={styles.t2}>Nhập số điện thoại</Text>

            <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại của bạn"
                keyboardType="phone-pad"
                onChangeText={setPhone}
                value={phone}
            />

            <TouchableOpacity
                style={[styles.button, phone.match(/^(0[3|5|7|8|9])([0-9]{8})$/) ? styles.buttonActive : styles.buttonDisabled]}
                disabled={!phone.match(/^(0[3|5|7|8|9])([0-9]{8})$/)}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Tiếp tục</Text>
            </TouchableOpacity>

            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    t1: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    t2: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonActive: {
        backgroundColor: '#007BFF',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    errorText: {
        marginTop: 10,
        fontSize: 16,
        color: 'red',
    },
});

export default LoginScreen;
