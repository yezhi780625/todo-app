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

const ToDoList = (props) => {
    let style = {
        marginRight: 20,
    };
    
    const {todo:{new_item},onChangeInput,createTodo,todo:{items}} = props;
    return (
        <div style={{ padding: "20px" }}>
            <MuiThemeProvider>
                <TextField
                    hintText="What To Do?"
                    value={new_item}
                    onChange={onChangeInput}
                    onKeyPress={(e)=>{if(e.which === 13) createTodo();}
                    }
                />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <FloatingActionButton
                    mini={true}
                    style={style}
                    onTouchTap={createTodo}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </MuiThemeProvider>
            <br />
            <span>ToDo:</span>
            <MuiThemeProvider>
                <List>
                    {
                        items.map((item, index) => {
                             console.log(item.completed);
                            return (<ListItem
                                key={"todo_" + item.id}
                                className={item.completed ? "completed" : ""}
                                leftCheckbox={<Checkbox value={item.completed} onCheck={() => { props.toggleTodo(item.id); }} />}
                                primaryText={(<span id={"edit_" + index} className={item.completed?"completed":""}>{item.text}</span>)}
                                rightIconButton={<IconButton onTouchTap={() => props.deleteTodo(item.id)}><HighlightOff className="destroy" /></IconButton>}
                            />)
                        })}
                </List>
            </MuiThemeProvider>
        </div>
    )
}

export default ToDoList;