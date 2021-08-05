import React from 'react';
import Button from '@material-ui/core/Button';
import {AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
//import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {makeStyles } from '@material-ui/core/styles'; 
import { BottomNavigationAction } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
    },
    menuButton: { 
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1
    },
    mainFeaturePost: {
      position: "relative",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundOverlay: "rgba(0,0,0,.3)"
    },

    mainFeaturePostContent: {
      position: "relative",
      padding: theme.spacing(6),
      marginTop: theme.spacing(8)
    },
    cardMedia: {
      paddingTop: "56.25%"
    },
    cardContent: {
      flexGrow: 1
    },
    cardGrid : {
      marginTop: theme.spacing(4)
    },
}))

const cards = [1,2,3,4,5,6,7,8,9];


function App() {
  const classes = useStyles()
  const [value, setValue] = React.useState("recents")
  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
  setOpen(true);  
}
const handleClose = () => {
  setOpen(false); 
}

  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
        <IconButton edge ="start" color="inherit" aria-label="menu" className={classes.menuButton}>
          <MenuIcon/>  
        </IconButton>
        <Typography variant="h6" className={classes.title}>Web Developer Blog</Typography>
        <Box mr={3}>
          <Button color="inherit" variant="outlined" onClick={handleClickOpen} > Log In </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"> Log In </DialogTitle>
            <DialogContent>
              <DialogContentText>Log In to see blog </DialogContentText>
              <TextField autoFocus margin="dense" id="name" label="Email Addres" type="email" fullWidth/>
              <TextField autoFocus margin="dense" id="pass" label="Password" type="password" fullWidth/>
            </DialogContent>
            <DialogActions> 
              <Button onClick={handleClose} color="primary">Cancel</Button> 
              <Button onClick={handleClose} color="primary">Log in</Button> 
            </DialogActions>
          </Dialog>
        </Box>
        <Button color="secondary" variant="contained"> Sign Up </Button>
        </Toolbar>
      </Container>
    </AppBar>
    <main>
      <Paper className={classes.mainFeaturePost} style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
      <Container fixed>
        <div classes={classes.overplay}/>
        <Grid container> 
          <Grid item md={6}> 
            <div className={classes.mainFeaturePostContent}>
              <Typography component="h1" color="inherit" gutterBottom>   
                Web Developer Blog
              </Typography>
              <Typography component="h5" color="inherit" paragraph>   
                This is site was created for self-studying web technologies like module React JS
              </Typography>
              <Button variant="contained" color="secondary">
                Learn more
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      </Paper>
      <div className={classes.mainContent}> 
        <container maxWidth="md">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome Web Developer Blog
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Created this page by help free course of Web Developer Blog
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={5} justify = "center">
              <Grid item>
                <Button varaint="contained" color="primary"> Start Now</Button>
                </Grid>
                <Grid item>
                <Button varaint="outline" color="primary"> Learn More</Button>
              </Grid>
            </Grid>
          </div>
        </container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className = {classes.card}>
                <CardMedia className = {classes.cardMedia} image="https://source.unsplash.com/random" title = "Image title"/>
                <CardContent className = {classes.cardContent}>
                  <Typography variant ="h5" gutterBottom>
                    Blog Post
                  </Typography>
                  <Typography>
                    Descripion 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    <footer>
      <Typography variant = "h6" align="center" gutterBottom>
        Footer
      </Typography>
      <BottomNavigation
        value = {value}
        onChange = {handleChange}
        classesName={classes.root}>
          <BottomNavigationAction  label= "Recents"  value = "recents" icon = {<RestoreIcon/>}/>
          <BottomNavigationAction  label= "Favorites"  value = "favorites" icon = {<FavoriteIcon/>}/>
          <BottomNavigationAction  label= "Nearby"  value = "nearby" icon = {<LocationOnIcon/>}/>
          <BottomNavigationAction  label= "Folder"  value = "folder" icon = {<FolderIcon/>}/>
      </BottomNavigation>
      <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
        Web Developer Blog React js Material UI site
      </Typography>
    </footer>
    </>
  );
}

export default App;
