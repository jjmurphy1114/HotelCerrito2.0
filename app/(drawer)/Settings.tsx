import { useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Text } from "react-native-paper"
import LanguageToggle from "../components/LanguageToggle";

export default function Settings(){
    const { colors } = useTheme();
    const { t } = useTranslation();

    return (
        <View style={{backgroundColor: colors.background, alignItems: "center"}}>
            <Text variant="headlineSmall">This will let you change language</Text>
            <LanguageToggle/>
        </View>
    )
}