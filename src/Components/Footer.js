import React from 'react'
import '.././Style.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaSchool, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <Grid container spacing={3}>

                        {/* <Grid item size={6}>
                            <div className="footer-column">
                                <Grid container spacing={2} >

                               
                                <h3>CONTACT US</h3>
                               
                                 <Grid item size={1}><FaMapMarkerAlt className="footer-icon" /></Grid>
                              <Grid item size={11}>  <p> NO.41, MALLIGAI STREET, SRI RAJESHWARI NAGAR, VALLANCHERRY, GUDUVANCHERRY,
                                    KANCHEEPURAM DISTRICT, TAMIL NADU, SOUTH INDIA ZIP CODE - 603202</p></Grid>
                                 
                                <p><FaPhoneAlt className="footer-icon" /> Office: +91-9962005040 / +91-9566030040 / +91-9176182968</p>
                                <p><FaEnvelope className="footer-icon" />  jsonpaulraj@yahoo.co.in</p>
                                 </Grid>
                            </div>
                        </Grid> */}
                        <Grid item size={6}>
                            <div className="footer-column">
                                <Grid container spacing={2}>
                                    <Grid item size={12}>
                                        <Typography variant="h6" component="h3">CONTACT US</Typography>
                                    </Grid>

                                    <Grid item size={1}>
                                        <FaMapMarkerAlt className="footer-icon" />
                                    </Grid>
                                    <Grid item size={11}>
                                        <Typography variant="body2">
                                            NO.41, MALLIGAI STREET, SRI RAJESHWARI NAGAR, VALLANCHERRY, GUDUVANCHERRY,
                                            KANCHEEPURAM DISTRICT, TAMIL NADU, SOUTH INDIA ZIP CODE - 603202
                                        </Typography>
                                    </Grid>

                                    <Grid item size={1}>
                                        <FaPhoneAlt className="footer-icon" />
                                    </Grid>
                                    <Grid item size={11}>
                                        <Grid container spacing={2}>
                                            <Grid item size={1}>
                                                <Typography variant="body2">
                                                    Office:
                                                </Typography>
                                            </Grid>
                                            <Grid item size={5}>
                                                <Typography variant="body2" align='left'>
                                                    +91-9962005040<br />
                                                    +91-9566030040 <br />
                                                    +91-9176182968
                                                </Typography>
                                            </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item size={1}>
                                            <FaEnvelope className="footer-icon" />
                                        </Grid>
                                        <Grid item size={11}>
                                            <Typography variant="body2">
                                                jsonpaulraj@yahoo.co.in
                                            </Typography>
                                        </Grid>
                                    </Grid>
                            </div>
                        </Grid>
                        {/* Quick Links */}
                        <Grid item size={3}>
                            <div className="footer-column">
                                <h3>QUICK LINKS</h3>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Who We Are</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Our Gallery</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Donate</a></li>
                                </ul>
                            </div>
                        </Grid>


                        {/* Follow Us */}
                        <Grid item size={3}>
                            <div className="footer-column">
                                <h3>FOLLOW US</h3>
                                <div className="social-icons">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaYoutube /></a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <hr />
                <Grid container spacing={2}>
            <Grid item size={10}>
                <div className="footer-bottom">
                    © 2025 INFORMH. All Right Reserved.
                </div>
                </Grid>
                 <Grid item size={2}>
                <div className="footer-bottom-right">
                    Designed By <Link>AlmiTech</Link>
                </div>
                </Grid>
                </Grid>
            </footer>
        </div>
    )
}

export default Footer