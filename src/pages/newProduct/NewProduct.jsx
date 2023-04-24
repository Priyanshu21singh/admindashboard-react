import "./newProduct.css"

export default function NewProduct() {
  return (
    <div className="newProduct">
    <h1>New Product</h1>
    <div className="productFormLeft">
    <label>Image</label>
    <input className="imgInput" type="file" id="file"/>
              <label>Product Name</label>
              <input type="text" placeholder="Apple Airpods"></input>
              <label>In Stock</label>
              <select name="instock" id="instock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="instock" id="instock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <button className="createButton">Create</button>
            </div>
          
    </div>
  )
}
