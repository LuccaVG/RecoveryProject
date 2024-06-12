import { TextInput } from "react-native-web";
import styled from "styled-components";
import { render } from "react-native-web";

//criando, estilizando e exportando os componentes a serem usados na pagina perfil

export const PerfilBackGround = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FFFBEB;
    width: 100%;
    height: 100%;
`

export const Seta = styled.SafeAreaView`
    right: 180px;
    top: 22px;
`

export const ImagemLinda = styled.SafeAreaView`
    height: 180px;
    width: 180px;
    background-color: #E6C8FF;
    border-radius: 90px;
    top: 55px;
    align-items: 'center';
    position: absolute;
`
export const CameraWhiteBackGround = styled.SafeAreaView`
    height: 35px;
    width: 35px;
    background-color: #FFFFFF;
    border-radius: 5px;
    top: 134px;
    left: 64px;
    align-items: 'center';
`

export const ImagemCss = styled.SafeAreaView`
    left: 30px;
    top: 30px;
`
export const BottomOnAHeader = styled.SafeAreaView`
    height: 526px;
    width: 426px;
    top: 222px;
    right: 4px;
    background-color: #B88FFF;
    align-items: 'center';
    border-radius: 25px;
`

export const NameInput = styled.SafeAreaView`
    height: 52px;
    width: 330px;
    border-radius: 6px;
    background-color: #FFFFFF;
    align-items: 'center';
    left: 50px;
    top: 40px;
    margin-bottom: 20px;
`

export const RaInput = styled.SafeAreaView`
    height: 52px;
    width: 330px;
    border-radius: 6px;
    background-color: #FFFFFF;
    align-items: 'center';
    left: 50px;
    top: 40px;
    margin-bottom: 20px;
`

export const TurmaInput = styled.SafeAreaView`
    height: 52px;
    width: 330px;
    border-radius: 6px;
    background-color: #FFFFFF;
    align-items: 'center';
    left: 50px;
    top: 40px;
    margin-bottom: 20px;
`

export const EditarButton = styled.TouchableOpacity`
    height: 50px;
    width: 250px;
    border-radius: 10px;
    background-color: #5B26BA;
    left: 92px;
    top: 55px;
`

export const NomeText = styled.Text`
    font-size: 20px;
    left: 60px;
    top: 30px;
    color: #FFFFFF;
`

export const RaText = styled.Text`
    font-size: 20px;
    left: 60px;
    top: 30px;
    color: #FFFFFF;
`

export const TurmaText = styled.Text`
    font-size: 20px;
    left: 60px;
    top: 30px;
    color: #FFFFFF;
`

export const EditarText = styled.Text`
    font-size: 24px;
    left: 95px;
    top: 10px;
    color: #FFFFFF;
`

export const NameTextInput = styled.Text`
    font-size: 18px;
    left: 16px;
    top: 12px;
    color: #8400F2;
`
export const RaTextInput = styled.Text`
    font-size: 18px;
    left: 16px;
    top: 12px;
    color: #8400F2;
`

export const TurmaTextInput = styled.Text`
    font-size: 18px;
    left: 16px;
    top: 12px;
    color: #8400F2;
`