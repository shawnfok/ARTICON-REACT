import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const cloudPath = "http://res.cloudinary.com/hjlogique/image/upload/"
const artObj = [
  {
    artwork: cloudPath + "v1611712271/b5s36ga4yuudbkpze4qh.png",
    artist: "Greg Everett"
  },
  {
    artwork: cloudPath + "v1611715113/r3t3zn5mkb715lzewwvv.jpg",
    artist: "Linda Alcock"
  },
  {
    artwork: cloudPath + "v1611714130/wxhdykozrbpgtzoz1eme.png",
    artist: "Jasper Ireland"
  },
  {
    artwork: cloudPath + "v1611715265/wprrmbjtfptis6cnzxvf.jpg",
    artist: "Kate Doherty"
  },
  {
    artwork: cloudPath + "v1611714190/losnyd5ko7ca0sgkjagn.png",
    artist: "Miles Wallace"
  },
  {
    artwork: cloudPath + "v1611714236/vpxdjma7yglb1plmzy3m.png",
    artist: "Eliot Haley"
  },
  {
    artwork: cloudPath + "/v1611714262/ijouhfmy94viwrajws07.png",
    artist: "Terry Santos"
  },
  {
    artwork: cloudPath + "v1611714286/lxwq3psou5jipzgdpfyp.png",
    artist: "Abby Hays"
  },
  {
    artwork: cloudPath + "v1611714308/etgnipxg9zd9luzgpron.png",
    artist: "Garfield Ryder"
  },
  {
    artwork: cloudPath + "/v1611714332/fuvyszoym5ffkt1bsoq4.png",
    artist: "Bernice Rooney"
  },
  {
    artwork: cloudPath + "/v1611715290/ibrbllpqli7hnjg94yxq.jpg",
    artist: "Arthur Mohamed"
  },
  {
    artwork: cloudPath + "v1611714360/cmmoft7xsx8k495swrun.png",
    artist: "Lacie Laing"
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '35px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    minWidth: '200px',
    background: '#fcf9ff',
    fontFamily: 'Arial',
    fontSize: '21px',
  },
  header: {
    color: '#544473',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    background: '#ffffff',
    fontSize: '21px',
    boxShadow: 'none'
  },
  artImage: {
    maxWidth: '100%',
  },
  artText: {
    color: '#544473',
    fontFamily: 'Arial',
    fontSize: '18px'
  }
}));


export default function Showroom() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.header}>SHOWROOM</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[0].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[0].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[1].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[1].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[2].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[2].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[3].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[3].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[4].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[4].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[5].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[5].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[6].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[6].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[7].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[7].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[8].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[8].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[9].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[9].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[10].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[10].artist}</p></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img src={artObj[11].artwork} className={classes.artImage} />
            <p className={classes.artText}>{artObj[11].artist}</p></Paper>
        </Grid>

      </Grid>
    </div>
  );
}
