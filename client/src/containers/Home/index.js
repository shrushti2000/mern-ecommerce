import React from 'react'
import { Jumbotron,Row,Col,Container } from 'react-bootstrap'
import Layout from '../../components/Layout';
import {NavLink} from 'react-router-dom';
import './style.css'
function Home() {
    return (
        <Layout sidebar>
           
          
            {/* <Jumbotron  style={{margin:'5rem' , background:'white'}} className="text-center">
                <h1>Welcome to Admin Dashboard</h1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </Jumbotron> */}
        </Layout>
    )
}

export default Home
