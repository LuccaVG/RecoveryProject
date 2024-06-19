import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';

export default function CameraComponent({ visible, onClose, onPictureTaken }) {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [photoUri, setPhotoUri] = useState(null);
    const cameraRef = useRef(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    async function takePicture() {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhotoUri(photo.uri);
            onPictureTaken(photo.uri);
        }
    }

    return (
        <Modal visible={visible} animationType='fade'>
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    {photoUri ? (
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: photoUri }} style={styles.fullscreenImage} />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => setPhotoUri(null)}>
                                    <Text style={styles.text}>Return to Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={onClose}>
                                    <Text style={styles.text}>Save and Return</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                                    <Text style={styles.text}>Flip Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={takePicture}>
                                    <Text style={styles.text}>Take Picture</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={onClose}>
                                    <Text style={styles.text}>Return to Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </CameraView>
                    )}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '100%',
        justifyContent: 'space-around',
        padding: 20,
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    fullscreenImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
