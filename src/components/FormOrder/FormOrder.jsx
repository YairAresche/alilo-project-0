import { BsStars } from "react-icons/bs";

const FormOrder = ({ generateOrder, dataForm, handleOnChange, emailConfirm }) => {
    return (
        <>
            <h3>Datos de contacto</h3>
            <form onSubmit={generateOrder}>
                <div className='form-group w-50'>
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                        type="text"
                        className='form-control'
                        name='name'
                        value={dataForm.name}
                        placeholder='Ej. Salvador Dalí'
                        onChange={handleOnChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className='form-control'
                        name='email'
                        value={dataForm.email}
                        placeholder='Ej. soydali@gmail.com'
                        onChange={handleOnChange}
                        required
                    />
                    <label htmlFor="email">Repetir Email</label>
                    <input
                        type="text"
                        className='form-control'
                        name='emailConfirm'
                        value={dataForm.emailConfirm}
                        placeholder='Ej. soydali@gmail.com'
                        onChange={handleOnChange}
                        required
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
                        placeholder='Ej. 1167724850.'
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button className='d-flex align-items-center btn btn-outline-primary mt-3'> Finalizar Compra <BsStars className="ms-2 " />  </button>
            </form>
        </>
    )
}

export default FormOrder