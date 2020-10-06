
import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../images/logos/logo.png'

import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';


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


const VolunteerRegistrationList = (props) => {

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


    const [volunteer, setVolunteer] = useState([])

    useEffect(() => {
        fetch('https://afternoon-ravine-00878.herokuapp.com/registration')
            .then(res => res.json())
            .then(data => setVolunteer(data))

    }, [])
    console.log(volunteer)


    const handleDelete = ( id) => {
     
        fetch(`https://afternoon-ravine-00878.herokuapp.com/delete/${id}`, {

            method: 'DELETE',
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
                        Volunteer Registration List
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

                <table className="table table-bordered mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration Date</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>

                    
                         {
                            volunteer.map(data => <tbody key={data._id}>
                                <tr>
                                    <th scope="row">{data.name}</th>
                                    <td>{data.email}</td>
                                    <td>{data.event}</td>
                                    <td><button onClick={()=>handleDelete(data._id)} className="btn btn-danger text-light "> <DeleteIcon /> </button></td>
                                </tr>
                            </tbody>)
                        }
                    
                    {/*  */}




                </table>
            </main>
        </div >

    );
};

export default VolunteerRegistrationList;