import { Dimensions, Platform, ScrollView, StyleSheet, Text } from "react-native";
import { Card, useTheme } from "react-native-paper";

export default function ScrollingTextBox({text}: {text: string}) {
    
    const { colors } = useTheme();
    const { width, height } = Dimensions.get('window');

    // Smaller device logic
    const isSmallDevice = height < 700;
    const cardHeight = isSmallDevice ? height * 0.25 : height * 0.3;

    const styles = StyleSheet.create({
        card: {
               margin: 0,
               marginTop: -width*.025,
               padding: 10,
               borderRadius: 10,
               backgroundColor: colors.secondary,
               width: "90%",
               maxHeight: cardHeight
             },
             scrollBox: {
               maxHeight: cardHeight,
             },
             scrollContent: {
               paddingRight: 10,
             },
             text: {
               fontSize: 18,
               lineHeight: 24,
               fontFamily: Platform.select({
                         android: 'Inter_400Regular',
                         ios: 'Inter24pt-Regular',
                       }),
             },
    });

    return(
        <Card style={styles.card}>
        <ScrollView
          style={styles.scrollBox}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.text}>
            {text}
          </Text>
        </ScrollView>
      </Card>
    );
}

