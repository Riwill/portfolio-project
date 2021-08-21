import React, { Component } from 'react';
import TextMed from "../../components/TextMed/index";
import TextSmall from "../../components/TextSmall/index";
import Grid from '@material-ui/core/Grid';
import LinkedIn from "../../image/linkedin.svg";
import GithubLogo from "../../image/github-logo.svg";
import EmailIcon from "../../image/email-icon.svg";
import WaIcon from "../../image/wa-icon.svg";
import './SayHello.css'
import { Fade } from '@material-ui/core';

class SayHello extends Component {
    render() {
        return (
            <Fade in appear>
                <Grid container spacing={1} style={{
                    marginTop: "-3%",
                    marginLeft: "-1%",
                    marginBottom: "3%"
                }}>
                    <Grid item sm={1} xs={1}/>
                    <Grid item sm={10} xs={10}>
                        <Grid item sm={12} xs={12}>
                            <TextMed value={"Say Hello"}></TextMed>
                        </Grid>
                        <Grid item sm={12} xs={12}style={{
                            marginTop: "-3%",
                            marginBottom: "3%"
                        }}>
                            <hr style={{ border: 'solid black', width: 'auto', margin: 'auto'}}></hr>
                        </Grid>        
                    </Grid>
                    <Grid item sm={1} xs={1}/>
                    <Grid item sm={1} xs={1}/>
                    <Grid item sm={5} xs={10}>
                        <TextSmall value={"Looking to start new project or hire new programer? Send me a massage and I'll do my best to reply within 24 hrs."}></TextSmall>
                        <TextSmall value={"You can contact me using WA & email and if you want to know me more here's my LinkedIn & GitHub."}></TextSmall>
                    </Grid>
                    <Grid item sm={1} xs={2}>
                    </Grid>
                    <Grid container item sm={4} xs={10} className={"container-bio"} style={{
                            marginLeft: "-2%",
                        }}>
                        <Grid item sm={1} xs={3} style={{
                            marginTop: "5%",
                        }}>
                            <a href={'https://wa.link/wsmhvf'}>
                                <img src={WaIcon}></img>
                            </a>
                        </Grid>
                        <Grid item sm={5} xs={9}>
                            <a href={'https://wa.link/wsmhvf'}>
                                <TextSmall value={"+62 898-7450-127"}></TextSmall>
                            </a>
                        </Grid>
                        <Grid item sm={1} xs={3} style={{
                            marginTop: "5%",
                        }}>
                            <a href={`mailto:rwilliam653@gmail.com`}>
                                <img src={EmailIcon}></img>
                            </a>
                        </Grid>
                        <Grid item sm={5} xs={9}>
                            <a href={`mailto:rwilliam653@gmail.com`}>
                                <TextSmall value={"rwilliam653@gmail.com"}></TextSmall>
                            </a>
                        </Grid>
                        <Grid item sm={1} xs={3} style={{
                            marginTop: "5%",
                        }}>
                            <a href={'https://www.linkedin.com/in/riwill/'}>
                                <img src={LinkedIn}></img>
                            </a>
                        </Grid>
                        <Grid item sm={5} xs={9}>
                            <a href={'https://www.linkedin.com/in/riwill/'}>
                                <TextSmall value={"Richard William"}></TextSmall>
                            </a>
                        </Grid>
                        <Grid item sm={1} xs={3} style={{
                            marginTop: "5%",
                        }}>
                            <a href={'https://github.com/Riwill'}>
                                <img src={GithubLogo}></img>
                            </a>
                        </Grid>
                        <Grid item sm={5} xs={9}>
                            <a href={'https://github.com/Riwill'}>
                                <TextSmall value={"RiWill"}></TextSmall>
                            </a>
                        </Grid>         
                    </Grid>
                    <Grid item sm={1} xs={null}/>
                </Grid>
            </Fade>
        );
    }
};

export default SayHello 