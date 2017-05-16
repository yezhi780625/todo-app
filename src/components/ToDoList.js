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
    const {new_item,onChangeInput,createTodo,todos} = this.props;
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
                    onTouchTap={props.createTodo}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </MuiThemeProvider>
            <br />
            <span>ToDo:</span>
            <MuiThemeProvider>
                <List>
                    {
                        props.todos.map((todo, index) => {
                             console.log(todo.completed);
                            return (<ListItem
                                key={"todo_" + todo.id}
                                className={todo.completed ? "completed" : ""}
                                leftCheckbox={<Checkbox value={todo.completed} onCheck={() => { props.toggleTodo(todo.id); }} />}
                                primaryText={(<span id={"edit_" + index} className={todo.completed?"completed":""}>{todo.text}</span>)}
                                rightIconButton={<IconButton onTouchTap={() => props.deleteTodo(todo.id)}><HighlightOff className="destroy" /></IconButton>}
                            />)
                        })}
                </List>
            </MuiThemeProvider>
        </div>
    )
}

export default ToDoList;