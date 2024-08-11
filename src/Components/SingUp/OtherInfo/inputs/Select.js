import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';

export default function Select({  onChangeInputs, nameInput, width = 'auto', arrayInfo, placeholder }) {

    const [selected, setSelected] = useState(placeholder);

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    // function close() {
    //     pickerRef.current.blur();
    // }

    useEffect(() => {
        if(selected != placeholder) onChangeInputs(selected, nameInput)
    }, [selected])

    return (
        <TouchableOpacity
            onPress={() => open()}
            style={{...styles.buttonSelect, width: width}}
        >
            <Text >{selected}</Text>
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
                </Picker>
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
