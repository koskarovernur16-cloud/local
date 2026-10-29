import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>О нашем проекте</Text>
            <Text style={styles.text}>
                Мы создаём новый проект вместе!
            </Text>
            <Text style={styles.info}>
                Версия проекта: 1.0
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3E8FF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6A1B9A',
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        color: '#333333',
        textAlign: 'center',
        marginBottom: 12,
    },
    info: {
        fontSize: 14,
        color: '#777777'
    },
});