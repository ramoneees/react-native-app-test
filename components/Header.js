import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Header.style'


const Header = (props) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>{props.title}</Text>
    </View>
)

export default Header