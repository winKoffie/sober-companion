import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import { useState } from 'react';
import AuthContext from './app/auth/context';
import CommunityScreen from './app/screens/CommunityScreen';

export default function App() {
  const [user,setUser] = useState();
  return (
    <AuthContext.Provider value={{user, setUser}}>
    <NavigationContainer>
         {user ?  <AppNavigator/> : <AuthNavigator/>}  
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

