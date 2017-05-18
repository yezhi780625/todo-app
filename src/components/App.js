import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionToc from 'material-ui/svg-icons/action/toc';
import ToDoList from '../containers/ToDoList';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import '../styles/App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render = () => {
        console.log(this.props);
        const { app: { isOpen }, toggleDrawer } = this.props;
        return (
                <Router>
            <div id="app">
                <MuiThemeProvider>
                    <AppBar
                        title="ToDoList"
                        onLeftIconButtonTouchTap={() => toggleDrawer(!isOpen)} />
                </MuiThemeProvider>
                <Route exact path="/" render={() => (<div><h3>Home</h3></div>)}/>
                <Route path="/todo" component={ToDoList}/>
                <MuiThemeProvider>
                    <Drawer
                        docked={false}
                        width={200}
                        open={isOpen}
                        onRequestChange={(open) => toggleDrawer(open)}>
                        <AppBar
                            onLeftIconButtonTouchTap={() => toggleDrawer(!isOpen)} />
                        <Divider />
                        <List>
                            <ListItem primaryText="Home" leftIcon={<ActionHome />} containerElement={<Link to="/"/>} />
                            <ListItem primaryText="ToDoList" leftIcon={<ActionToc />} containerElement={<Link to="/todo"/>} />
                        </List>
                    </Drawer>
                </MuiThemeProvider>
            </div>
                </Router>
        )
    }
}