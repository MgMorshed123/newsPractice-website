import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './../../Category/Category';


const RightSide = () => {

    const [categories, setCategories]  = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));


    })


    return (
        <div>
          
            
              {
                categories.map(category  =>  <p key= {category.id}>

                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p> )
              }
        </div>
    );
};

export default RightSide;