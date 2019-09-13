import React, { Component, Fragment } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    Dimensions,
    FlatList,
    Alert, 
    TouchableOpacity,
    Platform, 
    StyleSheet 
} from 'react-native';
import {SearchBar, Header, Input, Button, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from '../assets/img/gundam.png';
import LoginLogo from '../assets/img/login-logo.png';
import LoginDoctor from '../assets/img/login-doctor.png';
import Ext from '../assets/img/Group5x.png';
import Stet from '../assets/img/stethoscope.png';
import Appoint from '../assets/img/browser.png';
import Que from '../assets/img/time-management.png';
import Doctor from '../assets/img/doctor2.png';

import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import LeftHeaderLogin from '../components/leftHeaderLogin';
import { TextField } from 'react-native-material-textfield';
import LeftHeaderBack from '../components/leftHeaderBack';
import { TextInputMask } from 'react-native-masked-text';
import CardQuota from '../components/cardQuota';
import CardDoctor from '../components/cardDoctor';
import CardDoctorSelect from '../components/cardDoctorSelect';
import CardPengaturan from './cardPengaturan';

export default class Pengaturan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test : '',
            tgl : '',
            version : '',
            data : [{pic : Doctor, doctor : 'Nur Rahmi, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Fitri Sastra, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Carolina Marin, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Siti Sukarleto, Dr.Sp.A', spesialis: 'Spesialis Anak'},]
        };
    }

    _renderItem = (item) => {
        //console.error(item);
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PilihDokterKlinik')}>
                <CardDoctorSelect 
                    pic={item.pic}
                    doctor={item.doctor}
                    spesialis={item.spesialis} 
                    />
            </TouchableOpacity>
        )
    }    

    lihatSemua = () => {
        alert('lihat semua')
    }

    getVersion = () => {
        const pkg = require('../../package.json')
        this.setState({
            version : 'Version '+pkg.version
        })
    }

    componentDidMount = () => {
        this.getVersion()
    }

    render () {
        return (
            <SafeAreaView style={styles.container}>                                 
                {/* Akun */}
                <View style={{flexDirection: 'row', width: '95%', marginTop: 10}}>
                    <Text style={{fontFamily : 'Montserrat-Regular', marginLeft: 10, marginBottom: 10, color: '#008DBD', fontSize: 12 }}>Akun</Text>
                </View>
                <TouchableOpacity onPress={this.props.editprofil}>
                    <CardPengaturan title={'Edit Profil'}/>
                </TouchableOpacity>
                {/* Keamanan */}
                <View style={{flexDirection: 'row', width: '95%', marginTop: 10}}>
                    <Text style={{fontFamily : 'Montserrat-Regular', marginLeft: 10, marginBottom: 10, color: '#008DBD', fontSize: 12 }}>Keamanan</Text>
                </View>
                <TouchableOpacity onPress={this.props.ubahsecurity}>
                    <CardPengaturan title={'Ubah Security Code'}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={this.props.ubahpassword}>
                    <CardPengaturan title={'Ubah Password'}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={this.props.lupapassword}>
                    <CardPengaturan title={'Lupa Password'}/>
                </TouchableOpacity>
                {/* Tentang */}
                <View style={{flexDirection: 'row', width: '95%', marginTop: 10}}>
                    <Text style={{fontFamily : 'Montserrat-Regular', marginLeft: 10, marginBottom: 10, color: '#008DBD', fontSize: 12 }}>Tentang</Text>
                </View>
                <TouchableOpacity onPress={this.props.tentang}>
                    <CardPengaturan title={'Tentang APP PHC'}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={this.props.kebijakan}>
                    <CardPengaturan title={'Kebijakan Privasi'}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={this.props.bantuan}>
                    <CardPengaturan title={'Pusat Bantuan'}/>
                </TouchableOpacity>
                 {/* Versi */}
                 <Text style={{fontFamily: 'Montserrat-LightItalic', fontSize: 10}}>{this.state.version}</Text>  
                 {/* Logout */} 
                <View style={{marginBottom: 20, width: '70%', alignSelf: 'center', marginTop: 10}}>
                    <Button buttonStyle={{backgroundColor: '#F4F4F4', borderWidth: 1, borderColor: '#4b4b7d'}} 
                            titleStyle={{color: '#4b4b7d', fontFamily: 'Montserrat-Bold'}}
                            onPress={this.props.logout} 
                            title={'Logout'}/>
                </View>
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
    cardform: {
        borderRadius: 5, 
        backgroundColor: '#F4F4F4', 
        width: '95%', 
        alignSelf: 'center'
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