import { theme } from "@/shared/themes/theme";
import { View, StyleSheet } from "react-native";
import {Text} from "@/shared/components/text/text"
import { textTypes } from "@/shared/components/text/textTypes";

export default function home () {

    return (
        <View style={styles.container}>
            <Text
            type={textTypes.TITLE}
            fontWeight="bold"
            color="white"
            >Home</Text>
        </View>
    )
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.darkSand.sand100,
         alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

})

