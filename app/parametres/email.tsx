import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { router, useRouter } from 'expo-router';

export default function paramètres() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <Text style={styles.title}></Text>
    <Text style={styles.title}>ClubFinder</Text>
    </View>
    <Text style={styles.text}>changer d'email</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonautoriser} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>Oui</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonrefuser} onPress={() => router.push('/main/parametre')}>
        <Text style={styles.buttonText}>Non</Text>
      </TouchableOpacity>
      </View>

    </View>

  )};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151515',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        position: 'absolute',
        top: 50, 
        left: 130,
        width: 215,
        height: 46, 
      },
      title: {
        fontSize: 32,
        color: '#B3995B',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#B3995B',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#B3995B',
    },
    buttonContainer: {
        marginVertical: 16,
        width: '100%',
        alignItems: 'center',
    },
    buttonautoriser: {
        backgroundColor: '#00FF00',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonrefuser: {
        backgroundColor: '#FF0000',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 16,
    },
    });