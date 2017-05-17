import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ToDoList from '../containers/ToDoList';

export default class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render = () => {
        const { app: { isOpen }, toggleDrawer } = this.props;
        return (
            <div style={{height:"100%",display:"flex",flexDirection:"column"}}>
                <MuiThemeProvider>
                    <AppBar
                        title="ToDoList"
                        onLeftIconButtonTouchTap={() => toggleDrawer(!isOpen)} />
                </MuiThemeProvider>
                <ToDoList />
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
                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                        </List>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}