import React from 'react';
import {AsyncStorage} from 'react-native';

export const getUser = token => {
  return fetch('http://10.0.2.2:8000/api/auth/user',{method: "GET",headers: {'Authorization': 'Bearer '+ token}})
			.then((response) => response.json())
}
export const getComent = token => {
  return fetch('http://10.0.2.2:8000/api/auth/comment',{method: "GET",headers: {'Authorization': 'Bearer '+ token}})
			.then((response) => response.json())
}
