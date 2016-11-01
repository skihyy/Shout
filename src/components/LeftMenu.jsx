import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';


import ContentAdd from 'material-ui/svg-icons/content/add';
import SocialShare from 'material-ui/svg-icons/social/share';
import ActionSearch from 'material-ui/svg-icons/action/search';
import MapsEditLocation from 'material-ui/svg-icons/maps/edit-location';
import SocialPerson from 'material-ui/svg-icons/social/person';


import Divider from 'material-ui/Divider';

const style = {
 position: 'fixed',
  padding:'70px 5px 15px',
  width: '40%',
  height: '100%',
};


export default class LeftMenu extends React.Component {
    constructor() {
        super()
    }
    render(){
        return(
        <div id='menu'>
           <Paper zDepth={1} style={style}>
           
            <MenuItem primaryText="New Search" leftIcon={<ActionSearch />}/>
            <MenuItem primaryText="Add New Resource" leftIcon={<ContentAdd />}/>
            <MenuItem primaryText="Change Location" leftIcon={<MapsEditLocation />}/>
                <Divider />
            <MenuItem primaryText="About" leftIcon={<SocialPerson />}/>
            <MenuItem primaryText="Invite friends" leftIcon={<SocialShare />}/>
          
          </Paper>
            </div>
      )
    }
}