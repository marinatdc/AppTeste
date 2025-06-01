import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create ({
    view: {
        height: "100%",
        width: "100%", 
        backgroundColor: "#F5F0E9",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
})

export const Imagelog = styled.Image `
    width: 400px;
    height: 200px;
    margin: 0px;
`;