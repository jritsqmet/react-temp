import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen";
import ListaLocal from "../screens/ListaLocal";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator()

function MyDrawer(){
    return(
        <Drawer.Navigator initialRouteName="Lista" >
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="Lista" component={ListaLocal}/>
        </Drawer.Navigator>
    )
}

export function Drawer2(){
    return(
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}