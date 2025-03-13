# Programmänderungen und Verbesserungen
## Überblick
Das Programm von OE3KUW wurde für die Laborübung "Webserver" angepasst. Alle wichtige Stellen für eine das Protokoll wurden mit "task N:" im Code gekennzeichnet 

## Task 1: Überprüfe beim Reset genau die Seriellen Ausgaben und finde alle Stellen die diese im Programm bewirken:
#### 1.) Aufruf im readUART:
    Reboot...

#### 2.) Coredump vom ESP intern: Reboot direkt vom ESP - Nicht vom Code ausgelöst

#### 3.) Aufruf von Setup:
    - start!
    - Output von SSID & PASSWORD from EEPROM
    - SPIFFS init
    - WiFi init

    - Check wird erst aufgerufen wenn ein Client connected

## Task 2:
    im Seriel Monitor eingeben:
        "ssid:"YOUR-SSID"
        "password":"YOUR-PASSWORD"

    Offne die Website:
        Gib die IP des ESPs im Browser aus (Google Chrome nicht entpfohlen)

    Wenn nun Ein- und Aus-Taster gedrückt wird, wir im Serial Monitor ausgegeben:
    - handleWebSocketMessage: on
    oder 
    - handleWebSocketMessage: off

## Task 3:
    Öffne den "Inspection"-Mode im Browser mit "Strg + Shift + I"
    In der Konsole wird toggleON / toggleOFF ausgegeben

    toggleOn / toggleOFF wird durch script.js ausgelöst -> siehe Code

    (es wird weiters mehr information ausgegeben die für Task 4 notwendig ist, nicht relevant für diese Aufgabe)
## Task 4 / 5:
    Öffne die Website auf mindestens 2 Tabs/Rechnern
    Wenn nun der On / Off Taster gedrückt wird, logen alle Browser die Empfangene Nachricht.

    ESP sendet den Update vom Status an alle Clients


## Task 6:
    Entferne in Zeihlennummer 17 die <!-- und --> um <img src="kuran" width="200" hight="200">
    Falls ein anderes file genutzt angezeigt werden soll, muss im Ordner Data nur die kuran.jpeg datei ausgetauscht werden
    Nach erneutem Upload vom Filesystem wird das Bild angezeigt
    
    Im main.cpp wird das Image initialisiert damit es von HTML verwendet werden kann

## Task 7:
    style.css wist bereits bearbeitet, um die Fraben zu änder müssen nur die Hex werte geändert werden.

    Filesystem muss erneut uplaoded werden.

