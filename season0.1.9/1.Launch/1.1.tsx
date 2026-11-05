import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function FinanceMark() {
  return (
    <View style={styles.mark}>
      <View style={[styles.bar, styles.barOne]} />
      <View style={[styles.bar, styles.barTwo]} />
      <View style={[styles.bar, styles.barThree]} />
      <View style={[styles.bar, styles.barFour]} />
      <View style={[styles.arrowLine, styles.arrowLeft]} />
      <View style={[styles.arrowLine, styles.arrowMiddle]} />
      <View style={[styles.arrowLine, styles.arrowRight]} />
      <View style={[styles.arrowHead, styles.arrowHeadLong]} />
      <View style={[styles.arrowHead, styles.arrowHeadShort]} />
    </View>
  );
}

export default function LaunchScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.brand}>
        <FinanceMark />
        <Text style={styles.wordmark}>FinWise</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C99A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    alignItems: 'center',
    transform: [{ translateY: 18 }],
  },
  mark: {
    width: 102,
    height: 78,
    position: 'relative',
    marginBottom: 3,
  },
  bar: {
    position: 'absolute',
    bottom: 3,
    width: 12,
    borderWidth: 5,
    borderColor: '#075B4C',
    borderBottomWidth: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  barOne: { left: 13, height: 23 },
  barTwo: { left: 34, height: 35 },
  barThree: { left: 55, height: 48 },
  barFour: { left: 76, height: 61 },
  arrowLine: {
    position: 'absolute',
    height: 5,
    backgroundColor: '#075B4C',
    borderRadius: 3,
  },
  arrowLeft: {
    width: 37,
    left: 1,
    top: 36,
    transform: [{ rotate: '-45deg' }],
  },
  arrowMiddle: {
    width: 36,
    left: 29,
    top: 31,
    transform: [{ rotate: '-45deg' }],
  },
  arrowRight: {
    width: 28,
    left: 56,
    top: 15,
    transform: [{ rotate: '-45deg' }],
  },
  arrowHead: {
    position: 'absolute',
    width: 5,
    height: 16,
    left: 81,
    top: 1,
    backgroundColor: '#075B4C',
    borderRadius: 3,
  },
  arrowHeadLong: { transform: [{ rotate: '0deg' }] },
  arrowHeadShort: {
    left: 73,
    top: 1,
    height: 12,
    transform: [{ rotate: '-90deg' }],
  },
  wordmark: {
    color: '#FFFFFF',
    fontSize: 31,
    lineHeight: 37,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
});
