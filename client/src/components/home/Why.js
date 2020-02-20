import React from 'react';
import './Why.css';
import Fade from 'react-reveal/Fade';
import Why1 from './img/Why1.jpg';
import Why2 from './img/anh2.jpg';
import Flash from 'react-reveal/Flash';
import {FaQuestionCircle} from 'react-icons/fa';
import {Row,Col,Container,Card, CardImg, CardTitle,CardText} from 'reactstrap';
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
                    <Card  style = {{border:'none',cursor:'pointer'}} className =' hvr-curl-top-left'>
                        <CardImg top width = '100%' src={Why1} alt="Card image cap" />
                        <CardTitle>KHI KHÔNG SỬ DỤNG USB NHẠC</CardTitle>
                        <CardText>- Lái xe đường dài mệt mỏi, buồn ngủ gây nguy hiểm.<br />
                        - Hệ thống đầu đĩa CD, DVD cũ cồng kềnh, khó
                        sử dụng.<br />
                        - Chất lượng nhạc CD, trực tuyến không đảm bảo làm
                        giảm trải nghiệm nghe nhạc trên xe.<br />
                        - Hệ thống CD, DVD cũ khó cập nhật, thay thế bài hát,
                        chương trình giải trí mới.
                    </CardText>
                    </Card>
                    </Fade >
                </Col>
             
               
                <Col xs = '12' sm = '6' md = '6' lg = '6' xl = '6'>
                     <Fade left >
                    <Card style = {{border:'none',cursor:'pointer'}} className =' hvr-curl-top-left'>
                        <CardImg top width = '100%' src={Why2} alt="Card image cap" />
                        <CardTitle>KHI SỬ DỤNG USB NHẠC Zcarmedia</CardTitle>
                        <CardText>
                        - Tinh thần sảng khoái, tỉnh táo khi lái xe đảm bảo an toàn.<br />
                        - USB nhạc đơn giản, nhỏ gọn, dễ sử dụng.<br />
                        - Chất lượng nhạc USB đạt chuẩn STUDIO, nhạc MP3 từ 
                        320kbps trở lên, Video từ Full HD trở lên.<br />
                        - USB nhạc dễ dàng update nhạc, chương trình giải trí mới
                        tùy lựa chọn của chủ xế.
                        </CardText>
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