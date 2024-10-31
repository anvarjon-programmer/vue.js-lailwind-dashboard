<template lang="">
    <div class="min-h-screen bg-gray-100 p-6 overflow-y-scroll">
      <h1 class="text-3xl font-bold text-center mb-6">Product Store</h1>
  
      <div v-if="isLoading" class="text-center text-lg">Loading...</div>
  
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-scroll">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="bg-white rounded-lg shadow-md h-[200px] overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img :src="product.image" :alt="product.title" class="h-[200px] w-full object-cover" />
  
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
  
        <!-- Pagination -->
        <div class="mt-6 flex justify-center">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded-l hover:bg-gray-400 transition duration-300 cursor-pinter"
          >
            prev
          </button>
          <span class="px-4 py-2 text-lg">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded-r hover:bg-gray-400 transition duration-300 cursor-pinter"
          >
            next
          </button>
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
        currentPage: 1,
        itemsPerPage: 8, 
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.products.length / this.itemsPerPage);
      },
      paginatedProducts() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.products.slice(start, end);
      },
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
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
    },
  };
  </script>
  
  <style lang="">
  /* No custom styles needed, Tailwind CSS handles styling */
  </style>
  