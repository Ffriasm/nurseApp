import react from 'react';
import { View, StyleSheet, FlatList, Image, Text, Dimensions } from 'react-native';

const services = [
  {
    id: '1',
    title: 'Inyecciones a domicilio',
    description: 'Aplicación segura de medicamentos por profesionales.',
    image: require('../../../assets/images/inyecciones.jpg'),
  },
  {
    id: '2',
    title: 'Curaciones de heridas',
    description: 'Atención especializada para heridas y úlceras.',
    image: require('../../../assets/images/curaciones.jpg'),
  },
  {
    id: '3',
    title: 'Control de signos vitales',
    description: 'Toma de presión, frecuencia cardíaca y más.',
    image: require('../../../assets/images/signosVitales.jpg'),
  },
  {
    id: '4',
    title: 'Cuidados postoperatorios',
    description: 'Asistencia en la recuperación tras cirugías.',
    image: require('../../../assets/images/postoperatorio.jpg'),
  }
];

const { width } = Dimensions.get('window');

const Carousel = () => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={services}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={true}
            snapToInterval={width - 40}
            snapToAlignment="center"
            decelerationRate="fast"
            />
        </View>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    container:{
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f9ff',
    },
    card: {
        width: width * 0.8,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 'auto',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
})