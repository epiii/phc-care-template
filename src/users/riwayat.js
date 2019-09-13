import React, { Component, Fragment } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    Image,
    FlatList,
    Dimensions,
    Alert, 
    TouchableOpacity,
    Platform, 
    StyleSheet 
} from 'react-native';
import {SearchBar, Header, Input, Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from '../assets/img/gundam.png';
import LoginLogo from '../assets/img/login-logo.png';
import LoginDoctor from '../assets/img/login-doctor.png';
import Ext from '../assets/img/Group5x.png';
import Stet from '../assets/img/stethoscope.png';
import Appoint from '../assets/img/browser.png';
import Que from '../assets/img/time-management.png';
import History from '../assets/img/history.png';

import { SafeAreaView } from 'react-navigation';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import LeftHeaderLogin from '../components/leftHeaderLogin';
import { TextField } from 'react-native-material-textfield';
import LeftHeaderBack from '../components/leftHeaderBack';
import MyView from '../components/MyView';
import ActionButton from 'react-native-action-button';

export default class Riwayat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test : '',
            filter: true,
            history : [
                { title: 'Cek Gula dan Darah', tgl: '12-08-2018' }, 
                { title: 'Cek Mata', tgl: '15-08-2019'},
                { title: 'Cek Perut', tgl: '23-08-2018' }, 
                { title: 'Pengobatan Usus Buntu dan Lambung', tgl: '30-08-2019'},
                { title: 'Cek Perut', tgl: '23-08-2018' }, 
                { title: 'Pengobatan Usus Buntu dan Lambung', tgl: '30-08-2019'},
                { title: 'Cek Perut', tgl: '23-08-2018' },
            ],
        };
    }

    showFilter = () => {
        this.setState({
            filter : !this.state.filter
        })
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

    render () {
        return (
            <SafeAreaView style={styles.container}>                                 
                <Header
                    placement="left"
                    leftComponent={<LeftHeaderBack title={'Riwayat'} onBack={() => this.props.navigation.goBack()}/>}
                    leftContainerStyle={{width: Dimensions.get('window').width/2}}
                    containerStyle={{
                        flex: 0, 
                        backgroundColor: 'transparent', 
                        borderBottomWidth: 1, 
                        height: 70,
                        shadowColor: '#000',
                        shadowOpacity: 0.5,
                        justifyContent: 'center'
                        //backfaceVisibility: 'hidden',
                    }}
                    style={{opacity: 0.1}}
                    //backgroundColor={'transparent'}
                />
                <ScrollView style={{width: '100%'}} scrollEventThrottle={16} onScrollEndDrag={() => this.showFilter()}>
                {/* <ScrollView style={{width: '100%'}}> */}
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
                </ScrollView>
                {this.state.filter==false? 
                <View style={{alignSelf: 'center'}} hide={this.state.filter}>
                    <View style={[styles.overlay,{elevation: 2, flexDirection: 'row'}]}>
                        <Icon name='filter' color='#748094' size={12}/>
                        <Button buttonStyle={{backgroundColor: '#F4F4F4', flex: 0, height: 30}} onPress={() => alert('filter')} titleStyle={{color: '#748094', fontFamily: 'Montserrat-Regular', fontSize: 12}} title={'Filter'}/>
                    </View>       
                </View> : null}
                {/* <View style={{alignSelf: 'center'}} hide={this.state.filter}>
                    <View style={[styles.overlay,{elevation: 2, flexDirection: 'row'}]}>
                        <Icon name='filter' color='#748094' size={12}/>
                        <Button buttonStyle={{backgroundColor: '#F4F4F4', flex: 0, height: 30}} onPress={() => alert('filter')} titleStyle={{color: '#748094', fontFamily: 'Montserrat-Regular', fontSize: 12}} title={'Filter'}/>
                    </View>       
                </View> */}
                {/* <ActionButton position={'center'} buttonText={'Filter'} buttonTextStyle={{fontSize: 10, color: '#008F68'}} onPress={() => alert('filter')} buttonColor='#0f0f51'/> */}
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
    overlay: {
        position: "absolute",
        // top: 0,
        // right: 0,
        bottom: 20,
        // left: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F4F4",
        //opacity: 1,
        width: 80,
        height: 30,
        borderRadius: 5,
        alignSelf: 'center'
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
        //backgroundColor: '#000', 
        //borderWidth: 1,
        //borderColor: '#F4F4F4', //'#F4F4F4','#c6ced0'
        //borderRadius: 15
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
        marginTop: 10,
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