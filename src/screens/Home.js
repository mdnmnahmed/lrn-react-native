import React from 'react';
import { SafeAreaView, ImageBackground, Text, View, ScrollView, TextInput, Touchable, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';
import { sliderData } from '../modals/data';

const Home = () => {

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
                            Hello, Numan
                        </Text>
                        <ImageBackground
                            source={require('../assets/images/users/avatar-9.jpg')}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', borderColor: '#C6C6C6', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, marginTop: 10 }}>
                        <Feather name="search" size={20} color="#C6C6C6" style={{ marginRight: 5 }} />
                        <TextInput placeholder='Search..' />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
                            Trendings 🔥
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#0aadaB' }}>Show More</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <SimpleCarousel
                            data={sliderData}
                            renderItem={(props, i, width) => {
                                return (
                                    <Banner
                                        id={`${props.title}_${i}`}
                                        source={props.img}
                                        width={width}
                                    // onPress={(id) => console.log(`${id} was tapped.`)}
                                    />
                                )
                            }}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default Home;