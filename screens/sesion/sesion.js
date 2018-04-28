import React, { Component }  from 'react';
import { StackNavigator } from "react-navigation";
import { View, Text, TouchableHighlight, Button , Alert, AsyncStorage, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerScreen from './DrawerScreen';
import Profile from './profile.js';


const DrawerNavigation = StackNavigator({
	Home: {screen: DrawerScreen}
	},
	{
		headerMode:'screen',
		navigationOptions: ({navigation, data}) => ({
			headerStyle: {
				backgroundColor: '#3498DB',
				paddingLeft: 10,
				paddingRight: 10
			},
			title:'',
			headerTintColor: 'white',
			headerRight: <View>
							<TouchableHighlight
								onPress={()=>{
									if (navigation.state.index == 0) {
										navigation.navigate('DrawerOpen')
									}else{
										navigation.navigate('DrawerClose')
									}
								}}
							>
								<Icon name="bars" size={30} color="white" />	
							</TouchableHighlight>
						</View>
			,
			headerLeft: <Profile />

		})
	}
)

//export default DrawerNavigation;

export default class MiSession extends Component {

	constructor(props){
		super(props);

		this.state={
			name:'', avatar:''
		}
	}
	
  render() {
    return (
      <DrawerNavigation />

    );
  }
}