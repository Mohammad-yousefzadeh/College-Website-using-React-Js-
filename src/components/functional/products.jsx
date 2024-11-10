import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Product = (props) => {

    const [count , setCount] = useState(0)

    return (
        <div className='conatainer'>
            <div className='row justify-content-center'>
                <div className='col-11 col-lg-4 bg-primary mt-5 rounded'>
                    <h1 className='text-center mt-3'>{props.productName}</h1>
                    <form action="" className='mt-5 mb-5'>
                        <div className='form-group'>
                            <input type="text" className='form-control p-2' placeholder='enter' id='test'/>
                        </div>
                    </form>
                    <button onClick={hello}>hello</button>
                    <h1>{props.Price}</h1>
                </div>
            </div>
        </div>
    );

    function hello(){
        console.log(props)
    }
}
 
export default Product;