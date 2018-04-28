import React, { Component }  from 'react';
import { View, Text, AsyncStorage, Image} from 'react-native';
import {getUser} from '../../response.js';
export default class Profile extends Component {
	constructor(props){
		super(props);
		this.state={
			name:'', avatar:''
		}
	}
	componentDidMount(){
		AsyncStorage.getItem('token').then(token => { 
			getUser(token).then((responseJson) => {
				this.setState({
		            name: responseJson.data.nombres,
		            avatar: 'http://10.0.2.2:8000/'+responseJson.data.avatar
		        });					      	
			}).catch((error) =>{
					console.error(error);
			});
		});
	}

	render(){
		return(
			<View style={{flexDirection: 'row'}}>
				 <Image
				 	  key="1" style={{ flex: 1,}}
							      source={{uri: ""+this.state.avatar+""}}
							      height={40}
							      width={40}
								  borderRadius={20}
									        />
				<Text key="1" 
				style={{ color:'white', fontSize:10, marginTop:10, marginLeft:3 }}>
					{this.state.name}
					</Text>
			</View>			
		);
	}
}
