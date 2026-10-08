import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  // state that holds the points
  const [points, setPoints] = useState(0);

  // runs every time the + button is pressed
  const increasePoints = () => {
    setPoints(points + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* App bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>My Profile</Text>
      </View>

      {/* Profile content */}
      <View style={styles.body}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
          />
        </View>

        <View style={styles.divider} />

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Diluka</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={18} color="#000" />
          <Text style={styles.rowText}>diluka.w@nsbm.ac.lk</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={18} color="#000" />
          <Text style={styles.rowText}>{points}</Text>
        </View>
      </View>

      {/* Floating + button */}
      <TouchableOpacity style={styles.fab} onPress={increasePoints}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  appBar: {
    backgroundColor: '#000',
    paddingTop: 45,
    paddingBottom: 14,
    alignItems: 'center',
  },
  appBarTitle: { color: '#fff', fontSize: 18, fontWeight: '500' },
  body: { padding: 16 },
  avatarWrapper: { alignSelf: 'center', marginTop: 10 },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  divider: { height: 1.5, backgroundColor: '#000', marginVertical: 18 },
  label: { fontWeight: 'bold', fontSize: 15, marginTop: 14 },
  value: { fontSize: 15, marginTop: 4 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  rowText: { fontSize: 15, marginLeft: 8 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});