import { useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native-paper"
import LanguageToggle from "../components/LanguageToggle";

export default function Settings(){
    const { colors } = useTheme();
    const { t } = useTranslation();
    const { width, height } = Dimensions.get('window');

    const styles = StyleSheet.create({
        headerText: {
            marginTop: width * 0.035,
            marginBottom: width * 0.008
        }
    })

    return (
        <View style={{backgroundColor: colors.background, alignItems: "center"}}>
            <Text style={styles.headerText} variant="headlineSmall">{t('settings.header')}</Text>
            <LanguageToggle/>
        </View>
    )
}