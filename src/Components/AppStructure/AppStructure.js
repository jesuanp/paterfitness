import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../colors'

export default function AppStructure({children}) {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.background
    }
})
