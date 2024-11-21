<template>
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Manage Product</h1>

    <!-- add product form -->
    <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-xl font-semibold mb-4">Add new product</h2>
      <form @submit.prevent="addProduct" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Product name</label>
          <input v-model="newProduct.name" type="text" required
            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Price</label>
          <input v-model="newProduct.price" type="number" required
            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Image URL</label>
          <input v-model="newProduct.imageName" type="text" required
            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2">
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add product
        </button>
      </form>
    </div>

    <!-- list product -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold mb-4">All products</h2>
      <div class="grid grid-cols-1 gap-4">
        <div v-for="product in productList" :key="product.id"
          class="flex items-center justify-between p-4 border rounded-lg">
          <div class="flex items-center space-x-4">
            <img :src="product.imageName" alt="product image" class="w-16 h-16 object-cover rounded">
            <div>
              <h3 class="font-medium">{{ product.name }}</h3>
              <p class="text-gray-600">฿{{ product.price }}</p>
            </div>
          </div>
          <button @click="deleteProduct(product.id)" class="text-red-600 hover:bg-red-50 px-3 py-1 rounded-md">
            ลบ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { products } from '../temp-data';

const productList = ref([...products]);

const newProduct = ref({
  name: '',
  price: '',
  imageName: ''
});

const addProduct = () => {
  const id = (productList.value.length + 1).toString();
  const newProductItem = {
    id,
    ...newProduct.value
  };

  productList.value.push(newProductItem);
  products.push(newProductItem);

  newProduct.value = {
    name: '',
    price: '',
    imageName: ''
  };
};

const deleteProduct = (productId) => {

  productList.value = productList.value.filter(p => p.id !== productId);


  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
  }
};
</script>