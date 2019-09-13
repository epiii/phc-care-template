import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import dashboard from './home/dashboard';
import { Tabs } from './tabsRouter';
import MainMenu from './home/mainmenu';
import Pendaftaran from './pendaftaran/pendaftaran';
import PilihDokter from './pendaftaran/pilihDokter';
import PilihJadwal from './pendaftaran/pilihJadwal';
import PilihKlinik from './pendaftaran/pilihKlinik';
import PilihDokterKlinik from './pendaftaran/pilihDokterKlinik';
import Pendaftaran2 from './pendaftaran/pendaftaran2';
import CariDokter from './pendaftaran/cariDokter';
import login from './users/login';
import CekAntrian from './antrian/cekAntrian';
import KonfirmasiPendaftaran from './pendaftaran/konfirmasiPendaftaran';
import Pendaftaran2Revised from './pendaftaran/pendaftaran2revised';
import PilihPoli from './pendaftaran/pilihPoli';
import Riwayat from './users/riwayat';

export const All = createStackNavigator({
    Tabs : {
        screen : Tabs
    },
    Dashboard : {
        screen : dashboard
    },
    MainMenu : {
        screen : MainMenu
    },
    Pendaftaran : {
        screen : Pendaftaran
    },
    Pendaftaran2 : {
        screen : Pendaftaran2
    },
    Pendaftaran2Revised : {
        screen : Pendaftaran2Revised
    },
    KonfirmasiPendaftaran : {
        screen : KonfirmasiPendaftaran
    },
    PilihDokter : {
        screen : PilihDokter
    },
    PilihJadwal : {
        screen : PilihJadwal
    },
    PilihKlinik : {
        screen : PilihKlinik
    },
    PilihPoli : {
        screen : PilihPoli
    },
    PilihDokterKlinik : {
        screen : PilihDokterKlinik
    },
    CariDokter : {
        screen : CariDokter
    },
    Login : {
        screen : login
    },
    CekAntrian : {
        screen : CekAntrian
    },
    Riwayat : {
        screen : Riwayat
    },
}, {
    headerMode: 'none',    
})

export const Root = createAppContainer(All)