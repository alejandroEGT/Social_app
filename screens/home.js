import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View, Button, AsyncStorage, Alert, TextInput} from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';

import Sesion from "./sesion/sesion";

export default class Home extends Component<Props> {
    
    constructor(props){
        super(props);
        this.state = { email:'', pass:''};
    }
	_login = () =>{
      var email=this.state.email;
      var pass=this.state.pass;		
			fetch('http://10.0.2.2:8000/api/auth/login_api?email='+email+'&password='+pass+'',{
		       method: "POST",
		}).then((response) => response.json()).then((responseJson) => {
      
		     if(responseJson.token != ""){
            AsyncStorage.setItem('token', responseJson.token);
            this.props.navigation.navigate("Sesion");
         }

		}).catch((error) => {
		      console.error(error);
		});
	}
  render() {
  	//const { navigate } = this.props.navigation;
    
    return (

    		<View style={styles.view_input}>
                <TextInput
                      style={{height: 40}}
                      placeholder="Email"
                      onChangeText={(text) => this.setState({email:text})}
                />
                <TextInput
                      style={{height: 40}}
                      placeholder="Password"
                       secureTextEntry
                      onChangeText={(text) => this.setState({pass:text})}
                />
    			
    				<Button
    					title="Log in"
    					onPress={this._login}
    				>
    				</Button>
    				<Button
    					title="Ir a registro"
    					onPress={()=>{ this.props.navigation.navigate('Register') }}
    				>
    				</Button>
    			
    		</View>
    	)
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_input: {
    margin:20,
  },
    buttonContainer: {
    marginTop: 20
  },

});