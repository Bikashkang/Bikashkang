import {Stack} from 'expo-router';

export default function Rootlayout(){
    return(
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
            <Stack.Screen name ="+not-found"/>
        </Stack>
    );
}