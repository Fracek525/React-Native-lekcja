import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{
      '▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n█ ▄▄▄▄▄ █▄▄████ ███ ▄▄▄▄▄ █\n█ █   █ █ ▀█ ▄ ▄▄██ █   █ █\n█ █▄▄▄█ █▄ ▄▄▀██▄▀█ █▄▄▄█ █\n█▄▄▄▄▄▄▄█▄▀▄▀▄█▄▀▄█▄▄▄▄▄▄▄█\n█▄▄  ▀▀▄█ ▀████▀██▄██▄ ▄▀▄█\n██▀▀█▄▀▄  ██▀▀▀██ █ ▀██▀███\n██▀█▄ ▀▄ ▀ ▀ ▄ █ ▄█ ▄ █ █▀█\n█▀▄ ▄▀ ▄▄█▀▀█▀███ ▀▀█▀▀█ ▀█\n███▄██▄▄▄▀▄▀ ▄  ▄ ▄▄▄ ▀▄█▀█\n ▄▄▄▄▄ ██ ▄▀▄███ █▄█ █▄  █\n█ █   █ █▀█▀▀ ▀▀▀▄▄   █▀▀ █\n█ █▄▄▄█ █  ▀▄█▀ ▀▄▀▄█▄▄ ▄██\n█▄▄▄▄▄▄▄█▄▄███▄█▄██████▄▄▄█\n'
    }
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
    color:'white',
  },
});
