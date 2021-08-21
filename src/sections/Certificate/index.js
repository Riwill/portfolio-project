import React, { Component } from 'react';
import TextMed from "../../components/TextMed/index";
import TextSmall from "../../components/TextSmall/index";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Gambar1 from '../../image/sertif1.jpg';
import Gambar2 from '../../image/sertif2.jpg';
import Gambar3 from '../../image/sertif3.jpg';
import Gambar4 from '../../image/sertif4.jpg';
import Gambar5 from '../../image/sertif5.jpg';
import Gambar6 from '../../image/sertif6.jpg';
import Gambar7 from '../../image/sertif7.jpg';
import Gambar8 from '../../image/sertif8.jpg';
import Gambar9 from '../../image/sertif9.jpg';
import Gambar10 from '../../image/sertif10.jpg';
import Gambar11 from '../../image/sertif11.jpg';
import Gambar12 from '../../image/sertif12.jpg';
import Gambar13 from '../../image/sertif13.jpg';
import Grid from '@material-ui/core/Grid';
import { Fade } from '@material-ui/core';
import './Certificate.css';

class Certificate extends Component {
    render() {
        return (
            <Fade in appear>
                <Grid container spacing={3}style={{
                    marginLeft: "-1.56%",
                }}>
                    <Grid item sm={1} xs={1}/>
                    <Grid item sm={10} xs={10}>
                        <Grid item sm={12} xs={12}>
                            <TextMed value={"About Me"}></TextMed>
                        </Grid>
                        <Grid item sm={12} xs={12} style={{
                            marginTop: "-3%",
                            marginBottom: "3%"
                        }}>
                            <hr style={{ border: 'solid black', width: 'auto', margin: 'auto'}}></hr>
                        </Grid>        
                    </Grid>
                    <Grid item sm={1} xs={1}/>
                    <Grid item sm={1} xs={1}/>
                    <Grid item sm={3} xs={10} style={{
                        marginTop: "-2%",
                    }}>
                        <TextSmall value={"Bachelor of  Informatics Engineering graduate with programming skills and communication with teams. Have objective to have a career in Software Engineering, specifically in the area of Software Developer that will optimally utilize desktop-based programming skills as well as communication, creativity, and web-based programming skills with cost-efficiency. Looking for opportunities to work full-time and freelance."}></TextSmall>
                        <TextSmall value={"Having experience outside the programming field such as running a business, being a barista, and being a teacher. Here are my certificates and some of my portfolios."}></TextSmall>
                    </Grid>
                    <Grid item sm={7} xs={12}>
                            <Carousel dynamicHeight={true} infiniteLoop={true} thumbWidth={60}>
                                <div>
                                    <img src={Gambar3} />
                                </div>
                                <div>
                                    <img src={Gambar6} />
                                </div>
                                <div>
                                    <img src={Gambar1} />
                                </div>
                                <div>
                                    <img src={Gambar2} />
                                </div>
                                <div>
                                    <img src={Gambar4} />
                                </div>
                                <div>
                                    <img src={Gambar5} />
                                </div>
                                <div>
                                    <img src={Gambar7} />
                                </div>
                                <div>
                                    <img src={Gambar8} />
                                </div>
                                <div>
                                    <img src={Gambar9} />
                                </div>
                                <div>
                                    <img src={Gambar10} />
                                </div>
                                <div>
                                    <img src={Gambar11} />
                                </div>
                                <div>
                                    <img src={Gambar12} />
                                </div>
                                <div>
                                    <img src={Gambar13} />
                                </div>
                            </Carousel>
                    </Grid>
                    <Grid item sm={1} xs={1}/>
                </Grid>
            </Fade>
        );
    }
};

export default Certificate