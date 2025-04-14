import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react'
import { Card } from 'react-native-paper';
import ActivityCarousel from './ActivityCarousel';
import { useTranslation } from 'react-i18next';

type ActivityCardProps = {
    imageUrl: any;
    activityTitle: string;
    activityNum: number;
    totActivities: number;
    description: string;
  };

type CategoryProps = {
    activities: ActivityCardProps[];
    images: any[];
    title: string;
}

export default function Category({activities, images, title}: CategoryProps) {
    const { t } = useTranslation();
    return (
        <Card style={styles.container}>
        <View>
          <Card.Title 
          title={t(title)} 
          titleStyle={styles.cardTitle}
          />
        </View>
        <Card.Content>
          <ActivityCarousel 
          activities={activities}
          images={images}/>
        </Card.Content>
      </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        //backgroundColor: '#fff',
        justifyContent: 'flex-start',
        shadowColor: '#fff',
        borderRadius: 0
      },
      cardTitle: {
        fontSize: 24,
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: '#000',
        //fontWeight: 'bold',
        fontFamily: 'inter',
        marginTop: 0,
        marginBottom: -10
      }
});
