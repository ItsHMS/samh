<template>
  <section>
    <h3 class="text-2xl font-semibold mb-4">{{ $t("destinations.title") }}</h3>
    <p class="text-gray-600 mb-6">{{ $t("destinations.subtitle") }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DestinationCard
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
      />
    </div>
  </section>
</template>

<script setup>
import DestinationCard from "@/components/home/DestinationCard.vue";

const destinations = [
  {
    id: 1,
    name: "Flores Road Trip 3D2N",
    days: 3,
    price: 375,
    image: "https://picsum.photos/400/300",
  },
  {
    id: 2,
    name: "Bali Adventure 5D4N",
    days: 5,
    price: 620,
    image: "https://picsum.photos/400/301",
  },
  {
    id: 3,
    name: "Jakarta City Escape 2D1N",
    days: 2,
    price: 200,
    image: "https://picsum.photos/400/302",
  },
];
</script>
