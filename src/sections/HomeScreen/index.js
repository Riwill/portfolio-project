import React, { useState } from 'react'
import TextBig from "../../components/TextBig/index";
import './HomeScreen.css'
import Grid from '@material-ui/core/Grid';
import MyFace from "../../image/fotoCv-removebg-preview.png";
import { Fade } from '@material-ui/core';

const HomeScreen = ()=>{
    return (
            <Fade in appear>
                <Grid container className={"container-home"}style={{
                    marginTop: "6%",
                    marginBottom: "5%"
                }}>
                    <Grid item sm={1} xs={1}/>
                    <Grid item sm={8} xs={10}>
                        <TextBig value="I'm Richard William, a programer based in Bandung. Available for full-time and freelance job."></TextBig>  
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <img src={MyFace}/>
                    </Grid>
                </Grid>
            </Fade>
    )
}

export default HomeScreen