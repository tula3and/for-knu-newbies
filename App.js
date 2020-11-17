import React, { Component } from "react";
import { Linking } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends Component {
    render() {
        const uri = "https://tula3and.github.io/for-knu-newbies/";
        return (
            <WebView
                ref={(ref) => {
                    this.webview = ref;
                }}
                source={{ uri }}
                onShouldStartLoadWithRequest={(event) => {
                    if (event.url !== uri) {
                        Linking.openURL(event.url);
                        return false;
                    }
                    return true;
                }}
            />
        );
    }
}
