import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 100, 126)');

  const changeBackground = () => {
    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;

    setRandomColor(color);
  };

  const resetBackground = () => {
    let color = 'rgb(0, 0, 0)';
    setRandomColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <Text style={[styles.desc]}>
          Current background Color : {randomColor}
        </Text>
        <TouchableOpacity onPress={changeBackground}>
          <Text style={styles.text}>Change Color</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetBackground}>
          <Text style={styles.text}>Reset to Black</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  desc: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default App;
