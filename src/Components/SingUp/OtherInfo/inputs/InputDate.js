import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Fontisto'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function InputDate() {

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode
      });
    };

    const showDatepicker = () => {
        showMode('date');
    };

  return (
    <Icon.Button
        name='date'
        onPress={showDatepicker}
        style={{height: 40}}
        color={'#000'}
        backgroundColor={'#F9D949'}
        borderRadius={8}
    >
        {/* <Text style={{color: '#fff'}}>{date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()}</Text> */}
        <Text>
            {date.toLocaleDateString()}
        </Text>
        <IconMaterialIcons name='keyboard-arrow-down' style={{marginLeft: 2}} size={15} />
    </Icon.Button>
  )
}