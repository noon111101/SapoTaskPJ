import React, { useEffect, useState } from 'react'
import Row from '../../component/row/Row'
import Form from '../../component/form/Form'
import BillCategoryService from '../../api/BillCategoryService'
import './billCategory.css'
function BillCategory() {
  const [billCategories, setBillCategories] = useState([])
  const [showFormUpdate, setShowFormUpdate] = useState(false)
  const [showFormCreate, setShowFormCreate] = useState(false)
  const [index, setIndex] = useState()
  const arr = 12;
  const handleClick = () => {
    setShowFormCreate(!showFormCreate)
  }
  useEffect(() => {
    BillCategoryService.getBillCategory()
      .then(res => {
        const data = res.data;
        setBillCategories(data)
      })
  }, [])
  console.log(billCategories.length)
  return (
    <>
      <div className="billCategory ml-230">
        <div className="billCategory-header">
          <h2 className="billCategory-title">
            Loại Phiếu Thu
          </h2>
          <div className="billCategory-btn ">
            <button onClick={handleClick} className='btn'>Thêm Loại phiếu thu</button>
          </div>
        </div>
        <div className="billCategory-content">
          <div className="billCategory-table">
            <div className="column">
              <h5>Tên</h5>
              <h5>Mã</h5>
              <h5>Mô tả</h5>

            </div>
            {billCategories.map(BillCategory => {
              const { name, code, description, id } = BillCategory;
              return <Row key={id} index={id} name={name} code={code} desc={description} show={showFormUpdate} setShow={setShowFormUpdate} setIndex={setIndex} />

            })}
            <div className="row-end">
              <h3>`Hiển thị kết quả từ 1 đến {billCategories.length}  trên tổng {billCategories.length}  `</h3>
            </div>

          </div>
        </div>
        <div className="billCategory-footer">
          <div className="billCategory-footer_wrap">
          <h3 className='sp'>Bạn có thể xem thêm về quản lý loại phiếu thu </h3>
          <a className="link" href="/">tại đây</a>

          </div>
          

        </div>
      </div>

      {showFormUpdate && <Form title="Cập nhật loại phiếu thu" action="Lưu" show={showFormUpdate} setShow={setShowFormUpdate} id={index} />}
      {showFormCreate && <Form title="Thêm loại phiếu thu" action="Thêm" show={showFormCreate} setShow={setShowFormCreate} />}

    </>

  )
}

export default BillCategory