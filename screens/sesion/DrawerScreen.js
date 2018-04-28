import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
import SideMenu from './sideMenu';

import Home from './home';


			

const DrawerScreen = DrawerNavigator({

	Home: {screen: Home},

	
},
	{
        headerMode: 'screen',
        drawerPosition: 'right',
        contentComponent: SideMenu,
  		drawerWidth: 300

    }
);


export default DrawerScreen;