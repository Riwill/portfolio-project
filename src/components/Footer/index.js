import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import './Footer.css'
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <Element id='footer' name='footer'>
            <div className="container-footer-bottom">
                <Grid container={true}>
                    <Grid item xs={12} md={6}>
                        <p className="container-pfoot1">(c) 2021. Richard William. All Rights Reserved</p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className="container-pfoot2">Powered by React</p>
                    </Grid>
                </Grid> 
            </div>
        </Element>
    )
}

export default Footer