import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image ,StyleSheet, AsyncStorage} from 'react-native';




class SideMenu extends Component {

  constructor(props){
      super(props);
      this.state = {
          token:'',
          proyectos : [],
          personas : [],
      }
     
  }
    navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);

    }

  componentWillMount(){

      /*AsyncStorage.getItem('token').then(token => { 
          getProyecto(token).then((responseJson) => {
            this.setState({
              proyectos: responseJson.user
            })
            //console.log(this.state.proyectos)
          })
          .catch((error) =>{
            console.error(error);
          });

          getContacto(token).then((responseJson) => {
            this.setState({
              personas: Object.values(responseJson['personas'])
            })
            //console.log(this.state.personas)
          })
          .catch((error) =>{
            console.error(error);
          });    

      })*/

  };


  render () {
    return (
      <View >
        <ScrollView>
          <View>
            <Text style={styles.texto}>
              
              Home 
            </Text>
            <View >
              <Text style={styles.textoChild}  onPress={this.navigateToScreen('Home')}>
              Inicio
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.texto}>
               
               Proyectos
            </Text>
            
            <View >
            
            </View>
          </View>
          <View>
            <Text style={styles.texto}>
              
              Contactos 
            </Text>
            <View >
              
             
            </View>
          </View>
        </ScrollView>
        <View >
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
	texto:{
		fontSize:20,
		padding:7,
		backgroundColor:'#3498DB',
		color: 'white',
	},
	textoChild:{
		fontSize:15,
		padding: 5,
		color:'#5D6D7E',
	},
  avatar: {
    width: 35, height: 35
  }
})

export default SideMenu;