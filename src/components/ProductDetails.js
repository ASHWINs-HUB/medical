import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button } from '@material-ui/core';
import '../styles/ProductDetails.css'
import { useCart } from '../context/CartContext'; // Import useCart

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const { addToCart } = useCart(); // Get addToCart function from context
  
 
  const products = [
    {
      id: 1,
      name: 'Aspirin',
      description: 'Pain reliever and fever reducer',
      image: '/images/aspirin.jpg',
      dosage: '500 mg every 4-6 hours as needed',
      sideEffects: 'Nausea, stomach upset, allergic reactions',
      warnings: 'Do not use if you have a history of stomach ulcers',
      usage: 'Take with food to reduce stomach irritation'
    },
    {
      id: 2,
      name: 'Ibuprofen',
      description: 'Anti-inflammatory drug',
      image: '/images/ibuprofen.jpg',
      dosage: '200-400 mg every 4-6 hours as needed',
      sideEffects: 'Dizziness, gastrointestinal bleeding',
      warnings: 'Consult your doctor if you have kidney disease',
      usage: 'Take with milk to reduce stomach upset'
    },
    {
      id: 3,
      name: 'Acetaminophen',
      description: 'Pain reliever and fever reducer',
      image: '/images/acetaminophen.jpg',
      dosage: '500 mg every 4-6 hours as needed',
      sideEffects: 'Liver damage (with overdose), allergic reactions',
      warnings: 'Do not exceed the recommended dose to avoid liver damage',
      usage: 'Take with or without food'
    },
    {
      id: 4,
      name: 'Amoxicillin',
      description: 'Antibiotic used to treat bacterial infections',
      image: '/images/amoxicillin.jpg',
      dosage: '500 mg every 8 hours for 7-10 days',
      sideEffects: 'Nausea, diarrhea, rash',
      warnings: 'Do not use if allergic to penicillin',
      usage: 'Take with food to avoid stomach upset'
    },
    {
      id: 5,
      name: 'Loratadine',
      description: 'Antihistamine for allergy relief',
      image: '/images/loratadine.jpg',
      dosage: '10 mg once daily',
      sideEffects: 'Headache, dry mouth, drowsiness',
      warnings: 'Avoid alcohol as it may enhance drowsiness',
      usage: 'Take once daily, with or without food'
    },
    {
      id: 6,
      name: 'Hydrochlorothiazide',
      description: 'Diuretic used to treat high blood pressure',
      image: '/images/hydrochlorothiazide.jpg',
      dosage: '25-50 mg once daily',
      sideEffects: 'Dizziness, dehydration, low potassium levels',
      warnings: 'Monitor electrolyte levels regularly',
      usage: 'Take in the morning to avoid nocturia'
    },
    {
      id: 7,
      name: 'Metformin',
      description: 'Medication used to manage type 2 diabetes',
      image: '/images/metformin.jpg',
      dosage: '500-1000 mg twice daily with meals',
      sideEffects: 'Nausea, diarrhea, vitamin B12 deficiency',
      warnings: 'Monitor blood sugar levels regularly',
      usage: 'Take with food to reduce gastrointestinal side effects'
    },
    {
      id: 8,
      name: 'Omeprazole',
      description: 'Proton pump inhibitor for acid reflux',
      image: '/images/omeprazole.jpg',
      dosage: '20 mg once daily before a meal',
      sideEffects: 'Headache, nausea, abdominal pain',
      warnings: 'Prolonged use may increase the risk of bone fractures',
      usage: 'Take at least 30 minutes before a meal'
    },
    {
      id: 9,
      name: 'Cetirizine',
      description: 'Antihistamine for allergy symptoms',
      image: '/images/cetirizine.jpg',
      dosage: '10 mg once daily',
      sideEffects: 'Drowsiness, dry mouth, headache',
      warnings: 'Avoid alcohol and other CNS depressants',
      usage: 'Take once daily, with or without food'
    },
    {
      id: 10,
      name: 'Diphenhydramine',
      description: 'Antihistamine used for allergies and motion sickness',
      image: '/images/diphenhydramine.jpg',
      dosage: '25-50 mg every 4-6 hours as needed',
      sideEffects: 'Drowsiness, dizziness, dry mouth',
      warnings: 'Avoid driving or operating machinery',
      usage: 'Take before bedtime or when needed for motion sickness'
    },
    {
      id: 11,
      name: 'Prednisone',
      description: 'Corticosteroid used to reduce inflammation',
      image: '/images/prednisone.jpg',
      dosage: '5-60 mg daily, depending on the condition',
      sideEffects: 'Increased appetite, weight gain, mood changes',
      warnings: 'Do not stop abruptly without medical supervision',
      usage: 'Take with food to minimize stomach irritation'
    },
    {
      id: 12,
      name: 'Losartan',
      description: 'Medication used to treat high blood pressure',
      image: '/images/losartan.jpg',
      dosage: '50-100 mg once daily',
      sideEffects: 'Dizziness, headache, high potassium levels',
      warnings: 'Monitor blood pressure regularly',
      usage: 'Take at the same time each day, with or without food'
    },
    {
      id: 13,
      name: 'Atorvastatin',
      description: 'Statin used to lower cholesterol',
      image: '/images/atorvastatin.jpg',
      dosage: '10-80 mg once daily',
      sideEffects: 'Muscle pain, liver enzyme abnormalities',
      warnings: 'Monitor liver function tests regularly',
      usage: 'Take in the evening, with or without food'
    },
    {
      id: 14,
      name: 'Simvastatin',
      description: 'Medication used to lower cholesterol',
      image: '/images/simvastatin.jpg',
      dosage: '10-40 mg once daily in the evening',
      sideEffects: 'Muscle pain, liver enzyme abnormalities',
      warnings: 'Avoid grapefruit juice, which can interact with the medication',
      usage: 'Take in the evening, with or without food'
    },
    {
      id: 15,
      name: 'Zolpidem',
      description: 'Medication used to treat insomnia',
      image: '/images/zolpidem.jpg',
      dosage: '5-10 mg immediately before bedtime',
      sideEffects: 'Drowsiness, dizziness, headache',
      warnings: 'May cause sleepwalking or unusual behavior',
      usage: 'Take only when you can get a full night’s sleep (7-8 hours)'
    },
  ];
  

  // Find the product based on the ID from the URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container maxWidth="sm" className="product-details-container">
      <Card raised>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ 
            width: '100%', 
            height: '50%', 
            borderTopLeftRadius: '4px', 
            borderTopRightRadius: '4px' 
          }} 
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6" paragraph>
            Dosage:
          </Typography>
          <Typography variant="body1" paragraph>
            {product.dosage}
          </Typography>
          <Typography variant="h6" paragraph>
            Side Effects:
          </Typography>
          <Typography variant="body1" paragraph>
            {product.sideEffects}
          </Typography>
          <Typography variant="h6" paragraph>
            Warnings:
          </Typography>
          <Typography variant="body1" paragraph>
            {product.warnings}
          </Typography>
          <Typography variant="h6" paragraph>
            Usage Instructions:
          </Typography>
          <Typography variant="body1" paragraph>
            {product.usage}
          </Typography>
          <Button 
            color="primary" 
            variant="contained"
            fullWidth
            onClick={() => addToCart(product)}
            style={{ marginTop: '16px' }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductDetails;
