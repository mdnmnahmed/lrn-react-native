import React from 'react';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Image, ImageBackground, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView  {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6x' }}
            >
                <ImageBackground source={require('../../assets/images/small/img3.jpg')}
                    style={{ padding: 20 }}
                >
                    <Image source={require('../../assets/images/users/avatar-9.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text style={{ color: 'white', fontSize: 16 }}> Numan </Text>
                    <Text style={{ color: 'light gray' }}> Full Stack Dev </Text>
                </ImageBackground>
                <View style={{ backgroundColor: '#fff', flex: 1, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity
                    onPress={() => null}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name='share-social-outline' size={22} />
                        <Text style={{ color: 'black', fontSize: 16, marginLeft: 5 }}>Share with Friends</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => null}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name='exit-outline' size={22} />
                        <Text style={{ color: 'black', fontSize: 16, marginLeft: 5 }}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;