import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../colors'
import Carousel from 'react-native-reanimated-carousel/src/';
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'

// App Structure
import AppStructure from '../AppStructure/AppStructure';

export default function LandingPage({navigation: {navigate}}) {

    const [indexImage, setIndexImage] = useState(0)

    const sectionImg = [
        0, 1, 2
    ]

  return (
    <AppStructure>
        <View>

            <View style={styles.containerCarousel}>
                <Carousel
                    loop
                    width={300}
                    height={'100%'}
                    autoPlay={true}
                    mode="normal-horizontal"
                    data={[image1, image2, image3]}
                    scrollAnimationDuration={2000}
                    onSnapToItem={(index) => setIndexImage(index)}
                    renderItem={({item}) => (
                        <View
                            style={styles.containerImage}
                        >
                            <Image style={styles.image} source={item} />
                        </View>
                    )}
                />
            </View>

            <View style={styles.sectionBalls}>
                {
                    sectionImg.map((e, i) => 
                        <View key={i} style={{...styles.sectionBall, backgroundColor: indexImage === e ? '#fff' : '#989898'}}>
                        </View>
                    )
                }
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate('Singup')}
                >
                    <Text>Empezar</Text>
                </TouchableOpacity>
            </View>

            <Text style={{...styles.text, marginVertical: 15}}>¿Ya tienes una cuenta?</Text>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    onPress={() => navigate('Signin')}
                >
                    <Text style={{...styles.text, fontSize: 20}}>Inicia Sesión</Text>
                </TouchableOpacity>
            </View>

        </View>
    </AppStructure>
  )
}

const styles = StyleSheet.create({
    containerButton: {
        width: 300,
        alignItems: 'center',
        // backgroundColor: '#989898'
    },
    button: {
        backgroundColor: '#F9D949',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 999,
        marginTop: 10,
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    },
    containerImage: {
        objectFit: 'cover',
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '100%'
    },
    containerCarousel: {
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionBall: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: '#fff'
    },
    sectionBalls: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        marginBottom: 10,
        marginTop: 5
    }
})
