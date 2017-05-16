import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import ToDoList from './ToDoList';

export default class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render = () => {
        const {isOpen,toggleDrawer} = this.props;
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="ToDoList"
                        onLeftIconButtonTouchTap={()=>toggleDrawer(!isOpen)} />
                </MuiThemeProvider>
                <ToDoList/>
                <MuiThemeProvider>
                    <Drawer
                        docked={false}
                        width={200}
                        open={isOpen}
                        onRequestChange={(open) => toggleDrawer(open)}>
                        <AppBar />
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}