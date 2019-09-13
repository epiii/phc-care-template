import React, { Component, Fragment } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    Image,
    Button, 
    Dimensions,
    Alert, 
    TouchableOpacity,
    Platform, 
    StyleSheet 
} from 'react-native';
import {SearchBar, Header, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from '../assets/img/gundam.png';
import { MyCarousel } from '../components/MyCarousel';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import LeftHeader from '../components/leftHeader';
import { MyCarousel2 } from '../components/MyCarousel2';
import CardAntrian from '../components/cardAntrian';

export default class dashboard extends Component {
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
                {/* <View style={styles.topContainer}>
                    <View style={styles.header}>
                        <Image source={Logo} style={styles.logo}/>
                        <Text style={styles.h0}>
                            Test
                        </Text>
                    </View> */}
                <ScrollView>    
                    <Header
                        placement="left"
                        leftComponent={<LeftHeader/>}
                        leftContainerStyle={{width: Dimensions.get('window').width/2}}
                        // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                        // rightComponent={{ icon: 'home', color: '#fff' }}
                        // style={{backgroundColor: '#f4f4f4'}}
                        // containerStyle={{flex: 0, marginTop: -15, backgroundColor: '#fff'}}
                        containerStyle={{flex: 0, backgroundColor: '#fff', borderBottomWidth: 0, height: 100}}
                    />
                    {/* <SearchBar
                        searchIcon={<Icon name="search" size={30} color="#900" />}
                        //onChangeText={someMethod}
                        //onClearText={someMethod}
                        containerStyle={{width: '100%', backgroundColor: '#F4F4F4'}}
                        placeholder='Type Here...'
                        inputContainerStyle={{backgroundColor: '#F6F6F6', borderColor: '#F6F6F6'}}
                        inputStyle={{backgroundColor: '#F4F4F4'}}
                        // style={{backgroundColor: '#FFF'}} 
                    /> */}
                    <TouchableOpacity onPress={() => alert('cari dokter')} style={{width: Dimensions.get('window').width}}>
                        {/* <TextInput placeholder={'Cari Dokter'} style={styles.search} /> */}
                        <Input
                            placeholder='Cari Dokter'
                            // leftIcon={
                            //     <Icon
                            //     name='user'
                            //     size={24}
                            //     color='black'
                            //     />
                            // }
                            rightIcon={
                                <Icon
                                name='search-plus'
                                size={24}
                                color='black'
                                />
                            }
                            containerStyle={styles.search}
                            inputContainerStyle={{borderBottomWidth: 0}}
                        />
                    </TouchableOpacity>                   
                {/* </View> */}
                <View style={styles.middleContainer}>
                    <MyCarousel2 lihatSemua={this.lihatSemua} isAuto={true}/>
                </View>
                <View style={styles.bottomContainer}>
                    {/* <ScrollView horizontal={true}>

                        <View style={styles.button2}><Text style={{color: '#fff'}}>1</Text></View>
                        <View style={styles.button2}><Text style={{color: '#fff'}}>2</Text></View>
                        <View style={styles.button2}><Text style={{color: '#fff'}}>3</Text></View>
                        <View style={styles.button2}><Text style={{color: '#fff'}}>4</Text></View>
                        <View style={styles.button2}><Text style={{color: '#fff'}}>5</Text></View>
                        <View style={styles.button2}><Text style={{color: '#fff'}}>6</Text></View>

                    </ScrollView> */}
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.button3}><Text style={{color: '#fff'}}>1</Text></View>
                        <View style={styles.button3}><Text style={{color: '#fff'}}>2</Text></View>
                        <View style={styles.button3}><Text style={{color: '#fff'}}>3</Text></View>
                        <View style={styles.button3}><Text style={{color: '#fff'}}>4</Text></View>
                    </View>                    
                </View>
                <View style={{marginBottom: 30}}>
                    <MyCarousel2 lihatSemua={this.lihatSemua}/>
                </View>
                <View style={{marginBottom: 30}}>
                    <CardAntrian/>
                </View>               
               {/* <View style={styles.bottomContainer}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="LET'S START"
                            //style={{}}
                            onPress={() => this.onPress()}
                            color="#008F68"
                        />
                    </View>
               </View> */}
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
        borderColor: '#F2F2F2', 
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
        marginTop: 50,
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