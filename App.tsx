import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <View style={styles.badge} accessibilityLabel="Значок вдохновения">
          <Text style={styles.emoji} accessibilityElementsHidden>
            ✨
          </Text>
        </View>

        <Text style={styles.eyebrow}>ТВОЙ ПУТЬ НАЧИНАЕТСЯ ЗДЕСЬ</Text>
        <Text style={styles.title}>Добро пожаловать!</Text>
        <Text style={styles.description}>
          Это твой учебный проект — пространство, где новые идеи превращаются в
          большие достижения.
        </Text>

        <View style={styles.divider} />
        <Text style={styles.note}>Начинай с малого и двигайся вперёд</Text>
        <Text style={styles.rocket} accessibilityLabel="Вперёд">
          🚀
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#101820',
  },
  content: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
    borderRadius: 28,
    backgroundColor: '#1B2732',
    borderWidth: 1,
    borderColor: '#2A3A47',
  },
  badge: {
    width: 88,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    borderRadius: 28,
    backgroundColor: '#173D40',
  },
  emoji: {
    fontSize: 42,
  },
  eyebrow: {
    marginBottom: 12,
    color: '#75D5C5',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.8,
    textAlign: 'center',
  },
  title: {
    marginBottom: 16,
    color: '#F4F7F8',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -0.6,
    textAlign: 'center',
  },
  description: {
    color: '#B5C1C9',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
  },
  divider: {
    width: 40,
    height: 3,
    marginTop: 28,
    marginBottom: 18,
    borderRadius: 2,
    backgroundColor: '#75D5C5',
  },
  note: {
    color: '#DCE5E9',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  rocket: {
    marginTop: 14,
    fontSize: 22,
  },
});