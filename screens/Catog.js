import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

const Catog = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
            <View style={styles.container}>
                <Text style={{color:"white",fontSize:20, marginLeft:'10%',marginTop:'5%',marginRight:'15%'}}>Amazing Courses are Here...</Text>
                <View style={styles.superimages}>
                    <TouchableOpacity onPress={()=>navigation.navigate('WebApps')}>
                        <Image resizeMode="stretch" style={{width:320,height:150}} source={require('../assets/super1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('MobApps')}>
                        <Image resizeMode="stretch" style={{width:320,height:150}} source={require('../assets/super2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('StdApps')}>
                        <Image resizeMode="stretch" style={{width:320,height:150}} source={require('../assets/super3.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001737',
    },
    images: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'row' ,
    },
    superimages: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'column' ,
    },
});

export default Catog