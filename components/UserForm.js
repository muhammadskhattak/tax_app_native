import React from 'react';
import {
    Button,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
import { WebBrowser } from 'expo';

export default class UserFormMine extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        firstname:'',
        lastname:'',
        email:'',
        username:'',
        income:0,
        alertVisible:false,
    }

    submitForm = event => {
        event.preventDefault();
        const person = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            username: this.state.username,
            income: this.state.income
        };
        if (person.firstname && person.lastname && person.email && person.username && person.income){
            console.log("Success");
        } else {
            console.log("Error sending JSON object to backend")
        }
    }

    render(){
        return (
            <View>
                <Text>First Name</Text>
                <TextInput style={{borderColor: 'black', borderWidth: 5}} onChangeText={(text) => this.setState({firstname: text})} value={this.state.text} />
                <Text>Last Name</Text>
                <TextInput style={{borderColor: 'black', borderWidth: 5}} onChangeText={(text) => this.setState({lastname: text})} value={this.state.text} />
                <Text>Email</Text>
                <TextInput style={{borderColor: 'black', borderWidth: 5}} onChangeText={(text) => this.setState({email: text})} value={this.state.text} />
                <Text>Username</Text>
                <TextInput style={{borderColor: 'black', borderWidth: 5}} onChangeText={(text) => this.setState({username: text})} value={this.state.text} />
                <Text>Income</Text>
                <TextInput style={{borderColor: 'black', borderWidth: 5}} onChangeText={(text) => this.setState({income: parseFloat(text)})} value={this.state.text} />
                <Button title="Submit" onPress={this.submitForm}/>
            </View>
        );
    }
}