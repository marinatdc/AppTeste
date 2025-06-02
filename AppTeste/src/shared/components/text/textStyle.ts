import styled from 'styled-components/native'

interface ContainerTextProps {
    color?: string;
    fontSize?: string;
    fontWeight ?: string;
    margin ?: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.fontWeight ? `fontWeight: ${props.fontWeight};` : '')}
    font-size: ${(props)=> props.fontSize}
`   ;