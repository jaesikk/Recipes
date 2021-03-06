import React, {useState}  from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  AppBar,
  Button,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core/';
import HomeCard from '../../components/Home';
import Cookies from 'js-cookie';
import { palette } from '@material-ui/system';
import Layout from '../../layout';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: '90%',
  },
}));

export default function Home() {  

  const classes = useStyles();

   // // 로그인 상태에 따라 MyPage, 로그인 로그아웃 보여주기
  let history = useHistory();

    const onClickBtn = () => {
      history.push('/mypage');
  };

  return (    

    <React.Fragment>
      <Layout>
        <CssBaseline />  
        <Box bgcolor="warning.light" p={3}>
          <div className={classes.NavContent}>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="secondary">
                냉장고를 부탁해
              </Typography>                   
            </Container>
          </div>
          <HomeCard />
        </Box>      
      </Layout>
    </React.Fragment>    
  );
}
