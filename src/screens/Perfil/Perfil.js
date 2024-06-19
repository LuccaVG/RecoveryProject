import { PerfilBackGround } from "../../components/PerfilComponent/PerfilComponent";
import { Seta } from "../../components/PerfilComponent/PerfilComponent";
import { MaterialIcons } from '@expo/vector-icons';
import { ImagemLinda } from "../../components/PerfilComponent/PerfilComponent";
import { CameraWhiteBackGround } from "../../components/PerfilComponent/PerfilComponent";
import { FontAwesome } from '@expo/vector-icons';
import { ImagemCss } from "../../components/PerfilComponent/PerfilComponent";
import { BottomOnAHeader } from "../../components/PerfilComponent/PerfilComponent";
import { NameInput } from "../../components/PerfilComponent/PerfilComponent";
import { RaInput } from "../../components/PerfilComponent/PerfilComponent";
import { TurmaInput } from "../../components/PerfilComponent/PerfilComponent";
import { EditarButton } from "../../components/PerfilComponent/PerfilComponent";
import { NomeText } from "../../components/PerfilComponent/PerfilComponent";
import { RaText } from "../../components/PerfilComponent/PerfilComponent";
import { TurmaText } from "../../components/PerfilComponent/PerfilComponent";
import { EditarText } from "../../components/PerfilComponent/PerfilComponent";
import { NameTextInput } from "../../components/PerfilComponent/PerfilComponent";
import { RaTextInput } from "../../components/PerfilComponent/PerfilComponent";
import { TurmaTextInput } from "../../components/PerfilComponent/PerfilComponent";
import { Titulo } from "../../components/PerfilComponent/PerfilComponent";
import { SubTitulo } from "../../components/PerfilComponent/PerfilComponent";
import CameraComponent from "../../components/CameraComponent/CameraComponent";
import { useState } from "react";

//Importando os componentes Criados No PerfilComponents e outras paradas dos icones

//Montando os componentes pre-criados

export const Perfil = () => {
    const [isCameraVisible, setIsCameraVisible] = useState(false);

    const toggleCameraVisibility = () => {
        setIsCameraVisible(!isCameraVisible);
    };

    return (
        <PerfilBackGround>
            <Seta>
                <MaterialIcons name="keyboard-arrow-left" size={50} color="#E6C8FF" />
            </Seta>
            <ImagemLinda>
                <ImagemCss>
                    <FontAwesome name="user-circle-o" size={100} color="#B287FF" />
                </ImagemCss>
            </ImagemLinda>

            <CameraWhiteBackGround onPress={toggleCameraVisibility}>
                <MaterialIcons name="photo-camera" size={35} color="#A06AFF" />
            </CameraWhiteBackGround>

            {/* {isCameraVisible && <CameraComponent />} */}
            
            <Titulo>Nome do aluno</Titulo>
            <SubTitulo>Turma do aluno</SubTitulo>
            <BottomOnAHeader>
                <NomeText>Nome</NomeText>
                <NameInput>
                    <NameTextInput>Insira seu Nome:</NameTextInput>
                </NameInput>
                <RaText>RA</RaText>
                <RaInput>
                    <RaTextInput>Insira seu RA:</RaTextInput>
                </RaInput>
                <TurmaText>Turma</TurmaText>
                <TurmaInput>
                    <TurmaTextInput>Insira sua Turma:</TurmaTextInput>
                </TurmaInput>
                <EditarButton>
                    <EditarText>EDITAR</EditarText>
                </EditarButton>
            </BottomOnAHeader>

            <CameraComponent 
                visible={isCameraVisible}
            />
        </PerfilBackGround>
    );
};

//Engolindo o choro e Fazendo o L
