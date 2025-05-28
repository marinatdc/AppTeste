import styled from "styled-components/native";

interface DisplaProps {
    margin?: string;
}

export const DisplayFlexColumn = styled.View<DisplaProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: ${(props) => (props.margin ? props.margin : '0px')}
`