import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import axios from "axios";

import styleProductList from "./ProductListStyle";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductList: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    fetchDataAPI();
  }, []);

 const fetchDataAPI = async () => {
  try {
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products/");
    setProductData(response.data);
  } catch (error) {
    console.log(error);
  }
 };

 return (
  <View style={styleProductList.container}>
    <View style={styleProductList.userWelcome}>
      <Text style={styleProductList.welcome}>Welcome</Text>
      <Text style={styleProductList.userName}>Compass</Text>
    </View>
    <View style={styleProductList.scrollViewContainer}>
    <ScrollView >
          {productData.map((product) => (
            <View key={product.id} style={styleProductList.productContainer}>
              <View style={styleProductList.cardProduct}>
                <Text style={styleProductList.titleStyle}>{product.title}</Text>
                <Image source={{uri: product.image}} style={styleProductList.productImage} />
                <Text style={styleProductList.priceStyle}>{product.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
    </View>     
        <View style={styleProductList.tabBar}>
        <Text>icons home and cart</Text>
      </View>
      </View>
    );
  };


export default ProductList;
