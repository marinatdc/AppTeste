import styled from 'styled-components/native'

interface ContainerTextProps {
    color?: string;
    fontSize?: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    text-align: center;
    font-weight: bold;
    font-size: ${(props)=> props.fontSize}
`   ;