import "./product.css";
import {productData} from "../../dummyData";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
         
          <div className="productTopRight">
            <div className="productInfoTop">
              <img className="productInfoImg" src="https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&w=600"/>
              <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5467</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
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
            </div>
            <div className="productFormRight">
              <div className="productUpload">
              <img src="https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&w=600" className="productUploadImage"></img>
                <label for="file">
                  <Publish className="productUploadButton"/>
                </label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <button className="updateButton">Update</button>
            </div>
          </form>
        </div>
    </div>
  )
}
