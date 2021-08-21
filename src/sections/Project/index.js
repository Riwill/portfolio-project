import React, { Component } from 'react';
import TextMed from "../../components/TextMed/index";
import TextSmall from "../../components/TextSmall/index";
import TextSmallProject from "../../components/TextSmallProject/index";
import Grid from '@material-ui/core/Grid';
import Gambar1 from '../../image/project1.PNG';
import Gambar2 from '../../image/project2.PNG';
import Logo1 from '../../image/anthem.svg';
import Logo2 from '../../image/japfa.jpg';

import './Project.css';

class Project extends Component {
    render() {
        return (
            <Grid container spacing={3} style={{
                marginBottom: "43%",
                marginLeft: "-1.6%"
            }}>
                <Grid item sm={1} xs={1}/>
                <Grid item sm={10} xs={10}>
                    <Grid item sm={12} xs={12}>
                        <TextMed value={"Latest Project"}></TextMed>
                    </Grid>
                    <Grid item sm={12} xs={12} style={{
                        marginTop: "-3%",
                        marginBottom: "3%"
                    }}>
                        <hr style={{ border: 'solid black', width: 'auto', margin: 'auto'}}></hr>
                    </Grid>        
                </Grid>
                <Grid item sm={1} xs={1}/>
                <Grid item sm={1} xs={1}style={{
                    marginBottom: "10%",
                }}/>
                <Grid item sm={2} xs={1}>
                    <img className={"container-logo"} src={Logo1}></img>
                </Grid>
                <Grid item sm={3} xs={4}style={{
                    marginTop: "-1%",
                    marginLeft:"-2%"
                }}>
                    <TextSmallProject value={"Developed a company profile for a client based on React. in this project, I have opportunity become a front-end developer."}/>
                </Grid>
                <Grid item sm={2} xs={1}
                style={{
                    marginLeft:"2%"
                }}>
                    <img className={"container-logo"} src={Logo2}></img>
                </Grid>
                <Grid item sm={3} xs={4} style={{
                    marginTop: "-1%",
                    marginLeft:"-2%"
                }}>
                    <TextSmallProject value={"Developed a software application for a production team based on Java. in this project, I have opportunity become a full-stack developer."}/>
                </Grid>
                <Grid item sm={1} xs={1}/>
                <Grid item sm={1} xs={1}/>
                <Grid item sm={5} xs={5}>
                    <img className={"container-image"} src={Gambar1}></img>
                </Grid>
                <Grid item sm={5} xs={5}>
                    <img className={"container-image"} src={Gambar2}></img>
                </Grid>
                <Grid item sm={1} xs={1}/>
            </Grid>
        );
    }
};

export default Project 