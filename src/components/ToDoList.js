import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import './ToDoList.css';
const style = {
    marginRight: 20,
};
const ToDoList = (props) => {
    const { todo: { new_item }, onChangeInput, toggleItem, deleteItem, createItem, todo: { items } } = props;
    return (
        <div className="todo">
            <div className="todo-input">
            <MuiThemeProvider>
                <TextField
                    style={{marginRight:"10px"}}
                    hintText="What To Do?"
                    value={new_item}
                    onChange={onChangeInput}
                    onKeyPress={(e) => { if (e.which === 13) createItem(); }
                    }
                />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <FloatingActionButton
                    mini={true}
                    style={style}
                    onTouchTap={createItem}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </MuiThemeProvider>
            </div>
            <div className="container">
                <div className="todo-block">
                    <p>ToDo:</p>
                    <MuiThemeProvider>
                        <div className="todo-list">
                            <List >
                                {
                                    items.map((item, index) => {
                                        return (!item.completed && (!item.archived) &&
                                            <ListItem
                                                key={"todo_" + item.id}
                                                className={item.completed ? "completed" : ""}
                                                leftCheckbox={<Checkbox value={item.completed} onCheck={() => { toggleItem(item.id); }} />}
                                                primaryText={(<span id={"edit_" + index} className={item.completed ? "completed" : ""}>{item.text}</span>)}
                                                rightIconButton={<IconButton onTouchTap={() => deleteItem(item.id)}><HighlightOff className="destroy" /></IconButton>}
                                            />);
                                    })}
                            </List>
                        </div>
                    </MuiThemeProvider>
                </div>
                <div className="todo-block">
                    <p>Done:</p>
                    <MuiThemeProvider>
                        <div className="todo-list">
                            <List >
                                {
                                    items.map((item, index) => {
                                        return (item.completed && (!item.archived) &&
                                            <ListItem
                                                key={"todo_" + item.id}
                                                className={item.completed ? "completed" : ""}
                                                leftCheckbox={<Checkbox value={item.completed} onCheck={() => { toggleItem(item.id); }} />}
                                                primaryText={(<span id={"edit_" + index} className={item.completed ? "completed" : ""}>{item.text}</span>)}
                                                rightIconButton={<IconButton onTouchTap={() => deleteItem(item.id)}><HighlightOff className="destroy" /></IconButton>}
                                            />);
                                    })}
                            </List>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;