import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CustomSwitch = ({ selectedSwitch, switchButtons, setSelectedSwitch }) => {

    return (
        <View style={{ height: 44, width: '100%', backgroundColor: '#e4e4e4e4', borderRadius: 10, borderColor: '#AD40AF', flexDirection: 'row', justifyContent: 'center' }}>
            {switchButtons?.map((switchButton, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    onPress={() => setSelectedSwitch(switchButton)}
                    style={{
                        flex: 1,
                        backgroundColor: selectedSwitch === switchButton ? '#AD40AF' : '#e4e4e4',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: selectedSwitch === switchButton ? 'white' : 'black',
                            fontSize: 14,
                            fontWeight: 'bold',
                            textTransform: 'uppercase'
                        }}
                    >
                        {switchButton}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default CustomSwitch;