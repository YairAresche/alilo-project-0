import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import './FAQ.css'

function BasicExample() {
    return (
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Cómo compro ?</Accordion.Header>
                    <Accordion.Body>
                        Selecciona el producto que más te gusto , agrégalo al carrito, y seguí eligiendo objetos . Cuando finalices , anda a “ver carrito” ahí va a figurar el detalle de todas las piezas elegidas. Pone finalizar compra , elegí el medio de pago y listo ! Te va a llegar un mail confirmando la transacción. La demora de las piezas puede ser de hasta 15 días hábiles.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hacen envíos ?</Accordion.Header>
                    <Accordion.Body>
                        Hacemos envios en todo CABA y GBA ! Y si tu compra es de $3500 o más, el envio va por nuestra cuenta.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Qué pasa si llega en mal estado mi pedido ?</Accordion.Header>
                    <Accordion.Body>
                        Todos los envios son nuestra responsabilidad, en caso de sufrir un accidente algun objeto al llegar a tu domicilio, te lo hacemos nuevamente sin costo alguno. Solo te pedimos una foto de la pieza dañada apenas te llega a casa.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Se pueden retirar los productos ?</Accordion.Header>
                    <Accordion.Body>
                        Claro ! Podes retirar las piezas por la zona de Caballito en Capital Federal o por Villa Adelina en GBA Norte.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Son aptos para microondas, horno y lavavajillas ?</Accordion.Header>
                    <Accordion.Body>
                        Todas las piezas son aptas para microondas, para el horno ( no hornalla directa) y para lavavajillas. Los materiales utilizados son todos aptos para ser vajilla, no tienen ningun metal ni contenido peligroso de ser absorvido o colocado en el microondas. En caso de que sea un objeto decorativo, si puede tener otro tipo de materiales.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Qué cuidados se recomiendan ?</Accordion.Header>
                    <Accordion.Body>
                        Solo recomendamos que en caso de que el objeto sea sacado del horno, no se coloque en un marmol frío por ejemplo, que evites los cambios bruscos de temperatura, ya que puede partirse la pieza. En esos casos recomendamos apoyar la fuente o budinera sobre una tabla de madera o repasador.
                        Las piezas son esmaltadas para ser lavables sin problema, con el uso en algunos casos pueden mancharse levemente en su interior, o debajo, en el caso del junquillo ya que no lleva esmalte esa zona. Solo hay que dejarlas un ratito con agua y lavandina y ya quedan perfectas nuevamente.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default BasicExample;