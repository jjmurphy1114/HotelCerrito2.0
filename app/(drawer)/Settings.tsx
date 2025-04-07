import { useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Text } from "react-native-paper"

export default function Settings(){
    const { colors } = useTheme();
    const { t } = useTranslation();

    return (
        <View style={{backgroundColor: colors.background, alignItems: "center"}}>
            <Text variant="headlineSmall">This will let you change language</Text>
        </View>
    )
}