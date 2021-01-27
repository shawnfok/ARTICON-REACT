import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import mainImg from './../assets/images/famous_american_painters.jpg'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'
import winArtist from './../assets/images/artist8.jpg'
import winArtwork from './../assets/images/artwork8.jpg'
import logo2 from './../assets/images/articon_logo.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.primary
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: '#544473'
    }
  }
}))

export default function Home({ history }) {
  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(() => {
    setDefaultPage(auth.isAuthenticated())
    const unlisten = history.listen(() => {
      setDefaultPage(auth.isAuthenticated())
    })
    return () => {
      unlisten()
    }
  }, [])

  return (
    <div className={classes.root}>
      { !defaultPage &&
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <Typography variant="h6" className={classes.title} style={{color: '#3b2f50'}}>
                <img src={logo2} style={{ width: '20px', marginRight: '5px' }} />
                 ARTICON ART CONTEST
                </Typography>
              <CardMedia className={classes.media} image={mainImg} title="Famous American Painters" />
              <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">
                Photo by <a href="http://elkridgeart.com/famous-american-painters/" target="_blank" rel="noopener noreferrer">
                  Famous American Painters</a></Typography>
              <CardContent>
                <Typography type="body1" component="p" style={{color: '#3c3050'}}>
                  Articon is an app that helps support the unsupported artists. It enables artists to create their own accounts and upload their artworks to a showroom, allowing them to join several different art contests. The app then lets art supporters to vote for the best artworks they think the best.
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
      { defaultPage &&
        <Grid container spacing={8}>
          <Grid item xs={12} sm={8}>
            <Newsfeed />
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{
              // border: 'solid 3px #544473',
              marginBottom: '15px',
              marginRight: '3px',
              marginLeft: '3px',
              background: `linear-gradient(#f2b950, #C4A2F9)`,
              boxShadow: '3px 3px 4px grey',
              overflow: 'auto'
            }}>
              <img src={winArtwork} style={{
                float: 'right',
                width: '130px',
                height: '130px',
                margin: '15px',
                borderRadius: '6%'
              }} />
              <p style={{
                paddingLeft: '35px',
                fontSize: '1em',
                fontFamily: 'Arial',
                color: '#544473'
              }}>
                The current winner is:</p>
              <div style={{ marginLeft: '40px' }}>
                <img src={winArtist} style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '9%'
                }} />
                <p style={{
                  fontFamily: 'Arial',
                  color: '#544473'
                }}>Abby Hays</p>
              </div>
            </div>
            <FindPeople />
          </Grid>
        </Grid>
      }
    </div>
  )
}
