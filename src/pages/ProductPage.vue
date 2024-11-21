<template>
    <div class="product-page max-w-3xl mx-auto py-8 px-4">
        <h1 class="text-3xl font-bold mb-8 text-gray-800 text-center">Products</h1>
        <div class="bg-white p-6 rounded-lg shadow-lg flex justify-center">
            <div class="space-y-6 ">
                <ProductsList :products="products"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { products } from '../temp-data';
import ProductsList from './ProductsList.vue';
</script>