import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionToc from 'material-ui/svg-icons/action/toc';
import ToDoList from '../containers/ToDoList';
import Profile from '../containers/Profile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/App.css';

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//     }
const App = (props) => {
    // render = () => {
    const { app: { isOpen }, toggleDrawer } = props;
    return (
        <Router>
            <div id="app">
                <AppBar
                    title="ToDoList"
                    onLeftIconButtonTouchTap={() => toggleDrawer(!isOpen)} />
                <Route exact path="/" render={() => (<div><h3>Home</h3></div>)} />
                <Route path="/profile" component={Profile} />
                <Route path="/todo" component={ToDoList} />
                <Drawer
                    docked={false}
                    width={200}
                    open={isOpen}
                    onRequestChange={(open) => toggleDrawer(open)}
                >
                    <AppBar
                        onLeftIconButtonTouchTap={() => toggleDrawer(!isOpen)} />
                    <Divider />
                    <List>
                        <ListItem primaryText="Home" leftIcon={<ActionHome />} containerElement={<Link to="/" />} onTouchTap={() => toggleDrawer(!isOpen)} />
                        <ListItem primaryText="Profile" leftIcon={<ActionAccountCircle />} containerElement={<Link to="/profile" />} onTouchTap={() => toggleDrawer(!isOpen)} />
                        <ListItem primaryText="ToDoList" leftIcon={<ActionToc />} containerElement={<Link to="/todo" />} onTouchTap={() => toggleDrawer(!isOpen)} />
                    </List>
                </Drawer>
            </div>
        </Router>
    );
};
export default App;
