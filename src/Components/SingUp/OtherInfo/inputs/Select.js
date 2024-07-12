import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import { Picker } from '@react-native-picker/picker';

export default function Select({ width = 'auto', arrayInfo, placeholder }) {

    const [selected, setSelected] = useState(placeholder);

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    // function close() {
    //     pickerRef.current.blur();
    // }

    return (
        <TouchableOpacity
            onPress={() => open()}
            style={{...styles.buttonSelect, width: width}}
        >
            <Text >{selected}</Text>
            {/* Arreglar el Picker */}
            {/* <View style={{}}> */}
                <Picker
                    ref={pickerRef}
                    selectedValue={selected}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelected(itemValue)
                    }
                    style={styles.picker}
                >
                    {
                        arrayInfo && arrayInfo.map((e, i) => (
                            <Picker.Item key={i} label={e} value={e} />
                        ))
                    }
                    {/* <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="JavaScript" /> */}
                </Picker>
            {/* </View> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSelect: {
        backgroundColor: '#F5F7F8',
        height: 40,
        borderRadius: 8,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    picker: {
        // backgroundColor: '#545454',
        position: 'absolute',
        right: -10
    },
})
