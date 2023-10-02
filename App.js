
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <View style={styles.content}>
        <TextInput placeholder='Email Address' style={styles.input} />
        <TextInput placeholder='password' style={styles.input} />
        <Button title='Login' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#aeffa8"
  },
  content: {
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  login: {
    fontSize: 25,
    padding: 10,
  },
  input: {
    padding: 10,
    borderColor: '#555',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    marginHorizontal: 'auto',
    display: 'flex',
    marginBottom: 20,
  }
});
