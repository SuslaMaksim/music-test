import React from 'react';
import './Header.scss';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Box,List,ListItem,ListItemText} from '@material-ui/core';
import {Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    toolBar:{
        maxHeight: '64px',
        justifyContent: 'space-between'
    },
    list: {
        display: 'flex',
    },
    listItem:{
        color: 'white',
        width: 'auto',
        padding: '0px',
        '&:last-child':{
            marginRight: '0px'
        }

    },
    listItemText: {
        '& .MuiTypography-root':{
            padding: '6px',
            cursor: 'pointer',
            transition: 'all .3s linear',
            backgroundColor: '#3F51B5',
            fontWeight: '600',
            color: 'white',
            borderRadius: '5px',
            '&:hover':{
                color: '#3F51B5',
                backgroundColor: 'white',
            }

        }
    },
    link:{
        textDecoration: 'none',
        marginRight: '20px ',
        '&:last-child':{
            marginRight: '0px'
        }
    }
}));


let AppHeader = (props)=>{
    let classes = useStyles()
    return(
        <div className='header'>
            <AppBar position='static'>
                <Toolbar className={classes.toolBar}>
                    <Typography variant='h6'>
                        Music Box
                    </Typography>
                    {props.child}
                    <Box component = 'nav'>
                        <List className={classes.list}>
                            <Link className = {classes.link} to='/'>
                                <ListItem  className= {classes.listItem}>
                                    <ListItemText className={classes.listItemText} primary='music list'/>
                                </ListItem>
                            </Link>
                            <Link className = {classes.link} to='/search'>
                                <ListItem  className= {classes.listItem}>
                                    <ListItemText className={classes.listItemText} primary='search'/>
                                </ListItem>
                            </Link>

                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppHeader;