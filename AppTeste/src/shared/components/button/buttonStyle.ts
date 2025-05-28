import styled from 'styled-components/native'

import { theme } from "@/shared/themes/theme"

interface ButtonContainerProps {
    margin?: string
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 15px;
  flex-direction:row;
  justify-content: center;
  background-color: purple;
  align-items: center;

  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`

export const ButtonSecundary = styled(ButtonContainer)<ButtonContainerProps> `
    ${(props)=> (props.margin ? `margin: ${props.margin};` : '')}
    background-color:#112250;
    flex-direction:row;
`

export const ButtonDisable = styled(ButtonContainer)<ButtonContainerProps> `
    background-color: ${theme.colors.lightSand.sand50};
`

export const ActivityIndicatorButton = styled.ActivityIndicator `
    margin-left: 8px;
`

