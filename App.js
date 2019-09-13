/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Root } from './src/router';
import firebase from 'react-native-firebase';

export default class App extends Component {

    firebaseRegion = () => {
      //Firebase
      const topicName = "app-phc-user";
      const channelId = "app-phc-channel";
      const channelName = "APP PHC Channel";
      const channelDesc = "Notifications APP PHC Channel";

      if (Platform.OS === 'android') {
          const channel = new firebase.notifications.Android.Channel(
              channelId,
              channelName,
              firebase.notifications.Android.Importance.Max
          ).setDescription(channelDesc);
          firebase.notifications().android.createChannel(channel);
      }

      firebase.messaging().hasPermission()
          .then(enabled => {
              if (enabled) {
                  firebase.messaging().getToken().then(token => {
                      // Snackbar.show({ title: token, duration: Snackbar.LENGTH_LONG });
                      console.log(token);
                  })
                  //Subscribe
                  firebase.messaging().subscribeToTopic(topicName);
                  // user has permissions
              } else {
                  firebase.messaging().requestPermission()
                      .then(() => {
                          //firebase.messaging().registerForNotifications()
                          //alert("User Now Has Permission")
                      })
                      .catch(error => {
                          //alert("Error", error)
                          // User has rejected permissions  
                      });
              }
          });

      this.notificationListener = firebase.notifications().onNotification((notification) => {
          if (Platform.OS === 'android') {

              const localNotification = new firebase.notifications.Notification({
                  sound: 'default',
                  show_in_foreground: true,
              })
                  .setNotificationId(notification.notificationId)
                  .setTitle(notification.title)
                  .setSubtitle(notification.subtitle)
                  .setBody(notification.body)
                  .setData(notification.data)
                  .android.setChannelId(channelId) // e.g. the id you chose above
                  .android.setSmallIcon('ic_launcher') // create this icon in Android Studio
                  //.android.setBigPicture('ic_launcher')
                  //.android.setColor('#000000') // you can set a color here
                  .android.setPriority(firebase.notifications.Android.Priority.High)
                  .android.setAutoCancel(true);

              firebase.notifications()
                  .displayNotification(localNotification)
                  .catch(err => console.error(err));

          } else if (Platform.OS === 'ios') {

              const localNotification = new firebase.notifications.Notification({
                  show_in_foreground: true,
                  content_available : true
              })
                  .setNotificationId(notification.notificationId)
                  .setTitle(notification.title)
                  .setSubtitle(notification.subtitle)
                  .setBody(notification.body)
                  .setData(notification.data)
                  .setSound('default')
                  .ios.setBadge(notification.ios.badge);

              firebase.notifications()
                  .displayNotification(localNotification)
                  .catch(err => console.error(err));

          }
      });
  }

  componentDidMount() {
      //BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      this.firebaseRegion();
  }

  componentWillUnmount() {
      //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      //firebase
      this.notificationListener();
  }

  render() {
      return (
          <Root />
      );
  }
}
