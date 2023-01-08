import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'

const Checkout = () => {
    const { cart, priceTotal, clear } = useContext(CartContext)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const createOrder = () => {
        const date = new Date()
        const order = {
            buyer: { name:name, phone:phone, email:email },
            items: cart.map(item => ({ id: item.id, title: item.name, quantity: item.quantity , price: item.price , price_Total: item.quantity * item.price})),
            total: priceTotal(),
            order_date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }

        const db = getFirestore()
        const orderscollection = collection(db, "orders")
        addDoc(orderscollection, order).then((snapShot) => {
            setOrderId(snapShot.id)
            //Seleccionando la orden a modificar
            const generatedOrder = doc(db, "orders", snapShot.id)
            //La orden generada la actualiza con un 21% de iva
            updateDoc(generatedOrder, { total: order.total * 1.21})
            clear()
        })
    }

    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-6 '>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono:</label>
                            <input type="number" className="form-control" id="phone" placeholder="Ingrese su Teléfono" onInput={(e) => { setPhone(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="Email" placeholder="Ingrese su Email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-outline-success" onClick={createOrder}>Generar Orden</button>
                    </form>
                </div>
                <div className='col-md-6 '>
                    <table className="table ">
                        <tbody >
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.name} width={80} /></td>
                                        <td className="align-middle">{item.name}</td>
                                        <td className="align-middle">{item.quantity}</td>
                                        <td className="align-middle">${item.quantity * item.price}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="align-middle" >Total a pagar</td>
                                <td className="align-middle">${priceTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <div className="alert alert-success" role="alert">
                        El numero de seguimiento es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout
