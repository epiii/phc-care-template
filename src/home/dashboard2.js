import React, { Component, Fragment } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    Button, 
    Dimensions,
    Alert, 
    TouchableOpacity,
    Platform, 
    StyleSheet,
    FlatList
} from 'react-native';
import {SearchBar, Header, Input, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from '../assets/img/logo-new.png';
import Doc from '../assets/img/doc.png';
import Ext from '../assets/img/Group5x.png';
import Stet from '../assets/img/stethoscope.png';
import Appoint from '../assets/img/browser.png';
import Que from '../assets/img/time-management.png';
import Slide1 from '../assets/img/1.png';
import Slide2 from '../assets/img/2.png';
import Slide3 from '../assets/img/Group56.png';
import Slide4 from '../assets/img/Group86.png';
import Slide5 from '../assets/img/Group91.png';

import { MyCarousel } from '../components/MyCarousel';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import LeftHeader from '../components/leftHeader';
import { MyCarousel2 } from '../components/MyCarousel2';
import CardAntrian from '../components/cardAntrian';
import { MyCarousel3 } from '../components/MyCarousel3';
import CardAntrian2 from '../components/cardAntrian2';
import { MyCarousel4 } from '../components/MyCarousel4';

export default class dashboard2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test : '',
            entries : [{title: Slide3}, {title: Slide4}, {title: Slide5}],
            news : [
                {title : 'slide 1', image : Slide1, summary: 'lorem ipsum'}, 
                {title : 'slide 2', image : Slide2, summary: 'lorem ipsum'}, 
                // {title : 'slide 3', image : Slide1, summary: 'lorem ipsum'}, 
                // {title : 'slide 4', image : Slide2, summary: 'lorem ipsum'},
            ]
        };
    }

    _renderItem = (item) => {
        //console.error(item);
        return (
            <View style={styles.button2}>
                <Image style={styles.slide} source={item.image}/>
                <View style={styles.newscontainer}>
                    <Text style={styles.newstitle}>{item.title}</Text>
                    <Text style={styles.newsdetail}>{item.summary}</Text>
                </View>
            </View>
        )
    }

    lihatSemua = () => {
        alert('lihat semua')
    }

    render () {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>    
                    <Header
                        placement="left"
                        leftComponent={<LeftHeader/>}
                        leftContainerStyle={{width: '60%'}}
                        containerStyle={{flex: 0, backgroundColor: '#fff', borderBottomWidth: 0, height: 100}}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CariDokter')} style={{width: '100%'}}>
                        <Input
                            placeholder='Cari Dokter'
                            editable={false}
                            rightIcon={
                                <Icon
                                name='search-plus'
                                size={24}
                                color='#c6ced0'
                                />
                            }
                            containerStyle={styles.search}
                            inputContainerStyle={{borderBottomWidth: 0}}
                        />
                    </TouchableOpacity>                   
                <View style={styles.middleContainer}>
                    <MyCarousel4 entries={this.state.entries} lihatSemua={this.lihatSemua}/> 
                    {/* <MyCarousel lihatSemua={this.lihatSemua}/> */}
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PilihDokter')}>
                            <View style={[styles.button3,{alignContent: 'center'}]}>
                                <Image style={{height: 50, width: 45, alignSelf: 'center'}} source={Appoint}/>
                                <Text style={{alignSelf: 'center', fontSize: 11, fontFamily: 'Montserrat-Regular'}}>Pendaftaran</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CekAntrian')}>
                            <View style={[styles.button3,{alignContent: 'center'}]}>
                                <Image style={{height: 50, width: 45, alignSelf: 'center'}} source={Que}/>
                                <Text style={{alignSelf: 'center', fontSize: 10, fontFamily: 'Montserrat-Regular'}}>{'Antrian &'}</Text>
                                <Text style={{alignSelf: 'center', fontSize: 10, fontFamily: 'Montserrat-Regular'}}>{'Pembatalan'}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PilihKlinik')}>
                            <View style={[styles.button3,{alignContent: 'center'}]}>
                                <Image style={{height: 50, width: 45, alignSelf: 'center'}} source={Stet}/>
                                <Text style={{alignSelf: 'center', fontSize: 10, fontFamily: 'Montserrat-Regular'}}>Jadwal Dokter</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainMenu')}>
                            <View style={[styles.button3,{alignContent: 'center'}]}>
                                <Image style={{height: 50, width: 45, alignSelf: 'center'}} source={Ext}/>
                                <Text style={{alignSelf: 'center', fontSize: 11, fontFamily: 'Montserrat-Regular'}}>Lainnya</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom: 30}}>
                    {/* <MyCarousel2 lihatSemua={this.lihatSemua} isAuto={false}/> */}
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.h3,{width: '88%'}]}>Artikel</Text>
                        <TouchableOpacity style={{alignSelf: 'center', alignContent: 'space-between'}} onPress={() => alert('artikel semua')}>
                            <Icon name='chevron-right' size={18} color='#dde2e3'/>
                        </TouchableOpacity>                        
                    </View>
                    {/* <ScrollView horizontal={true} style={{marginTop: 10}}>

                        <View style={styles.button2}><Image style={styles.slide} source={Slide1}/></View>
                        <View style={styles.button2}><Image style={styles.slide} source={Slide2}/></View>
                        <View style={styles.button2}><Image style={styles.slide} source={Slide1}/></View>
                        <View style={styles.button2}><Image style={styles.slide} source={Slide2}/></View>

                    </ScrollView> */}
                    <FlatList
                        style={{marginTop: 10}}
                        data={this.state.news}
                        horizontal={true}
                        renderItem={({item}) => this._renderItem(item)}
                        key={Math.random(1000)}
                        keyExtractor={(item,index) => 'news'+index}
                    />
                </View>
                <View style={{marginBottom: 30, justifyContent: 'center'}}>
                    {/* <CardAntrian klinik={'Klinik Perak'} doctor={'Sigit Juniwardoyo Setiawan, Dr'} number={'19'}/> */}
                    <CardAntrian2 klinik={'Klinik Perak'} doctor={'Sigit Juniwardoyo Setiawan, Dr'} number={'19'}/>
                </View> 
                {/* <MyCarousel3 lihatSemua={this.lihatSemua}/>               */}
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
    slide: {
        //marginLeft: 10, 
        height: 160, 
        width: 160, 
        backgroundColor: '#000', 
        borderRadius: 5
    },
    newstitle : {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold'  
        //backgroundColor: '#000', 
        //opacity: 0.5, 
        //borderBottomLeftRadius: 5, 
        //borderTopLeftRadius: 5, 
        //paddingLeft: 10, 
        //paddingTop: 10, 
        //paddingBottom: 10, 
        //color: '#fff'
    },
    newsdetail : {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },
    newscontainer : {
        marginTop: -60, 
        backgroundColor: '#f6f6f6', 
        height: '100%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    h0: {
        color: '#0f0f51',
        fontSize: 24,
        alignSelf: 'center'
    },
    h1: {
        color: '#0f0f51',
        fontSize: 40,
    },
    h2: {
        color: '#4b4b7d',
        fontSize: 18,
        marginTop: 8,
    },
    h3: {
        color: '#4b4b7d',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 10, 
        fontFamily: 'Montserrat-SemiBold'
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
        borderColor: '#c6ced0', 
        borderRadius: 5, 
        //marginLeft: 10, 
        //marginRight: 10,
        marginBottom: 20,
        flex: 1,
        width: '95%',
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
        marginLeft: 10,
        marginRight: 5, 
        height: 160, 
        width: 160, 
        backgroundColor: '#000', 
        borderRadius: 5,
        borderBottomWidth: 1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
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
        width: '100%',
        marginTop: 1,
        height: 180
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 50,
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