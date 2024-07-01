import React from 'react';
import { View, Text, Modal, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieDetailModal = ({ movie, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={styles.poster}
                    />
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.overview}>{movie.overview}</Text>
                    <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
                    <Text style={styles.voteCount}>Votes: {movie.vote_count}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    poster: {
        width: 200,
        height: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    overview: {
        fontSize: 16,
        marginBottom: 10,
    },
    rating: {
        fontSize: 16,
        marginBottom: 10,
    },
    voteCount: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default MovieDetailModal;
