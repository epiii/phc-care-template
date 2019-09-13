import React, { Component, Fragment } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    Dimensions,
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
import MyView from '../components/MyView';
import CardCekAntrian from '../components/cardCekAntrian';

export default class KonfirmasiPendaftaran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test : '',
            tgl : ''
        };
    }

    lihatSemua = () => {
        alert('lihat semua')
    }

    render () {
        return (
            <SafeAreaView style={styles.container}>                                 
                <ScrollView style={{width: '100%'}}>
                    <View style={styles.bottomContainer}>
                        <Image style={{alignSelf: 'center', height: 80, width: 249, marginTop: 20, marginBottom: 30}} source={LoginLogo}/>
                        <View style={styles.cardform}>
                            <Text style={styles.h3}>Konfirmasi Pendaftaran</Text>
                            <TextField
                                label='No. Rekam Medis'
                                labelTextStyle={{fontFamily: 'Montserrat-LightItalic'}}
                                //containerStyle={styles.search}
                                //containerStyle={{marginTop: 35}}
                                inputContainerStyle={{marginLeft: 10, marginRight: 5}}
                                lineWidth={0.50}
                                labelHeight={26}
                                inputContainerPadding={8}
                                activeLineWidth={1}
                                fontSize={15}
                                inputContainerPadding={8}
                                keyboardType='numeric'
                            />
                            <TextField
                                label='Urutan Karcis'
                                labelTextStyle={{fontFamily: 'Montserrat-LightItalic'}}
                                //containerStyle={styles.search}
                                //containerStyle={styles.search}
                                inputContainerStyle={{marginLeft: 10, marginRight: 5}}
                                lineWidth={0.50}
                                labelHeight={26}
                                inputContainerPadding={8}
                                activeLineWidth={1}
                                fontSize={15}
                                inputContainerPadding={8}
                            />
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'DD-MM-YYYY'
                                }}
                                keyboardType='numeric'
                                placeholder={'dd-mm-yyyy'}
                                value={this.state.tgl}
                                onChangeText={(tgl) => this.setState({ tgl })}
                                customTextInput={TextField}
                                customTextInputProps={{
                                    label: [<Text>Tanggal Berobat</Text>, <Text style={{ color: 'red' }}>*</Text>],///'Tanggal Lahir',
                                    labelTextStyle: {fontFamily: 'Montserrat-LightItalic'},
                                    //containerStyle={styles.search}
                                    //containerStyle: styles.search,
                                    inputContainerStyle: {marginLeft: 10, marginRight: 5},
                                    lineWidth: 0.50,
                                    labelHeight: 26,
                                    inputContainerPadding: 8,
                                    activeLineWidth: 1,
                                    fontSize: 15,
                                    inputContainerPadding: 8
                                }}
                            />                 
                            <View style={styles.bottomContainer2}>
                                <Button onPress={() => alert('konfirmasi')} buttonStyle={{width: '50%', alignSelf: 'center', backgroundColor: '#2C338B'}} title='Daftar'/>
                            </View>
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
    h3: {
        color: '#172B4D',
        fontSize: 16,
        //marginTop: 8,
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center'
    },
    image: {
        width: 300,
        height: 260,
        justifyContent: 'center',
    },
    cardform: {
        borderRadius: 5, 
        backgroundColor: '#FFF', 
        width: '95%', 
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#BABABA'
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
    bottomContainer2: {
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 10,
        marginBottom: 20
        //padding: 10,
    },
    buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    },
});