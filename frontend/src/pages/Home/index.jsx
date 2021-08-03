import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}      
        7링 바이브      
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Recipe_Search() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* 검색창*/}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Recipe_Search
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h4" component="h2">
                      Recipe Name 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
        <Copyright />
    </React.Fragment>
  );
}

// import React, {useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import HomeCard from '../../components/Home';
// import {
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Divider,
// } from '@material-ui/core';
// import { CommonContext } from '../../context/CommonContext';

// // 간단한 카드 스타일링
// const imgStyle = {
//   height: 0,
//   paddingTop: '56.25%', // 16:9
//   margin: 20,
// };
// const cardStyle = {
//   margin: 50,
// };

// // 로그인 상태에 따라 MyPage, 로그인 로그아웃 보여주기
// const MyPageBtn = () => {
//   let history = useHistory();

//   const onClickBtn = () => {
//     history.push('/MyPage');
//   };


//   return (
//     <div>
//       <Button onClick={onClickBtn}>
//         MyPage
//       </Button>
//       <Button>
//         LogOut
//       </Button>
//     </div>
//   );
// };

// const Home = () => {

//   const [visible, setVisible] = useState('로그인안했음');
//   const visibleHandler = () => {
//     setVisible('로그인했음');
//   };
//   const invisibleHandler = () => {
//     setVisible('로그인안했음');
//   };

//   return (
//     <div>
//       <p>로그인에 따른
//         <Button onClick={visibleHandler}>
//           visible
//         </Button>
//         <Button onClick={invisibleHandler}>
//           invisible
//         </Button>
//       </p>
//       <Divider />
//       {visible === '로그인했음' && <MyPageBtn /> }
//       {visible === '로그인안했음' && <Button>LogIn</Button>}

//       <h1>7링바이브</h1>
//     <HomeCard />
//     </div>
//   );
// };

// export default Home;