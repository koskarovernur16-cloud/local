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

export default function LaunchWelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <FinanceMark />
        <Text style={styles.wordmark}>FinWise</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Text>

        <View style={styles.actions}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>Log In</Text>
          </View>
          <View style={styles.signupButton}>
            <Text style={styles.signupText}>Sign Up</Text>
          </View>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FFF3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    transform: [{ translateY: 12 }],
  },
  mark: {
    width: 82,
    height: 67,
    position: 'relative',
    marginBottom: 1,
  },
  bar: {
    position: 'absolute',
    bottom: 2,
    width: 10,
    borderWidth: 4,
    borderColor: '#00C99A',
    borderBottomWidth: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  barOne: { left: 10, height: 19 },
  barTwo: { left: 27, height: 29 },
  barThree: { left: 44, height: 40 },
  barFour: { left: 61, height: 50 },
  arrowLine: {
    position: 'absolute',
    height: 4,
    backgroundColor: '#00C99A',
    borderRadius: 3,
  },
  arrowLeft: {
    width: 30,
    left: 1,
    top: 31,
    transform: [{ rotate: '-45deg' }],
  },
  arrowMiddle: {
    width: 29,
    left: 23,
    top: 26,
    transform: [{ rotate: '-45deg' }],
  },
  arrowRight: {
    width: 23,
    left: 45,
    top: 13,
    transform: [{ rotate: '-45deg' }],
  },
  arrowHead: {
    position: 'absolute',
    width: 4,
    height: 13,
    left: 65,
    top: 1,
    backgroundColor: '#00C99A',
    borderRadius: 3,
  },
  arrowHeadLong: { transform: [{ rotate: '0deg' }] },
  arrowHeadShort: {
    left: 59,
    top: 1,
    height: 10,
    transform: [{ rotate: '-90deg' }],
  },
  wordmark: {
    color: '#00C99A',
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  description: {
    maxWidth: 210,
    marginTop: 1,
    color: '#52635D',
    fontSize: 8,
    lineHeight: 10,
    textAlign: 'center',
  },
  actions: {
    width: '100%',
    maxWidth: 210,
    alignItems: 'center',
    marginTop: 35,
  },
  loginButton: {
    width: '58%',
    minHeight: 39,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00C99A',
    borderRadius: 24,
  },
  loginText: {
    color: '#073E35',
    fontSize: 14,
    fontWeight: '700',
  },
  signupButton: {
    width: '58%',
    minHeight: 39,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    backgroundColor: '#DDF6E3',
    borderRadius: 24,
  },
  signupText: {
    color: '#17483D',
    fontSize: 14,
    fontWeight: '700',
  },
  forgot: {
    marginTop: 9,
    color: '#173F37',
    fontSize: 9,
    fontWeight: '600',
  },
});
