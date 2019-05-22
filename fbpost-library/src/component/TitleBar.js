import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class TitleBar extends Component{

    render(){
        
            return (
              <div style={styles.root}>
                <AppBar position="static" color="default">
                  <Toolbar>
                    <Typography variant="h6" color="inherit">
                      Photos
                    </Typography>
                  </Toolbar>
                </AppBar>
              </div>
            );
          
    }
}

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor:'blue',
  }
};
