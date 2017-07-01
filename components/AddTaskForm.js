import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import styles from './AddTaskForm.style'

export default class AddTaskForm extends Component {
    state = {
        taskName: ""
    }
    onAdd = () => {
        this.props.onTaskAdd(this.state.taskName)
        this.setState({ taskName: "" })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.taskName}
                    onChangeText={taskName => this.setState({taskName})} />
                <TouchableHighlight style={styles.button}
                    onPress={this.onAdd}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
} 