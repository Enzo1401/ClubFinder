import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router, useRouter } from 'expo-router';

export default function Paramètres() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ClubFinder</Text>
      </View>
  
    

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.localisation} onPress={() => router.push('/parametres/localisation')}>
        <Text style={styles.buttonText}>Paramètres de localisation</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.email} onPress={() => router.push('/parametres/email')}>
        <Text style={styles.buttonText}>Modifier l'adresse mail</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.mdp} onPress={() => router.push('/parametres/motdepasse')}>
        <Text style={styles.buttonText}>Modifier le mot de passe</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.deconnexion} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>se déconnecter</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.supprimer} onPress={() => router.push('/parametres/supprimer')}>
        <Text style={styles.buttonText}>Supprimer mon compte</Text>
      </TouchableOpacity>
    </View>
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

    
    buttonContainer: {
        marginVertical: 20,
        width: '100%',
        alignItems: 'center',
    },
    localisation: {
        backgroundColor: '#B3995B',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginVertical: 8,
    },
    email:{
      backgroundColor: '#B3995B',
      padding: 16,
      borderRadius: 8,
      width: '100%',
      alignItems: 'center',
      marginVertical: 8,
    },
    mdp:{
      backgroundColor: '#B3995B',
      padding: 16,
      borderRadius: 8,
      width: '100%',
      alignItems: 'center',
      marginVertical: 8,
    },
    deconnexion:{
      backgroundColor: '#B3995B',
      padding: 16,
      borderRadius: 8,
      width: '100%',
      alignItems: 'center',
      marginVertical: 8,
    },
    supprimer:{
      backgroundColor: '#FF0000',
      padding: 16,
      borderRadius: 8,
      width: '100%',
      alignItems: 'center',
      marginVertical: 8,
    },
    button: {
        backgroundColor: '#B3995B',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    });
