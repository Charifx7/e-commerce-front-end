<template>
    <div v-if="product" class="max-w-4xl mx-auto p-8">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="md:flex">
                <!-- Image Section -->
                <div class="md:w-1/2">
                    <div class="img-wrap p-4">
                        <img :src="product.imageName" alt="Product Image"
                            class="w-full h-[400px] object-cover rounded-lg" />
                    </div>
                </div>
                <!-- Product Details Section -->
                <div class="md:w-1/2 p-8 flex flex-col">
                    <div class="product-details space-y-4 flex-grow">
                        <h1 class="text-3xl font-bold text-gray-800">{{ product.name }}</h1>
                        <h3 class="text-2xl font-semibold text-blue-600">฿{{ product.price }}</h3>
                        <p>{{ product.description }}</p>
                    </div>

                    <button @click="addToCart" class="w-full mt-auto px-6 py-3 bg-blue-600 text-white rounded-lg 
                            hover:bg-blue-700 transition duration-300 ease-in-out 
                            transform hover:scale-105 font-semibold">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>
</template>

<script setup>
import { products, cartItems } from '../temp-data';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NotFoundPage from './NotFoundPage.vue';
import Swal from 'sweetalert2';

const route = useRoute();
const productId = route.params.productId;
const product = computed(() =>
    products.find(item => item.id === productId)
);

const addToCart = () => {
    if (product.value) {
        cartItems.push({ ...product.value });
        Swal.fire({
            title: 'Success!',
            text: 'Add product to cart successfully',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3B82F6'
        });
    }
};
</script>
