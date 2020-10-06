import React, { createRef, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../images/logos/logo.png'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';

// import MomentUtils from '@date-io/moment';


const drawerWidth = 306;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            textAlign: 'center'
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const AddEvent = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    const drawer = (
        <div>
            <Link to='/'><img style={{
                padding: '50px',

            }} width='100%' height='50%' src={logo} alt="Logo" />
                <div className={classes.toolbar} /></Link>

            <Divider />
            <List >
                <Link to='/volunteerRegisterList'>
                    <ListItem style={{ textAlign: 'center' }} >
                        <ListItemText primary='Volunteer register list' />

                    </ListItem>
                </Link>

                <Link to='/addEvent'>
                    <ListItem style={{ textAlign: 'center' }} >

                        <ListItemText primary='Add Event' />
                    </ListItem>
                </Link>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    const [selectedDate, setSelectedDate] = useState({ eventDate: new Date() });
    console.log(selectedDate.eventDate)

    const handleDateChange = (date) => {
        const newDates = { ...selectedDate }
        newDates.eventDate = date.target.value
        setSelectedDate(newDates);
    };
    const [event, setEvent] = useState({
        eventName: '',
        date: selectedDate.eventDate,
        description: '',
        image: ''
    })

    const handleInput = (e) => {
        if (e.target.name === 'eventName') {
            const newEvent = { ...event }
            newEvent[e.target.name] = e.target.value
            setEvent(newEvent)
        }

        if (e.target.name === 'date') {

            setEvent(selectedDate.eventDate)
        }
        if (e.target.name === 'description') {

            const newEvent = { ...event }
            newEvent[e.target.name] = e.target.value
            setEvent(newEvent)
        }
    }
    const handleCrateEvent = () => {
        console.log(event)
        fetch('https://afternoon-ravine-00878.herokuapp.com/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        })

    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Add Event
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onChange={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main style={{
                display: 'flex',
                backgroundColor: '#F4F7FC'
            }} className={classes.content}>
                <div className={classes.toolbar} />
                <div style={{
                    width: '1041px',
                    height: '406px',
                    backgroundColor: '#fff',
                    marginTop: '150px',
                    borderRadius: '35px',
                    justifyContent: 'center'
                    // display: flex;


                }}>
                    <form className=" border border-light p-5 justify-content-center" action="#!">
                        <div className="form-row mb-4">
                            <div className="col">
                                <label htmlFor="eventName"> Event Name: </label>
                                <input name="eventName" onBlur={handleInput} label="Event Date" type="text" id="eventName" className="form-control" placeholder="Event title" />
                            </div>
                            <div className="col">

                                <input type="date"
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </div>
                        </div>
                        <div className=" row  form-row mb-4">
                            <div className="col-6">
                                <label htmlFor="description"> Description: </label>

                                <textarea name='description' onBlur={handleInput} placeholder="Description" className="form-control" id="description" rows="3"></textarea>
                            </div>
                            <div className="col-6 ">



                                <input
                                    name="image"
                                    accept="image/*"
                                    className={classes.input}
                                    id="banner"
                                    multiple
                                    type="file"
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor="banner">Banner
                                <br />

                                    <Button variant="outlined" color="primary" component="span" startIcon={<CloudUploadIcon />}>
                                        Upload Image
        </Button>
                                </label>



                            </div>

                        </div>





                        <div className='justify-content-end'><Button onClick={handleCrateEvent} variant="contained" color="primary">
                            Submit
      </Button></div>





                    </form>



                </div>

            </main>
        </div >
    );
};

export default AddEvent;