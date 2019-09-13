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
import { SearchBar, Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from '../assets/img/gundam.png';
import LoginLogo from '../assets/img/login-logo.png';
import LoginDoctor from '../assets/img/login-doctor.png';
import Ext from '../assets/img/Group5x.png';
import Stet from '../assets/img/stethoscope.png';
import Appoint from '../assets/img/browser.png';
import Que from '../assets/img/time-management.png';

import Hemodialisa from '../assets/img/poliicon/hemodialisa.png';
import SpcAnak from '../assets/img/poliicon/spesialisanak.png';
import Anestesi from '../assets/img/poliicon/anestesi.png';
import Andrologi from '../assets/img/poliicon/andrologi.png';

import BedahAnak from '../assets/img/poliicon/bedahanak.png';
import Gizi from '../assets/img/poliicon/gizi.png';
import KepalaLeher from '../assets/img/poliicon/bedahkepalaleher.png';
import Saraf from '../assets/img/poliicon/saraf.png';

import BedahUmum from '../assets/img/poliicon/bedahumum.png';
import Disgetive from '../assets/img/poliicon/disgetive.png';
import Plastik from '../assets/img/poliicon/bedahplastik.png';
import Onkologi from '../assets/img/poliicon/onkologi.png';

import Orthopedi from '../assets/img/poliicon/orthopedi.png';
import Urologi from '../assets/img/poliicon/urologi.png';
import Mulut from '../assets/img/poliicon/bedahmulut.png';
import Thorax from '../assets/img/poliicon/thorax.png';

import Dalam from '../assets/img/poliicon/dalam.png';
import Hematologi from '../assets/img/poliicon/hematologi.png';
import Jantung from '../assets/img/poliicon/jantung.png';
import Jiwa from '../assets/img/poliicon/jiwa.png';

import Kandungan from '../assets/img/poliicon/kandungan.png';
import Gigi from '../assets/img/poliicon/gigi.png';
import GigiAnak from '../assets/img/poliicon/jantung.png';
import Orthodent from '../assets/img/poliicon/orthodent.png';

import KulitKelamin from '../assets/img/poliicon/kulitkelamin.png';
import Mata from '../assets/img/poliicon/mata.png';
import Paru from '../assets/img/poliicon/paru.png';
import RehabMedik from '../assets/img/poliicon/rehabmedik.png';

import Tht from '../assets/img/poliicon/tht.png';

import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import LeftHeaderLogin from '../components/leftHeaderLogin';
import { TextField } from 'react-native-material-textfield';
import LeftHeaderBack from '../components/leftHeaderBack';

export default class PilihPoli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '',
            entries: [
                { id: 1, menu: 'Hemodialisa', icon: Hemodialisa },
                { id: 2, menu: 'Spc. Anak', icon: SpcAnak },
                { id: 3, menu: 'Spc. Anestesi', icon: Anestesi },
                { id: 3, menu: 'Spc. Andrologi', icon: Andrologi },

                { id: 5, menu: 'Spc. Bedah Anak', icon: BedahAnak },
                { id: 6, menu: 'Spc. Gizi', icon: Gizi },
                { id: 7, menu: 'Spc. Bedah Kepala Leher', icon: KepalaLeher },
                { id: 8, menu: 'Spc. Bedah Saraf', icon: Saraf },

                { id: 9, menu: 'Spc. Bedah Umum', icon: BedahUmum },
                { id: 10, menu: 'Spc. Bedah Disgetive', icon: Disgetive },
                { id: 11, menu: 'Spc. Bedah Plastik', icon: Plastik },
                { id: 12, menu: 'Spc. Bedah Onkologi', icon: Onkologi },

                { id: 13, menu: 'Spc. Bedah Orthopedi', icon: Orthopedi },
                { id: 14, menu: 'Spc. Bedah Urologi', icon: Urologi },
                { id: 15, menu: 'Spc. Bedah Mulut', icon: Mulut },
                { id: 16, menu: 'Spc. Bedah Thorax Kardiovaskuler', icon: Thorax },

                { id: 17, menu: 'Spc. Penyakit Dalam', icon: Dalam },
                { id: 18, menu: 'Spc. Hematologi', icon: Hematologi },
                { id: 19, menu: 'Spc. Jantung', icon: Jantung },
                { id: 20, menu: 'Spc. Jiwa', icon: Jiwa },

                { id: 21, menu: 'Spc. Kandungan', icon: Kandungan },
                { id: 22, menu: 'Spc. Gigi', icon: Gigi },
                { id: 23, menu: 'Spc. Gigi Anak', icon: GigiAnak },
                { id: 24, menu: 'Spc. Orthodonti', icon: Orthodent },

                { id: 25, menu: 'Spc. Kulit & Kelamin', icon: KulitKelamin },
                { id: 26, menu: 'Spc. Mata', icon: Mata },
                { id: 27, menu: 'Spc. Paru', icon: Paru },
                { id: 28, menu: 'Spc. Rehabilitasi Medik', icon: RehabMedik },

                { id: 29, menu: 'Spc. Telinga Hidung Tenggorokan', icon: Tht },
            ],
        };
    }

    lihatSemua = () => {
        alert('lihat semua')
    }

    _renderItem = (item) => {
        //console.error(item);
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PilihDokter')}>
                <View style={[styles.button3, { alignContent: 'center' }]}>
                    <Image
                        style={{
                            backgroundColor: 'red',
                            height: 50,
                            width: 45,
                            alignSelf: 'center'
                        }}
                        source={item.icon} />
                    <Text
                        style={{



                            
                            textAlign: 'center',
                            fontSize: 11,
                            fontFamily: 'Montserrat-Regular'
                        }}>{item.menu}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header
                    placement="left"
                    leftComponent={<LeftHeaderBack title={'Pilih Poli'} onBack={() => this.props.navigation.goBack()} />}
                    leftContainerStyle={{ width: Dimensions.get('window').width / 2 }}
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
                    style={{ opacity: 0.1 }}
                //backgroundColor={'transparent'}
                />
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.bottomContainer}>
                        <Text style={{ fontFamily: 'Montserrat-Regular', marginLeft: 10, marginBottom: 10, color: '#008DBD', fontSize: 12 }}>RS PHC Surabaya</Text>
                        <FlatList
                            //horizontal
                            data={this.state.entries}
                            // contentContainerStyle={{
                            //     flexWrap: 'wrap',
                            //     flexDirection: 'column',
                            //     height: Dimensions.get('window').height+100,
                            //     width: Dimensions.get('window').width,
                            //     alignSelf: 'center',
                            // }}
                            numColumns={4}
                            renderItem={({ item }) => this._renderItem(item)}
                            initialNumToRender={1000}
                            key={Math.random(1000)}
                            keyExtractor={(item, index) => 'news' + index}
                        />

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
    button: {
        flex: 1,
        width: 800,
        backgroundColor: '#008F68',
        color: '#008F68'
    },
    button2: {
        margin: 2,
        height: 100,
        width: 100,
        backgroundColor: '#000',
        borderRadius: 5
    },
    button3: {
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