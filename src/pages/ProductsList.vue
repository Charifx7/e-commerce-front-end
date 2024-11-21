<template>
  <div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
      <!-- Product card loop -->
      <div v-for="(product) in products" :key="product.id"
        class="animate-fadeIn border rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
        <img :src="product.imageName" class="w-full h-64 object-cover rounded-t-lg" alt="product img" />
        <div class="p-4 flex flex-col h-[140px]">
          <div class="flex-grow">
            <h3 class="text-xl font-semibold">{{ product.name }}</h3>
            <p class="text-gray-600">฿{{ product.price }}</p>
          </div>
          <div class="flex gap-2 mt-4">
            <RouterLink :to="'/products/' + product.id" class="flex-1">
              <button class="w-full h-10 bg-blue-500 text-white rounded-lg 
                           hover:bg-blue-700 transition-colors text-sm
                           flex items-center justify-center">
                Detail
              </button>
            </RouterLink>
            <!-- Add to cart button -->
            <button @click="addToCart(product)" class="flex-1 h-10 bg-cyan-500 text-white rounded-lg 
                           hover:bg-cyan-700 transition-colors text-sm
                           flex items-center justify-center">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { cartItems } from '../temp-data';
import Swal from 'sweetalert2';

defineProps({
  products: Array
});

const addToCart = (product) => {
  cartItems.push({
    ...product,
    quantity: 1,
    cartItemId: Date.now()
  });

  Swal.fire({
    title: 'Success!',
    text: 'Add product to cart successfully',
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#3B82F6',
    timer: 1500
  });
};
</script>
