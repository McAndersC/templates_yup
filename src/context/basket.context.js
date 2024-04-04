'use client';

import {createContext, useContext, useEffect, useState} from 'react';

const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {

    const [basket, setBasket] = useState([]);

    useEffect( () => {

        const basket = localStorage.getItem('basket')
        if(basket) {

            setBasket(JSON.parse(basket))

        }
    
    }, [])

    const isInBasket = (id) => {
            
        try {
            
            let basket = localStorage.getItem('basket');
            
            if(basket) {
    
                basket = JSON.parse(basket);
    
                let index = basket.findIndex( (item) => item.id === id);
                if(index !== -1) {
                    return true;
                }
    
            }
    
            return false;
        } catch (error) {
            return false;
        }
       
    }

    const addToBasket = (id, amount = 1) => {

        let basket = localStorage.getItem('basket');
      
        if(basket) {

            basket = JSON.parse(basket);
            let index = basket.findIndex( (item) => item.id === id);

            if(index !== -1) {

                if(amount == 0) {

                    basket = basket.filter( (item) => item.id !== id);
                    localStorage.setItem('basket', JSON.stringify(basket))
                    setBasket(basket);
                    
                } else {

                    basket[index].amount = amount;

                }
                

            } else {
                basket.push(
                    {
                        id: id,
                        amount: amount
                    }
                )
            }

        } else {
            basket = [];
            basket.push(
                {
                    id: id,
                    amount: amount
                }
            )
        }
        
        localStorage.setItem('basket', JSON.stringify(basket))
        setBasket(basket);
    };

    const getProductsForBasket = async () => {

        let basket = localStorage.getItem('basket');
        basket = JSON.parse(basket);

        if(basket && basket.length > 0) {
      
            let producIds = basket.map( (item) => item.id);
            let result = await fetch('/api/products?range=' + producIds.toString());
            let data = await result.json();

            data = data.map( (product) => {
                let basketItem = basket.find( (item) => item.id === product._id);
                product.amount = basketItem.amount;
                return product;
            })

            return data;
        }

        return [];
    
    }

    const cleanBasket = () => {
        localStorage.removeItem('basket');
        setBasket([]);
    }

    return (
        <BasketContext.Provider value={{ basket, addToBasket, isInBasket, getProductsForBasket, cleanBasket }}>
            {children}
        </BasketContext.Provider>
    )
};

export const useBasket = () => useContext(BasketContext);