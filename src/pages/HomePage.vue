<template lang="">
    <div class="min-h-screen bg-gray-100 p-6">
      <h1 class="text-3xl font-bold text-center mb-6">Product Store</h1>
  
      <div v-if="isLoading" class="text-center text-lg">Loading...</div>
  
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img :src="product.image" :alt="product.title" class="h-48 w-full object-cover" />
  
          <div class="p-4">
            <h2 class="text-lg font-semibold mb-2 truncate">{{ product.title }}</h2>
            <p class="text-gray-600 mb-4">{{ product.description.slice(0, 100) }}...</p>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-green-600">${{ product.price }}</span>
              <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        isLoading: true,
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          this.products = data;
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  
  <style lang="">
  /* No custom styles needed, Tailwind CSS handles styling */
  </style>
  