import React, { Component, Fragment } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    Image,
    Dimensions,
    Alert, 
    TouchableOpacity,
    Platform, 
    StyleSheet 
} from 'react-native';
import {SearchBar, Header, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from '../assets/img/gundam.png';
import LoginLogo from '../assets/img/login-logo.png';
import LoginDoctor from '../assets/img/login-doctor.png';

import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import LeftHeaderLogin from '../components/leftHeaderLogin';
import { TextField } from 'react-native-material-textfield';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test : ''
        };
    }

    lihatSemua = () => {
        alert('lihat semua')
    }

    render () {
        return (
            <SafeAreaView style={styles.container}>                                 
                    <Header
                        placement="left"
                        leftComponent={<LeftHeaderLogin onBack={() => alert('back')}/>}
                        leftContainerStyle={{width: Dimensions.get('window').width/2}}
                        containerStyle={{
                            flex: 0, 
                            backgroundColor: 'transparent', 
                            borderBottomWidth: 0, 
                            height: 80,
                            //backfaceVisibility: 'hidden',
                        }}
                        style={{opacity: 0.1}}
                        //backgroundColor={'transparent'}
                    />
                    <ScrollView style={{width: '100%'}}>
                    <Image style={{alignSelf: 'center', height: 80, width: 249, marginTop: 20, marginBottom: 30}} source={LoginLogo}/>
                    <Image style={{alignSelf: 'center', height: 210, width: 292, marginBottom: 30}} source={LoginDoctor}/>
                    <TextField
                        label='No Peserta'
                        labelTextStyle={{fontFamily: 'Montserrat-LightItalic'}}
                        //containerStyle={styles.search}
                        containerStyle={styles.search}
                        inputContainerStyle={{marginLeft: 10, marginRight: 5}}
                        lineWidth={0}
                        labelHeight={20}
                        fontSize={15}
                        inputContainerPadding={8}
                    />
                    <TextField
                        label='Password'
                        labelTextStyle={{fontFamily: 'Montserrat-LightItalic'}}
                        containerStyle={styles.search}
                        inputContainerStyle={{marginLeft: 10, marginRight: 5}}
                        lineWidth={0}
                        labelHeight={20}
                        fontSize={15}
                        inputContainerPadding={8}
                        secureTextEntry={true}
                    /> 
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 5, marginRight: 15}}>
                        <Text style={{color: '#2C338B', fontFamily: 'Montserrat-LightItalic'}}>Lupa Password </Text>
                        <TouchableOpacity onPress={() => alert('daftar cuy')}>
                            <Text style={{color: '#2C338B', fontFamily: 'Montserrat-Bold'}}>(?)</Text>
                        </TouchableOpacity>                            
                    </View>                
                    <View style={styles.bottomContainer}>
                        <Button onPress={() => alert('login')} buttonStyle={{width: '90%', alignSelf: 'center', backgroundColor: '#2C338B'}} title='Login'/>
                        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                            <Text style={{color: '#2C338B', fontFamily: 'Montserrat-LightItalic'}}>Belum punya akun? </Text>
                            <TouchableOpacity onPress={() => alert('daftar cuy')}>
                                <Text style={{color: '#2C338B', fontFamily: 'Montserrat-Bold'}}>Daftar</Text>
                            </TouchableOpacity>                            
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
    },
    h0: {
        color: '#008F68',
        fontSize: 24,
        alignSelf: 'center'
    },
    h1: {
        color: '#008F68',
        fontSize: 40,
    },
    h2: {
        color: '#FAE042',
        fontSize: 18,
        marginTop: 8,
    },
    image: {
        width: 300,
        height: 260,
        justifyContent: 'center',
    },
    logo: {
        flex: 1, 
        maxHeight: 40, 
        maxWidth: 40, 
        alignSelf: 'center', 
        marginLeft: 20, 
        marginRight: 10
    },
    search: {
        borderWidth: 1, 
        borderColor: '#bfc7ce', 
        borderRadius: 5, 
        backgroundColor: '#CAD1D7',
        //marginLeft: 10, 
        //marginRight: 10,
        marginBottom: 10,
        flex: 1,
        width: '90%',
        alignSelf: 'center'
    },
    header: {
        maxHeight: 60, 
        backgroundColor: '#fff', 
        //flex: 1, 
        width: '100%', 
        margin: 0,
        flexDirection: 'row'
    },
    button : {
        flex : 1,
        width : 800,
        backgroundColor: '#008F68',
        color: '#008F68'
    },
    button2 : {
        margin: 2, 
        height: 100, 
        width: 100, 
        backgroundColor: '#000', 
        borderRadius: 5
    },
    button3 : {
        margin: 5, 
        height: 90, 
        width: 80, 
        backgroundColor: '#000', 
        borderRadius: 25
    },
    topContainer: {
        flex: 2,
        //margin: 0
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    middleContainer: {
        //flex: 2,
        justifyContent: 'flex-start',
        //alignItems: 'center',
        //marginTop: 5,
        marginTop: 1,
        height: 240
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 30,
        marginBottom: 50
        //padding: 10,
    },
    buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    },
});