<template>
    <div>
        <!-- Hero Section -->
        <section class="bg-cover bg-center h-[600px] md:h-[500px] sm:h-[400px] bg-gray-800 animate-hero-zoom" style="background-image: url(https://png.pngtree.com/background/20230612/original/pngtree-shopping-cart-floating-around-a-digital-background-with-modern-elements-picture-image_3362317.jpg)">
            <div class="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                <h1 class="text-5xl md:text-4xl sm:text-3xl text-white font-bold text-center mb-4 animate-fade-in">Welcome to MyShop</h1>
                <p class="text-white mb-6 animate-fade-in">ทดสอบระบบร้านค้า</p>
                <RouterLink to="/products">
                    <button class="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 hover:text-yellow-200 transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in">Shop Now</button>
                </RouterLink>
            </div>
        </section>
        <!-- Popular Products Grid Section -->
        <section class="py-12">
            <h2 class="text-4xl font-semibold text-center mb-8">Popular Gaming Gears</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="text-center p-6 bg-gray-100 rounded-lg">
                    <h3 class="text-xl font-semibold">Mouse</h3>
                </div>
                <div class="text-center p-6 bg-gray-100 rounded-lg">
                    <h3 class="text-xl font-semibold">Keyboard</h3>
                </div>
                <div class="text-center p-6 bg-gray-100 rounded-lg">
                    <h3 class="text-xl font-semibold">Monitor</h3>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}
</style>