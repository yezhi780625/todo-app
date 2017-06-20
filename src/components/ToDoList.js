import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import fire from '../configs/fire';
import{Map} from 'immutable';
import '../styles/ToDoList.css';
const style = {
    marginRight: 20,
};
const preventPropagation = (e) => {
    e.stopPropagation();
    e.preventDefault();
};

export default class TodoList extends Component {
    componentDidMount() {
        let todoRef = fire.database().ref('todo');
        let updateItem = this.props.updateItem;
        todoRef.on('value',function(snapchat){
            var items = [];
            snapchat.forEach((todo)=>{
                let todoMap = Map(todo.val());
                todoMap=todoMap.set("id",todo.key);
                items.push(todoMap.toJS());
            });
            updateItem(items);
        });
    }
    render() {
        const { todo: { new_item }, onChangeInput, toggleItem, deleteItem, createItem, todo: { items } } = this.props;
        return (
            <div className="todo">
                <div className="todo-input">
                    <TextField
                        style={{ marginRight: "10px" }}
                        hintText="What To Do?"
                        value={new_item}
                        onChange={onChangeInput}
                        onKeyPress={(e) => { if (e.which === 13) createItem(); }
                        }
                    />
                    <FloatingActionButton
                        mini={true}
                        style={style}
                        onTouchTap={createItem}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
                <div className="container">
                    <div className="todo-block">
                        <span className="label">ToDo:</span>
                        <div className="todo-list">
                            <List >
                                {
                                    items.map((item, index) => {
                                        return (!item.completed && (!item.archived) &&
                                            <ListItem
                                                key={"todo_" + item.id}
                                                leftCheckbox={<Checkbox checked={item.completed} onCheck={() => { toggleItem(item.id); }} />}
                                                primaryText={(<span id={"edit_" + index} >{item.text}</span>)}
                                                onClick={preventPropagation}
                                                rightIconButton={<IconButton onTouchTap={() => deleteItem(item.id)}><HighlightOff className="destroy" /></IconButton>}
                                            />);
                                    })}
                            </List>
                        </div>
                    </div>
                    <div className="todo-block">
                        <span className="label">Done:</span>
                        <div className="todo-list">
                            <List >
                                {
                                    items.map((item, index) => {
                                        return (item.completed && (!item.archived) &&
                                            <ListItem
                                                key={"todo_" + item.id}
                                                leftCheckbox={<Checkbox checked={item.completed} onCheck={() => { toggleItem(item.id); }} />}
                                                primaryText={(<span id={"edit_" + index} >{item.text}</span>)}
                                                onClick={preventPropagation}
                                                rightIconButton={<IconButton onTouchTap={() => deleteItem(item.id)}><HighlightOff className="destroy" /></IconButton>}
                                            />);
                                    })}
                            </List>
                        </div>
                    </div>
                    <div className="todo-block">
                        <span className="label">Archived:</span>
                        <div className="todo-list">
                            <List >
                                {
                                    items.map((item, index) => {
                                        return (item.archived &&
                                            <ListItem
                                                key={"todo_" + item.id}
                                                primaryText={(<span id={"edit_" + index}>{item.text}</span>)}
                                            />);
                                    })}
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}