import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Biriyani',
    price: 180,
    image: require('./images/biriyani.jpeg'), // Replace with actual image path
  },
  {
    id: 2,
    name: 'Shawarma',
    price: 90,
    image: require('./images/shawarma.jpeg'), // Replace with actual image path
  },
  {
    id: 3,
    name: 'Mandi',
    price: 600,
    image: require('./images/mandi.jpg'), // Replace with actual image path
  },
  {
    id: 4,
    name: 'Dragon Chicken',
    price: 220,
    image: require('./images/dragon.jpeg'), // Replace with actual image path
  },
  {
    id: 5,
    name: 'Porotta and Beaf',
    price: 250,
    image: require('./images/beaf.jpeg'), // Replace with actual image path
  },
  {
    id: 6,
    name: 'Chicken Noodles',
    price: 230,
    image: require('./images/noodles.jpeg'), // Replace with actual image path
  },
  
  // Add more products...
];

const ProductScreen = () => {
  const addToCart = (productId) => {
    // Implement your logic for adding the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  const renderItem = ({ item }) => {
    return (

      <View style={styles.productContainer}>
        
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>Rs:{item.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToCart(item.id)}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>NON-VEG ITEMS</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
        numColumns={2} // Display products in 2 columns
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems:'center',
  },
  productList: {
    padding: 16,
  },
  productContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    margin: 8,
    padding: 12,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#3385FF',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  addToCartButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  head:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  }
});

export default ProductScreen;
