
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View, Image, AsyncStorage, ScrollView} from 'react-native';
import {getUser, getComent} from '../../response';
import renderIf from '../../renderIf.js';
export default class HomeSesion extends Component <Props>{
	constructor(props){
		super(props);

		this.state={
			name:'', avatar:'', coment:[]
		}
	}
	componentDidMount(){
		AsyncStorage.getItem('token').then(token => { 	
			getUser(token).then((responseJson) => {
				this.setState({
		            name: responseJson.data.nombres,
		            avatar: 'http://10.0.2.2:8000/'+responseJson.data.avatar
		        });							      	
			}).catch((error) =>{console.error(error);});

			getComent(token).then((responseJson) => {
				console.log(responseJson)
				this.setState({ coment: responseJson })
			})
		})
	}
	getLoop(){
		return this.state.coment.map((proj, i) => {
           				
	                 return ( <View key={i} style={{backgroundColor: '#F5FCFF',flex:1, margin:5,flexDirection: 'column',
        				justifyContent: 'space-between', }}>
	                    		<View key={i} style={{flex: 1, flexDirection: 'row'}}>
	                    			 <View style={{width: 60, height: 60}}>
										 <Image
										  key="1" style={{ flex: 1, margin:10}}
									      source={{uri: "http://10.0.2.2:8000/"+proj.avatar+""}}
									       height={40}
										      width={40}
											  borderRadius={20}
										  />
										
								     </View>	
								     <View key={i} style={{width: 160}}>	  
											<Text key="1" 
											style={{ color:'black', fontSize:10, marginTop:10, marginLeft:1 }}>
												{proj.nombres}
											</Text>
									</View>	

								</View>	

								 <View style={{flex: 2}} >
											<View style={{marginTop:10,marginLeft:1}}>
												<Text key="1" style={{ margin:5 }}>{proj.texto}</Text>

												{renderIf( proj.foto != null) (
													 <Image
														  key="1" style={{ resizeMode: 'cover' }}
													      source={{uri: "http://10.0.2.2:8000/"+proj.foto+""}}
													       height={300}
														  />
												 )}
												 
											</View>
								</View>	

								<View style={{border:'#D4E6F1', flex:3,flexDirection:'row', padding:10 }} >
									<Text>10 Like</Text>
									<Text> 5Comment</Text>
								</View>
							</View>
						)
	                        
	                    
                   } )
	}
	render() {
        return (
           <ScrollView style={{flex:1,  flexDirection: 'column',
        }} >
           		{this.getLoop()}
        
            </ScrollView>
         
        );
      }
}

const styles = StyleSheet.create({
	avatar:{
	  	width: 50, 
	  	borderRadius:50,
	  	margin: 5,
  }
})