import React from 'react'
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const Header = () => {
    return(
       
        <IonHeader color="danger">
            <IonToolbar >
            <center>
                <IonTitle >
                    GitHub Battle
                </IonTitle>
                </center>
            </IonToolbar>
        </IonHeader>
     
    );
}

export default Header