import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from './App'; // Import context

const ProfileScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext); // Lấy setIsLoggedIn từ context

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.body}>
        <Text style={styles.name}>Le Tran Duc</Text>
        <Text style={styles.title}>Mobile Developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>

        {/* Nút Sign Out */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsLoggedIn(false)} // Cập nhật trạng thái đăng nhập
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: { height: 120, backgroundColor: '#00AEEF' },
  body: { flex: 1, alignItems: 'center', paddingHorizontal: 20, marginTop: -30 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  title: { fontSize: 16, color: '#00AEEF', marginBottom: 10 },
  description: { textAlign: 'center', fontSize: 14, color: '#666', marginBottom: 20 },
  button: { backgroundColor: '#FFA500', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default ProfileScreen;
