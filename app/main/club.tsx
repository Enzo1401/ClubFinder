import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function ClubList() {
  // Liste simple de boîtes de nuit avec des noms et des images
  const clubs = [
    {
      id: '1',
      name: 'Le Pachamama',
      image: 'https://www.reserverbarparis.fr/wp-content/uploads/2022/11/Pacha-Mama-Salle-RDC.jpg',
      description: 'Club-restaurant inspiré Amérique du Sud proposant de la musique et des danses traditionnelles, et des plats comme le ceviche.',
    },
    {
      id: '2',
      name: 'Metropolis',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3HDaToWyiw_y6mWMom3W2ALg_e-a__Jhlw&s',
      description: 'Grande boîte de nuit comprenant 4 salles à thème colorées, chacune avec un DJ résident et des rythmes allant de la pop au hip-hop.',
    },
    {
      id: '3',
      name: "L'Arc",
      image: 'https://s3.amazonaws.com/a.storyblok.com/f/116532/1440x1440/ffbe2e8e1e/l-arc-paris-club.webp',
      description: 'Discothèque chic à la déco avant-gardiste, avec une carte des champagnes et un jardin sur le toit offrant une vue sur la ville.',
    },
  ];

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <Text style={styles.title}>Nos soirées</Text>

      {/* Liste des clubs */}
      <FlatList
        data={clubs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clubCard}>
            <Image source={{ uri: item.image }} style={styles.clubImage} />
            <View style={styles.clubInfo}>
              <Text style={styles.clubName}>{item.name}</Text>
              <Text style={styles.clubDescription}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Plus d'info</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B3995B',
    textAlign: 'center',
    marginVertical: 20,
  },
  clubCard: {
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  clubImage: {
    width: '100%', // Prend toute la largeur de la carte
    height: 230, // Ajustez la hauteur selon vos besoins
    borderRadius: 10,
  },
  clubInfo: {
    marginTop: 10, // Ajoute un espace entre l'image et les infos
    backgroundColor: '#fff', // Fond blanc
    padding: 10, // Ajoute un peu d'espace autour du texte
    borderRadius: 5, // Bords arrondis
  },
  clubName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Texte noir
  },
  clubDescription: {
    fontSize: 14,
    color: '#000', // Texte noir
    marginTop: 5,
  },
  button: {
    backgroundColor: '#B3995B',
    paddingVertical: 5,
    paddingHorizontal: 143,
    borderRadius: 5,
    marginTop: 10, // Ajoute un espace entre la description et le bouton
    alignSelf: 'flex-start', // Aligne le bouton à gauche
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});