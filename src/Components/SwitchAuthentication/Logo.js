import React, { useState } from 'react'
import { Image, View } from 'react-native'

export default function Logo () {
    return (
      <View style={{width: '100%', alignItems: 'center', paddingRight: 40}}>
        <Image
          style={{width: 170, height: 35,}}
          source={require('../../images/Logo.png')}
        />
      </View>
    )
}