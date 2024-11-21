<template>

  <div class="shopping-cart-page max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
    <!-- list product -->
    <div v-if="items.length > 0" class="bg-white p-6 rounded-lg shadow-lg">
      <div class="space-y-6">
        <div v-for="product in items" :key="product.id"
          class="product-container flex justify-between items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50">
          <div class="flex items-center space-x-4">
            <img :src="product.imageName" alt="product image" class="w-16 h-16 object-cover rounded">
            <div class="details-wrap">
              <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
              <p class="text-gray-600">฿{{ product.price }}</p>
            </div>
          </div>
          <button @click="removeFromCart(product.id)"
            class="remove-button px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors">
            ลบ
          </button>
        </div>
      </div>

      <!-- total price -->
      <div class="mt-8 border-t pt-4">
        <div class="flex justify-between items-center text-xl font-semibold">
          <span>Total price:</span>
          <span>฿{{ totalPrice }}</span>
        </div>
      </div>

      <div class="mt-8 text-right">
        <button @click="checkout"
          class="checkout-button bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>

    <!-- no product -->
    <div v-else class="text-center py-16 bg-white rounded-lg shadow-lg">
      <p class="text-xl text-gray-500">
        No product in cart
      </p>
      <RouterLink to="/products" class="mt-4 inline-block">
        <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4">
          Buy product
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { cartItems } from '../temp-data';


const items = ref([...cartItems]);

onMounted(() => {
  items.value = [...cartItems];
});


const totalPrice = computed(() => {
  return items.value.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);
});


const removeFromCart = (productId) => {
  const index = cartItems.findIndex(item => item.id === productId);
  if (index !== -1) {
    cartItems.splice(index, 1);
    items.value = [...cartItems];
  }
};


const checkout = () => {
  alert('checkout');
};
</script>
