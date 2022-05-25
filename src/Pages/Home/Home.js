import React from 'react';
import Contact from '../ContactUs/Contact';
import Services from './Services/Services';
import Footer from '../Shared/Footer/Footer';
import Testimonials from '../Testimonials/Testimonials';
import Appointment from './AppointmentSection/AppointmentSection';
import DentalCare from './DentalCare/DentalCare';
import Hero from './Hero/Hero';
import Info from './Info/Info';

const Home = () => {
    return (
        <div>
        <Hero></Hero>
        <Info></Info>
        <Services></Services>
        <DentalCare></DentalCare>
        <Appointment></Appointment>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
        
        </div>
    );
};
export default Home;