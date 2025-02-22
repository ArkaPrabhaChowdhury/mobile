import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants';

const ContactProfile = ({ navigation, route }: Props) => {
  const { contact } = route.params;
  const [isMore, setIsMore] = useState(true);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <AntDesign
          testID="backButton"
          name="arrowleft"
          style={styles.backButton}
          onPress={(): void => navigation.goBack()}
        />
        <Pressable style={styles.innerContainer} android_ripple={{ color: COLORS.primary70 }}>
          <View>
            <Image
              testID="userProfile"
              source={require('../assets/icon.png')}
              style={styles.avatar}
            />
          </View>
          <Text testID="userName" style={styles.nameText}>
            {contact.name}
          </Text>
        </Pressable>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Profile</Text>
        <Text style={styles.subHeading}>Name</Text>
        <Text style={styles.text}>{contact.name}</Text>
        <Text style={styles.subHeading}>Status</Text>
        <Text style={styles.text}>Valid contact</Text>
        <Text style={styles.subHeading}>Provider status</Text>
        <Text style={styles.text}>Can send template messages</Text>
        <Text style={styles.subHeading}>Language</Text>
        <Text style={styles.text}>English</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.heading}>Details</Text>
          <Text style={styles.session}>Session timer: 0</Text>
        </View>
        <Text style={styles.subHeading}>Phone</Text>
        <Text style={styles.text}>+919876543210</Text>
        <Text style={styles.subHeading}>Collections</Text>
        <Text style={styles.text}>Optin contact</Text>
        <Text style={styles.subHeading}>Assigned to</Text>
        <Text style={styles.text}>None</Text>
        <Text style={styles.subHeading}>Status</Text>
        <Text style={styles.text}>Optin via WA on {contact.lastMessageAt}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Contact history</Text>
        <Pressable style={styles.viewButton} onPress={() => setIsMore(!isMore)}>
          <Text style={styles.viewText}>{isMore ? 'View More' : 'View Less'}</Text>
          <AntDesign name={isMore ? 'down' : 'up'} style={styles.arrow} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ContactProfile;

const styles = StyleSheet.create({
  arrow: {
    color: COLORS.darkGray,
  },
  viewButton: {
    alignItems: 'center',
    margin: 20,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewText: {
    fontSize: 16,
    margin: 5,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: COLORS.darkGray,
  },
  session: {
    fontWeight: 'bold',
    marginTop: 4,
    color: COLORS.darkGray,
  },
  subContainer: {
    marginTop: 3,
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    color: COLORS.darkGray,
    fontWeight: 'bold',
  },
  subHeading: {
    fontWeight: '500',
    marginTop: 20,
    color: COLORS.darkGray,
  },
  text: {
    color: COLORS.black,
    fontWeight: '800',
  },
  mainContainer: {
    flex: 1,
  },
  avatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  backButton: {
    alignSelf: 'center',
    color: COLORS.white,
    fontSize: 22,
    paddingHorizontal: 10,
  },
  innerContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  headContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.primary400,
    flexDirection: 'row',
    height: 60,
    padding: '2%',
    width: '100%',
    zIndex: 50,
  },
  nameText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    marginLeft: 10,
  },
});
