import React from 'react';
import './Why.css';
import Fade from 'react-reveal/Fade';
import Why1 from './img/Why1.jpg';
import Why2 from './img/anh2.jpg';
import Why3 from './img/Why3.jpg';
import Why4 from './img/Why4.jpg';
import Flash from 'react-reveal/Flash';
import {FormContext} from '../../context/Form';
import {FaQuestionCircle, FaRProject} from 'react-icons/fa';
import {Row,Col,Container,Card, CardImg, Button} from 'reactstrap';
import {GiStarShuriken} from 'react-icons/gi';
import ButtonDatHang from './ButtonDatHang';
export default function(){

    return(
        <div className = 'why'>
            <div className = 'title' style = {{color:'#2C5364'}}><FaQuestionCircle />TẠI SAO NÊN SỬ DỤNG USB CÓ NHẠC</div>
            <div className = 'text-center'  style = {{color:'#000'}}><GiStarShuriken /><GiStarShuriken /><GiStarShuriken /></div>

            <Container className = 'tuvanngay'>
            
            <Row >
                
                <Col  xs = '12' sm = '6' md = '6' lg = '6' xl = '6'>
                    <Fade right >
                    <Card  style = {{border:'none',cursor:'pointer'}} className ='hvr-wobble-to-bottom-right hvr-curl-top-left'>
                        <CardImg top width = '100%' src={Why1} alt="Card image cap" />
                    </Card>
                    </Fade >
                </Col>
             
               
                <Col xs = '12' sm = '6' md = '6' lg = '6' xl = '6'>
                     <Fade left >
                    <Card style = {{border:'none',cursor:'pointer'}} className ='hvr-wobble-to-bottom-right hvr-curl-top-left'>
                        <CardImg top width = '100%' src={Why2} alt="Card image cap" />
                       
                    </Card>
                    </Fade>
                </Col>
            </Row>
            </Container>
            <Flash>
                <ButtonDatHang />
            </Flash>
        </div>
    )
}