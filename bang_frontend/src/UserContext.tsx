import {createContext} from 'react'

export const UserContext = createContext([{
    userid:'',
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
}]);