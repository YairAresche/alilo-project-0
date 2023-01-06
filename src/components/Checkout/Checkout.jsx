import { NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"


const Checkout = ({ generarOrden, dataForm, handleOnChange, orderId, emailConfirm }) => {

    return (
        <>

            <form onSubmit={generarOrden}>
                <div className='form-group w-50'>
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                        type="text"
                        className='form-control'
                        name='name'
                        value={dataForm.name}
                        placeholder='Nombre'
                        onChange={handleOnChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className='form-control'
                        name='email'
                        value={dataForm.email}
                        placeholder='Email'
                        onChange={handleOnChange}
                    />
                    <label htmlFor="email">Repetir Email</label>
                    <input
                        type="text"
                        className='form-control'
                        name='emailConfirm'
                        value={dataForm.emailConfirm}
                        placeholder='Repetir Email'
                        onChange={handleOnChange}
                    />
                    {
                        emailConfirm ? <p className='text-danger'>El email debe coincidir</p> : ''
                    }




                    <label htmlFor="phone">Telefono</label>
                    <input
                        type="number"
                        className='form-control'
                        name='phone'
                        value={dataForm.phone}
                        placeholder='Tel.'
                        onChange={handleOnChange}
                    />
                </div>
                <button className='d-block btn btn-outline-primary mt-3'> Generar Orden </button>
            </form>
            {
                
            }
        </>
    )
}

export default Checkout