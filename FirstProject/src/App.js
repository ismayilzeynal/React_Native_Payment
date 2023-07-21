import React from "react";
import { StyleSheet, View } from "react-native";
import Home from './components/Home';
import Landing from './components/Landing';



function App() {
    return (
        <View style={styles.Card}>
            <Home/>
            {/* <Landing/> */}
        </View>
    );
}
export default App;


const styles = StyleSheet.create({
    Card: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 31
    }
});