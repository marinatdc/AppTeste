import { useState } from 'react';
import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact, Pressable, View} from 'react-native';
import { ContainerModal, IconCloseModal } from './modaStyle';
import { theme } from '@/shared/themes/theme';
import { Text } from '@/shared/components/text/text';
import { textTypes } from '../text/textTypes';
import Button from '../button/button';
import { buttonsTheme } from '@/shared/themes/buttons';


interface ModalProps extends ModalPropsReact {
     title: string;
     text: string; 
     onCloseModal: () => void;
}

const Modal = ({title, onCloseModal, text, ...props} : ModalProps) => {
    return (
        <ModalReact
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                onCloseModal();
            } }
            {...props}
        >
            <ContainerModal>
                <IconCloseModal 
                name="circle-with-cross" 
                size={20} 
                onPress={onCloseModal}
                color={theme.colors.darkBlue.blue100}/>
                <View>
                    <Text 
                    type={textTypes.MEDIUM} 
                    margin='7px 0px 10px 0px'
                    color={theme.colors.darkBlue.blue100} 
                    fontWeight='bold'
                    >{title}</Text>
                    <Text 
                    margin='0px 0px 10px 0px'
                    >{text}</Text>
                    <Button type={buttonsTheme.secundary} title='voltar' onPress={onCloseModal}/>
                </View>
            </ContainerModal>
        </ModalReact>
    );
}

export default Modal;