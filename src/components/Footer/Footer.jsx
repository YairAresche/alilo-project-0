import { Container, NavLink } from 'react-bootstrap'
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go"
import { BsInstagram, BsFacebook, BsCashStack } from "react-icons/bs";
import { GrAmex } from "react-icons/gr"
import { FaCcVisa } from "react-icons/fa"
import { Link } from 'react-router-dom';
import './footer.css'


const Footer = () => {
    return (
        <footer className=''>
            <Container className="footer">
                <div>
                    <h6>NUESTRAS REDES</h6>
                    {/* <NavLink as={Link} > <span> <BsInstagram /> <p>/aliloceramica</p> </span> </NavLink> */}
                    <a href='https://www.instagram.com/aliloceramica/' target="_blank"> <span> <BsInstagram /> <p>/aliloceramica</p> </span> </a>
                    <a href='https://m.facebook.com/aliloceramica' target="_blank"> <span> <BsFacebook /> <p>/aliloceramica</p> </span> </a>
                    {/* <span><BsFacebook /> <p>/aliloceramica</p> </span> */}
                    {/* https://m.facebook.com/aliloceramica */}
                </div>
                <div>
                    <h6>CONCTACTENOS</h6>
                    <span><AiOutlineWhatsApp /><p> +541167745914</p></span>
                    <span><AiOutlineMail /> <p>ventas@alilo.com.ar</p> </span>
                    <span><GoLocation /> <p>Paraná 3246</p> </span>
                </div>
                <div>
                    <h6>MEDIOS DE PAGO</h6>
                    <div className='d-flex justify-content-between'>
                        <span><GrAmex size={30} /> </span>
                        <span><FaCcVisa size={22} /> </span>
                        <span><BsCashStack size={24} /> </span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer