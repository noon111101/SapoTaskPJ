import React, { useState, useEffect } from 'react'
import './Form.css'
import AccountantService from '../../api/AccountantService'
function FormAccountant({ title, action, show, setShow, id }) {
    const [accountant, setAccountant] = useState({
        username:'',
        name: '',
        phoneNumber: '',
        address: '',
        
    })
    const accountantForUpdate = {id:id,...accountant}
    const handleChange = (e) => {
        setAccountant({ ...accountant, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
      
        if(action === 'Thêm') {
            AccountantService.createAccountant(accountant) 

        } else {
            AccountantService.updateAccountant(id, accountantForUpdate)

        }          
      
        setShow(!show)
        window.location.reload(false);
    }
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <>
            <div className="modal">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-title">
                        <h3>{title}</h3>
                        <span onClick={handleClick}>X</span>
                    </div>
                    <div className="form-content">
                        <label htmlFor="">Tên đăng nhập</label><br></br>
                        <input onChange={handleChange} name="username" value={accountant.name} type="text" />

                        <label htmlFor="">Tên*</label><br></br>
                        <input onChange={handleChange} name="name" value={accountant.name} type="text" />

                        <label htmlFor="">Số điện thoại</label><br></br>
                        <input onChange={handleChange} name="phoneNumber" value={accountant.phoneNumber} type="text" />

                        <label htmlFor="">Địa chỉ</label><br></br>
                        <input onChange={handleChange} name="address" value={accountant.address} type="text" />
                    </div>
                    <div className="form-btn">
                        <button className='btn btn-no-active' onClick={handleClick}>Thoát</button>
                        <button className='btn'>{action}</button>
                    </div>
                </form>

            </div>

            <div className="overlay"></div>


        </>
    )
}

export default FormAccountant