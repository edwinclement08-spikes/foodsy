import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Tab, Tabs, Button, TabHeading, Icon} from 'native-base';
import SignIn from './register';
import Register from './signin';

export default class LoginDriver extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            abc: 1,
        };
    }


    render() {
        console.disableYellowBox = true;
        return ( 
            <Container>
                <Header style={{height: 0}} hasTabs/>
                <Tabs tabBarUnderlineStyle={{backgroundColor: '#00a4fe', opacity:0}} >

                <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 60}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 60}}
                         heading="Sign In">
                        <Register navigation={this.props.navigation}/>
                    </Tab>

                    <Tab activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
                         textStyle={{color: '#fff', fontSize: 12}}
                         tabStyle={{backgroundColor: '#0083d9', height: 60}}
                         activeTabStyle={{backgroundColor: '#00a4fe', height: 60}}
                         heading="Register">
                        <SignIn navigation={this.props.navigation}/>
                    </Tab>

                    
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {},
    tab: {
        backgroundColor: '#3F51B5'
    }

})