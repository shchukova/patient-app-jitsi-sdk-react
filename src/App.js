import { JitsiMeeting } from '@jitsi/react-sdk';
import React, { useRef, useState } from 'react';


function App() {

    const apiRef = useRef();
    const [ logItems, updateLog ] = useState([]);

    const generateRoomName = () => `JitsiMeetRoomNo${Math.random() * 100}-${Date.now()}`;

    const handleApiReady = apiObj => {
        apiRef.current = apiObj;
        // apiRef.current.on('audioMuteStatusChanged', payload => handleAudioStatusChange(payload, 'audio'));
        // apiRef.current.on('videoMuteStatusChanged', payload => handleAudioStatusChange(payload, 'video'));
        // apiRef.current.on('raiseHandUpdated', printEventOutput);
        // apiRef.current.on('titleViewChanged', printEventOutput);
        // apiRef.current.on('chatUpdated', handleChatUpdates);
        // apiRef.current.on('knockingParticipant', handleKnockingParticipant);
    };

    const handleReadyToClose = () => {
        /* eslint-disable-next-line no-alert */
        alert('Ready to close...');
    };

    const handleJitsiIFrameRef1 = iframeRef => {
        iframeRef.style.border = '10px solid #3d3d3d';
        iframeRef.style.background = '#3d3d3d';
        iframeRef.style.height = '400px';
        iframeRef.style.marginBottom = '20px';
    };
    const handleJitsiIFrameRef2 = iframeRef => {
        iframeRef.style.marginTop = '10px';
        iframeRef.style.border = '10px dashed #df486f';
        iframeRef.style.padding = '5px';
        iframeRef.style.height = '400px';
    };


    return (
    <JitsiMeeting
        roomName = { generateRoomName() }
        onApiReady = { externalApi => handleApiReady(externalApi) }
        OnReadyToClose = { handleReadyToClose }
        configOverwrite = {{
          startWithAudioMuted: process.env.REACT_APP_JITSI_STARTWITHAUDIOMUTED,
          hiddenPremeetingButtons: process.env.REACT_APP_JITSI_HIDDENPREMEETINGBUTTONS
        }}
        getIFrameRef = { handleJitsiIFrameRef1 }
    />
  );
}

export default App;
