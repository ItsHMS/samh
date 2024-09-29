<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img :src="destination.image" :alt="destination.name" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h4 class="font-semibold mb-2">{{ destination.name }}</h4>
        <p class="text-gray-600 mb-2">{{ destination.days }} {{ $t('destinations.days') }}</p>
        <p class="text-orange-500 font-bold">${{ destination.price }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    destination: {
      type: Object,
      required: true
    }
  })
  </script>