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

export default class Pendaftaran extends Component {
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
                <Header
                    placement="left"
                    leftComponent={<LeftHeaderBack title={'Pendaftaran'} onBack={() => this.props.navigation.goBack()}/>}
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
                <ScrollView style={{width: '100%'}}>
                    <View style={styles.bottomContainer}>
                        <CardDoctor 
                            pic={Doctor}
                            doctor={'Nur Rahmi, Dr.Sp.A'}
                            spesialis={'Spesialis Anak'} />
                        <CardQuota 
                            klinik={'RS PHC Surabaya'} 
                            tgl={'Selasa, 19-08-2019'} 
                            jam={'08:00 - 16:00'} 
                            doctor={'Elza P Fadhli, Dr'} 
                            spesialis={'Spesialis Anak'} 
                            number={'10'} />
                        <View style={styles.cardform}>
                            <TextField
                                label='No. Rekam Medis'
                                labelTextStyle={{fontFamily: 'Montserrat-LightItalic'}}
                                //containerStyle={styles.search}
                                containerStyle={[styles.search,{marginTop: 35}]}
                                inputContainerStyle={{marginLeft: 10, marginRight: 5}}
                                lineWidth={0}
                                labelHeight={20}
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
                                    label: [<Text>Tanggal Lahir</Text>, <Text style={{ color: 'red' }}>*</Text>],///'Tanggal Lahir',
                                    labelTextStyle: {fontFamily: 'Montserrat-LightItalic'},
                                    //containerStyle={styles.search}
                                    containerStyle: styles.search,
                                    inputContainerStyle: {marginLeft: 10, marginRight: 5},
                                    lineWidth: 0,
                                    labelHeight: 20,
                                    fontSize: 15,
                                    inputContainerPadding: 8
                                }}
                            />                 
                            <View style={styles.bottomContainer}>
                                <Button onPress={() => this.props.navigation.navigate('Pendaftaran2')} buttonStyle={{width: '90%', alignSelf: 'center', backgroundColor: '#2C338B'}} title='Daftar'/>
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