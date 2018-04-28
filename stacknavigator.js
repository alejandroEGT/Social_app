import React from 'react';
import {Platform} from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import Home from "./screens/home";
import Register from "./screens/register";
import Sesion from "./screens/sesion/sesion";

/*const Stackapp = StackNavigator({
	  Home: { screen: Home, 
	  		  navigationOptions: {
		      title: "Home"
		    } },
	  Register: { screen: Register,
	  			navigationOptions: {
			      title: "Registro"
			    }
	   },
	   Sesion: { screen: Sesion,
	   			navigationOptions:{
	   				title: "Mi cuenta"
	   			}
	   }
},
{
     headerMode: 'none',
    
     initialRouteName: 'Home',
     navigationOptions: {
	   	headerStyle: {
	    		backgroundColor: 'steelblue',
				paddingLeft: 10,
				paddingRight: 10,
	    },
	    headerTintColor: '#fff',
	    headerTitleStyle: {
	      fontWeight: 'bold',
	    },
  	 },


 }
);*/


const EventTab = TabNavigator({
    Login: {screen: Home},
    Register: {screen: Register},
   
},
    {
  initialRouteName: "Login",
  cardStyle:{
      backgroundColor:'white'
  },
   tabBarPosition: 'top',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'red' : 'white',
    inactiveTintColor: Platform.OS === 'ios' ? 'black' : 'gray',
     activeTintColor: '#e91e63',
     labelStyle: {
      fontSize: 14,
     },
  },
}
);

const EventStack = StackNavigator({
    Home: {screen: EventTab},
    Sesion: { screen: Sesion,
	   			navigationOptions:{
	   				title: "Mi cuenta"
	   			}
	   }
},{
	headerMode: 'none',
});

export default EventStack;
//export default Stackapp;