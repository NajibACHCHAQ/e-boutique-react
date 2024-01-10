import {useState,React} from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
export const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
    const imageHandler = (e)=>{
        setImage(e.target.files[0])
    }
    const changeHandler = (e)=>{
        setProductDetails({
            ...productDetails, [e.target.name]:e.target.value
        })
    }
    const Add_Product = async () => {
        try {
            console.log(productDetails);
            let responseData;
            let product = productDetails;
    
            let formData = new FormData();
            formData.append('product', image);
    
            const response = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });
    
            if (response.ok) {
                responseData = await response.json();
    
                if (responseData.success) {
                    product.image = responseData.image_url;
                    console.log(product);
                    await fetch('http://localhost:4000/addproduct', {
                        method: 'POST', // Assurez-vous de mettre 'POST' entre guillemets
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(product),
                    }).then((resp) => resp.json()).then((data) => {
                        data.success ? alert("produit ajouté avec succès") : alert("Erreur lors de l'ajout du produit");
                    });
                    
                } else {
                    console.error('Erreur lors de la requête :', responseData.error);
                }
            } else {
                console.error('Erreur lors de la requête :', response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout du produit :', error);
        }
    };
    
  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Nom du produit</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Ancien Prix</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='prix' />
            </div>
            <div className="addproduct-itemfield">
                <p>Nouveau Prix</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='prix' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Catégorie produit</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" id="" className='addproduct-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img'/>
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={() => Add_Product()} className='addproduct-btn'>Ajouter</button>
    </div>
  )
}
