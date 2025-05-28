import { theme } from "@/shared/themes/theme";
import styled from "styled-components/native";

import Ionicons from '@expo/vector-icons/Ionicons';

interface ContainerInputProps {
    isError ?: boolean;
    hasSecureTextEntry ?: boolean;
}

export const ContainerInput = styled.TextInput <ContainerInputProps>`
    width: 100%;
    height: 49px;
    padding: 16px;
    border-radius: 15px;
    border-width: 1.5px;
    border-color: ${(props) => (props.isError ? theme.colors.alertRed.redAlert : theme.colors.darkBlue.blue100)};
    background-color: ${theme.colors.realWhite.realWhite};

    padding-right: ${(props) => (props.hasSecureTextEntry ? '50px' : '16px')}
`

export const Icon = styled(Ionicons) `
    position: absolute;
    right: 16px;
    top: 12px;
`