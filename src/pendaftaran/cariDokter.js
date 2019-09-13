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
import LeftHeaderCari from '../components/leftHeaderCari';

export default class CariDokter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test : '',
            tgl : '',
            search : '',
            data : [{pic : Doctor, doctor : 'Nur Rahmi, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Fitri Sastra, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Carolina Marin, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Siti Sukarleto, Dr.Sp.A', spesialis: 'Spesialis Anak'},],
            initial : [{pic : Doctor, doctor : 'Nur Rahmi, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Fitri Sastra, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Carolina Marin, Dr.Sp.A', spesialis: 'Spesialis Anak'}, {pic : Doctor, doctor : 'Siti Sukarleto, Dr.Sp.A', spesialis: 'Spesialis Anak'},],
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

    cariDokter = () => {
        let e = this.state.search
        if(!e || e===''){
            this.setState({
                data: this.state.initial
            })
        }else{
            let text = e.toLowerCase()
            let Dokter = this.state.initial
            //let Approval = AsyncStorage.getItem('remo_monitoring')
            if(Dokter != null){
              let filtered = Dokter.filter((item) => {
                // return item.CONTRACT_OFFER_NO.toLowerCase().match(text)
                return item.doctor.toLowerCase().match(text)
                || item.spesialis.toLowerCase().match(text)
              })
              if (!text || text === '') {
                this.setState({
                  data: this.state.initial
                })
              } else if (filtered.length == 0) {
                //console.error(Approval);
                this.setState({
                  data: filtered
                })
          
              } else if (Array.isArray(filtered)) {
                // console.error(Approval);
                this.setState({
                  data: filtered
                })
              }
            }        
        }
    }


    render () {
        return (
            <SafeAreaView style={styles.container}>                                 
                <Header
                    placement="left"
                    leftComponent={<LeftHeaderCari 
                                        placeholder={'Cari Dokter'} 
                                        text={(search) => this.setState({ search })} 
                                        search={() => this.cariDokter()} 
                                        onBack={() => this.props.navigation.goBack()}/>}
                    leftContainerStyle={{width: '92%', alignSelf: 'center', }}
                    containerStyle={{
                        flex: 0, 
                        backgroundColor: 'transparent', 
                        borderBottomWidth: 1, 
                        height: 70,
                        shadowColor: '#000',
                        shadowOpacity: 0.5,
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginRight: -32
                        //backfaceVisibility: 'hidden',
                    }}
                    style={{opacity: 0.1}}
                    //backgroundColor={'transparent'}
                />
                <Text style={styles.hr}>Search result for "{this.state.search}"</Text>
                <FlatList
                    style={{marginTop: 10}}
                    data={this.state.data}
                    //initialNumToRender={2}
                    //horizontal={true}
                    renderItem={({item}) => this._renderItem(item)}
                    key={Math.random(1000)}
                    keyExtractor={(item,index) => 'news'+index}
                />
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
    hr: {
        fontFamily: 'Montserrat-LightItalic', 
        fontSize: 14, 
        color: '#4b4b7d',
        alignSelf: 'flex-start',
        marginTop: 10,
        marginLeft: 10
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