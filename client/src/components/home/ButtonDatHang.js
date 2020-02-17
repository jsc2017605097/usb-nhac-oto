import React from 'react';
import {Link} from 'react-scroll';
import {Button} from 'reactstrap';
export default function(){
    return(
        <div className = 'text-center'>
                <Link activeClass="active"
                        to="dathang"
                        spy={true}
                        smooth={true} 
                        offset={0}
                        duration= {1500}>
                 <Button className = 'hvr-pulse-shrink button-tuvan' color="danger">Tư vấn ngay</Button>
                 </Link>
        </div>
    )
}