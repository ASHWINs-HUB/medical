import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import '../styles/Products.css'; // Import your CSS

function Products() {
  const { addToCart } = useCart(); // Get addToCart function from context

  const products = [
    { id: 1, name: 'Aspirins', description: 'Pain reliever and fever reducer', image: '/images/aspirin.jpg',price: 20.00 },
    { id: 2, name: 'Ibuprofen', description: 'Anti-inflammatory drug', image: '/images/ibuprofen.jpg',price:20.00 },
    { id: 3, name: 'Acetaminophen', description: 'Pain reliever and fever reducer', image: '/images/acetaminophen.jpg',price:15.00 },
    { id: 4, name: 'Amoxicillin', description: 'Antibiotic used to treat bacterial infections', image: '/images/amoxicillin.jpg',price:25.00 },
    { id: 5, name: 'Loratadine', description: 'Antihistamine for allergy relief', image: '/images/loratadine.jpg',price:25.00 },
    { id: 6, name: 'Hydrochlorothiazide', description: 'Diuretic used to treat high blood pressure', image: '/images/hydrochlorothiazide.jpg',price:35.00 },
    { id: 7, name: 'Metformin', description: 'Medication used to manage type 2 diabetes', image: '/images/metformin.jpg',price:30.00 },
    { id: 8, name: 'Omeprazole', description: 'Proton pump inhibitor for acid reflux', image: '/images/omeprazole.jpg',price: 20.00  },
    { id: 9, name: 'Cetirizine', description: 'Antihistamine for allergy symptoms', image: '/images/cetirizine.jpg',price:35.00  },
    { id: 10, name: 'Diphenhydramine', description: 'Antihistamine used for allergies and motion sickness', image: '/images/diphenhydramine.jpg',price:25.00 },
    { id: 11, name: 'Prednisone', description: 'Corticosteroid used to reduce inflammation', image: '/images/prednisone.jpg',price:35.00  },
    { id: 12, name: 'Losartan', description: 'Medication used to treat high blood pressure', image: '/images/losartan.jpg',price: 20.00  },
    { id: 13, name: 'Atorvastatin', description: 'Statin used to lower cholesterol', image: '/images/atorvastatin.jpg',price:15.00 },
    { id: 14, name: 'Simvastatin', description: 'Medication used to lower cholesterol', image: '/images/simvastatin.jpg',price:15.00 },
    { id: 15, name: 'Zolpidem', description: 'Medication used to treat insomnia', image: '/images/zolpidem.jpg',price:35.00  },
  ];

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-content">
              <h5 className="product-name">{product.name}</h5>
              <h3 className="product-price">{product.price} Rs</h3>
              <p className="product-description">{product.description}</p>
              <button className="product-button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              <Link to={`/products/${product.id}`} className="product-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
