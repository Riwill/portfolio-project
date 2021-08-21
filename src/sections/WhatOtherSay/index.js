import React, { Component } from 'react';
import TextMed from "../../components/TextMed/index";
import TextSay from "../../components/TextSay/index";
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WhatOtherSay.css'
import { Fade } from '@material-ui/core';

class WhatOtherSay extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return (
            <Fade in appear>
                <Grid container spacing={1} style={{
                    marginTop: "-3%",
                    marginLeft: "-1%"
                }}>
                    <Grid item sm={1} xs={1}/>
                    <Grid item sm={10} xs={10}>
                        <Grid item sm={12} xs={12}>
                            <TextMed value={"Other Say"}></TextMed>
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
                    <Grid item sm={10} xs={10}>
                        <div className="container">
                            <div className={"otherSay"}>
                            <Slider {...settings}>
                                <div>
                                    <TextSay value={"Richard dapat berkomunikasi dengan baik selama masa kerja praktik. Richard juga sangat baik dalam memimpin tim kerja praktik kami. Selama saya bekerja sama dengan Richard, semuanya berjalan dengan baik."}></TextSay>
                                    <TextSay value={"- Kevin Arlandy Widjaya -"}></TextSay>
                                </div>
                                <div>
                                    <TextSay value={"Selama kerja praktek Richard adalah pemimpin tim yang baik. Selama bekerja Richard selalu memberikan pembagian tugas kerja yang baik dan Richard juga baik dalam berkomunikasi dengan anggota tim lainnya. "}></TextSay>
                                    <TextSay value={"- Wempy Yoshua Biang -"}></TextSay>
                                </div>
                            </Slider>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={1} xs={1}/>
                </Grid>
            </Fade>
        );
    }
};

export default WhatOtherSay 