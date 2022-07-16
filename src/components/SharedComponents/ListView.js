import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { windowWidth } from '../../utils/Dimensions';

const ListView = ({ img, title, tag, btnTxt }) => {
    return (
        <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={img}
                    style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
                />
                <View style={{ width: windowWidth - 200 }}>
                    <Text numberOfLines={1} style={{ color: '#333', fontSize: 16, fontWeight: '500' }}>{title}</Text>
                    <Text numberOfLines={1} style={{ color: '#333', fontSize: 12, marginTop: 2, borderRadius: 4 }}>{tag}</Text>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#0aada8', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 14 }}>
                    {btnTxt}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default ListView;