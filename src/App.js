import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from './Fab'

import GooglePlayBadgePNG from './google-play-badge.png'
import SyncIconPNG from './sync-icon.png'
import StatsIconPNG from './stats-icon.png'
import AlertIconPNG from './alert-icon.png'
import AppleWatchPNG from './AppleWatch.png'
import {ReactComponent as DownloadAppStoreSVG} from './DownloadOnAppStore.svg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Dae Hwa Kim, Leonard Vuniqi, Tony Trieu
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '55%', // 16:9
    backgroundSize: '50%',
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  { 
    heading: 'Real-time Sync', 
    description: 'We ensure your data is always synced to make sure you and/or your practitioner have instant access to your vitals.',
    image: SyncIconPNG
  },
  { heading: 'Statistics', 
    description: 'Get your current vitals and your vitals from minutes ago with our simple and elegent design.',
    image: StatsIconPNG
  },
  { 
    heading: 'Emergency Alert',
    description: 'Be notified when vitals are at alarming levels. Notifications will be sent across all systems that access the app.',
    image: AlertIconPNG
  }
];

function App() {
  const classes = useStyles();
  
  const scrollToTop = () => { 
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default">
        <Toolbar>
          <Menu className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Apple Watch
          </Typography>
        </Toolbar>
      </AppBar>
      <Fab label="Go to Top" onClick={scrollToTop} />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <center><img src={AppleWatchPNG} width={'60%'}/></center>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Apple Watch
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Apple Watch uses the electrical heart sensor to record a single lead ECG. The ECG app then provides a result of sinus rhythm, atrial fibrillation or inconclusive, and prompts the user to enter any symptoms such as rapid or pounding heartbeat, dizziness or fatigue.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <img src={GooglePlayBadgePNG} width={150} style={{ marginTop: '-9px'}} />
                </Grid>
                <Grid item>
                  <DownloadAppStoreSVG width={150}  />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Real-time Sync"
                  >
                    {/* <img src={card.image} alt={card.heading} /> */}
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Apple Watch
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Electro Cardiogram (ECG) notifications at lightening fast speeds.
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

export default App;