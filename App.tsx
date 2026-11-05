import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>✨</Text>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Text style={styles.text}>
        Это мой учебный проект — место, где каждая новая идея становится частью большого пути.
      </Text>
      <Text style={styles.note}>Начинаем с малого и двигаемся вперёд 🚀</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00ADB5',
    marginBottom: 14,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    lineHeight: 27,
    color: '#EEEEEE',
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  note: {
    marginTop: 24,
    fontSize: 14,
    color: '#A8B2C1',
    textAlign: 'center',
  },
});