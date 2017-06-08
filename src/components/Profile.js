import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class Profile extends Component {
    componentWillMount() {
        this.props.init();
    }
    render() {
        const { profile } = this.props;
        if (profile.length === 0) {
            return (<h1>loading</h1>);
        }
        else
            return (<Card>
                <CardHeader
                    title={profile.name_ch}
                    subtitle={profile.name_en}
                    avatar={<Avatar src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/12936622_10205138715661393_6050838685734639344_n.jpg?oh=d7887ad76454b9ff23a76c7302ad844b&oe=59AC4BE6"
                        size={50} />}
                />
                <CardText>
                    <List>工作經驗:
                        {
                            profile.experiences.map((item, index) => (<ListItem
                                key={index}
                                primaryText={item.title + " , " + item.company + " , " + item.department + " , " + item.start + " ~ " + item.end} />))
                        }
                    </List>
                </CardText>
                <CardText>
                    <List>學歷:
                        {
                            profile.educations.map((item, index) => (<ListItem
                                key={index}
                                primaryText={item.degree + " , " + item.school + " " + item.department + " , " + item.start + " ~ " + item.end} />))
                        }
                    </List>
                </CardText>
            </Card>);
    }
}
