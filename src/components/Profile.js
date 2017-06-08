import React, { Component } from 'react';
import {Card,CardHeader,CardActions,CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class Profile extends Component {
    componentWillMount() {
        this.props.init();
    }
    render() {
        // const {profile} = this.props.profile;
        // console.log(profile);
        return (<Card>
            <CardHeader
                title="I am titlte"
                subtitle="I am subtitlte"
            />
            <CardText>
                Inner Text;
        </CardText>
            <CardText>
                Inner Text2;
        </CardText>
            <CardActions>
                    <RaisedButton
                        label="Back"
                        secondary={true}
                    />
            </CardActions>
        </Card>);
    }
}
