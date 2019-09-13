import React, { Component, Fragment } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    FlatList,
    Dimensions,
    Alert, 
    TouchableOpacity,
    Platform, 
    StyleSheet 
} from 'react-native';
import {SearchBar, Header, Input, Button, Image, Overlay, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from '../assets/img/gundam.png';
import LoginLogo from '../assets/img/login-logo.png';
import LoginDoctor from '../assets/img/login-doctor.png';
import History from '../assets/img/history.png';
import Dialog from 'react-native-popup-dialog';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Pasien from '../assets/img/pp.jpg';

import { SafeAreaView } from 'react-navigation';
import { ScrollView} from 'react-native-gesture-handler';
import LeftHeaderLogin from '../components/leftHeaderLogin';
import { TextField } from 'react-native-material-textfield';
import login from './login';
import CardPasien from '../components/cardPasien';
import CardProfile from '../components/cardProfile';

export default class Akun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test : '',
            islogin : false,
            visible : null,
            history : [
                    { title: 'Cek Gula dan Darah', tgl: '12-08-2018' }, 
                    { title: 'Cek Mata', tgl: '15-08-2019'},
                    { title: 'Cek Perut', tgl: '23-08-2018' }, 
                    { title: 'Pengobatan Usus Buntu dan Lambung', tgl: '30-08-2019'},
                    { title: 'Cek Perut', tgl: '23-08-2018' }, 
                    { title: 'Pengobatan Usus Buntu dan Lambung', tgl: '30-08-2019'},
                    { title: 'Cek Perut', tgl: '23-08-2018' },
                ],
            //tab
            index: 0,
            routes: [
              { key: 'first', title: 'Riwayat' },
              { key: 'second', title: 'Profil' },
              { key: 'third', title: 'Pengaturan' },
            ],
        };
    }

    _renderItem = (item, index) => {

        if(index %2 == 0){
            return (
                <View style={{flexDirection: 'row', width:'100%'}}>
                    <View style={{width:'50%', borderRightWidth: 2, borderRightColor: '#adabad', borderStyle: 'dotted', paddingBottom: 40, paddingTop: 20 }}>
                        <View style={{padding: 10, borderRadius: 8, backgroundColor: '#2C338B', marginLeft: '10%', marginRight: '30%'}}>
                            <Text style={{fontFamily: 'Montserrat-Regular', color: '#fff'}}>{item.title}</Text>
                        </View>
                        <Divider style={{backgroundColor: '#adabad', height: 2, marginLeft: '70%', marginTop: -20}}/>                    
                    </View>
                    <View style={{width: '50%', paddingBottom: 20, paddingTop: 20 }}>
                        <Text style={{ marginLeft: 10, fontFamily: 'Montserrat-LightItalic', marginTop: 10}}>{item.tgl}</Text>
                    </View>
                </View>
            )
        }else{
            return (
                <View style={{flexDirection: 'row', width:'100%'}}>
                    <View style={{width:'50%', borderRightWidth: 2, borderRightColor: '#adabad', borderStyle: 'dotted', paddingBottom: 40, paddingTop: 20 }}>
                        <Text style={{ alignSelf: 'flex-end', marginRight: 10, fontFamily: 'Montserrat-LightItalic', marginTop: -10}}>{item.tgl}</Text>                   
                    </View>
                    <View style={{width: '50%'}}>
                        <View style={{padding: 10, borderRadius: 8, backgroundColor: '#2C338B', marginRight: '10%', marginLeft: '30%'}}>
                            <Text style={{fontFamily: 'Montserrat-Regular', color: '#fff'}}>{item.title}</Text>
                        </View>                    
                        <Divider style={{backgroundColor: '#adabad', height: 2, marginRight: '70%', marginTop: -20}}/> 
                    </View>
                </View>
            )
        }

    }

    FirstRoute = () => (
        <View style={{marginTop: 10}}>
            <View style={{backgroundColor: '#adabad', width: 20, height: 20, borderRadius: 50, alignSelf: 'center', marginBottom: -5}}/>
            <FlatList
                style={{width: '100%'}}
                data={this.state.history}
                renderItem={({item,index}) => this._renderItem(item,index)}
                key={Math.random(1000)}
                keyExtractor={(item,index) => 'history'+index}
            />
        </View>
    );
      
    SecondRoute = () => (
        <CardProfile 
            nama={'Ahmad Karlo Karlo Dominguez Silva'}
            email={'Karlo@Karlo.co.id'}
            telepon={'0822-3592-9305'}
            norm={'0392389328'}
            tgl={'17 Agustus 1965'}
            alamat={'RT 03 RW 01 Dsn. Paceklik Ds. Sumber Agung Kec. Kelik Kab. Lamongan Jawa Timur (628 789)'} 
        />
    );

    ThirdRoute = () => (
        <View>
            <View style={{marginTop: 20}}>
                <Button buttonStyle={{width: '70%', alignSelf: 'center', backgroundColor: '#cf3039', marginBottom: 20}} title={'Logout'}/>
                <Button buttonStyle={{width: '70%', alignSelf: 'center', backgroundColor: '#2C338B', marginBottom: 20}} title={'Lupa Password'}/>
                <Button buttonStyle={{width: '70%', alignSelf: 'center', backgroundColor: '#2C338B', marginBottom: 20}} title={'Ganti Password'}/>
            </View>            
        </View>
    );

    lihatSemua = () => {
        alert('lihat semua')
    }

    nologin = () => {
        this.setState({islogin: false})
    }

    login = () => {
        this.setState({islogin: true})
    }

    tologin = () => {
        this.props.navigation.navigate('Login')
    }

    componentDidMount = () => {
        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                Alert.alert(
                    'Simulasi',
                    'Silahkan memilih simulasi tab Akun',
                    [
                      {text: 'No Login', onPress: () => this.nologin()},
                      {text: 'Login', onPress: () => this.login()},
                    ],
                    {cancelable: false},
                );
            }
        );
    }

    componentWillUnmount() {
        this.willFocusSubscription.remove();
    }

    render () {
        if(this.state.islogin===true){
            return (
                <SafeAreaView style={styles.container}>                                 
                        <ScrollView style={{width: '100%'}}>
                        <View style={{marginTop: 30, marginBottom: 40}}>
                            <CardPasien pic={Pasien} nama={'Karlo Karlo'} norm={'0392389328'} kota={'Kab. Lamongan'} />
                        </View>                           
                        <TabView
                            navigationState={this.state}
                            renderScene={SceneMap({
                            first: this.FirstRoute,
                            second: this.SecondRoute,
                            third: this.ThirdRoute,
                            })}
                            onIndexChange={index => this.setState({ index })}
                            initialLayout={{ width: Dimensions.get('window').width }} 
                            renderTabBar={props =>
                                <TabBar
                                  {...props}
                                  indicatorStyle={{ backgroundColor: '#2C338B' }}
                                  labelStyle={{color: '#2C338B', fontFamily: 'Montserrat-SemiBold', fontSize: 12}}
                                  style={{ backgroundColor: '#F6F6F6' }}
                                />
                            }                         
                        />
                    </ScrollView>                
                </SafeAreaView>
            );
        }else{
            return (
                <View style={{justifyContent: 'center', alignContent: 'center'}}>
                    <Image style={{alignSelf: 'center', marginBottom: 20, marginTop: 150}} source={History}/>
                    <Text style={{fontFamily: 'Montserrat-LightItalic', alignSelf: 'center', fontSize: 15, marginBottom: 20}} >Silahkan login untuk melihat riwayat medis</Text>
                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                        <Button buttonStyle={{width: '80%', alignSelf: 'center', backgroundColor: '#2C338B'}} title={'Login'} onPress={() => this.tologin()}/>
                        <Button buttonStyle={{width: '80%', alignSelf: 'center', backgroundColor: '#85D30E'}} title={'Daftar'} onPress={() => this.tologin()}/>
                    </View>
                </View>
            );
        }
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
        color: '#0f0f51',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
        //alignSelf: 'center'
    },
    h1: {
        color: '#0f0f51',
        fontSize: 60,
        fontFamily: 'Montserrat-Bold'
    },
    h2: {
        color: '#4b4b7d',
        fontSize: 15,
        fontFamily: 'Montserrat-LightItalic'
        //marginTop: 8,
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