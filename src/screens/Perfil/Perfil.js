import { PerfilBackGround } from "../../components/PerfilComponent/PerfilComponent"
import { Seta } from "../../components/PerfilComponent/PerfilComponent"
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

//Importando os componentes Criados No PerfilComponents e outras paradas dos icones


//Montando a estrutura da Pagina com os components pre criados e inserindo textos/icones
export const Perfil = () => {
    return (
        <PerfilBackGround>
            <Seta>
                <MaterialIcons name="keyboard-arrow-left" size={50} color="#E6C8FF" />
            </Seta>
            <ImagemLinda>
                <ImagemCss>
                    <FontAwesome name="user-circle-o" size={120} color="#B287FF" />
                </ImagemCss>
            </ImagemLinda>
            <CameraWhiteBackGround>
                <MaterialIcons name="photo-camera" size={35} color="#A06AFF" />
            </CameraWhiteBackGround>
            <BottomOnAHeader>
                    <NomeText>Nome</NomeText>
                <NameInput>
                    <NameTextInput>Insira Seu Nome:</NameTextInput>
                </NameInput>
                    <RaText>RA</RaText>
                <RaInput>
                    <RaTextInput>Insira Seu RA:</RaTextInput>
                </RaInput>
                    <TurmaText>Turma</TurmaText>
                <TurmaInput>
                    <TurmaTextInput>Insira Sua Turma:</TurmaTextInput>
                </TurmaInput>
                <EditarButton>
                    <EditarText>Editar</EditarText>
                </EditarButton>
            </BottomOnAHeader>
        </PerfilBackGround>
    )
}

//Engolindo o Choro e Fazendo o L