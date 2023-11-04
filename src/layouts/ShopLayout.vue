<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import SideBar from 'primevue/sidebar'
import CategoryListComponent from '../components/CategoryList/CategoryListComponent.vue'
import SearchBarProductComponent from '../components/SearchBarProduct/SearchBarProductComponent.vue'

const sidebarVisible = ref(false)
</script>

<template>
  <div class="w-full h-auto">
    <div class="fixed w-full pt-0 bg-white" style="top: 0px; z-index: 1">
      <Toolbar>
        <template #start>
          <span class="text-2xl">
            <i class="pi pi-gift text-blue-500" style="font-size: 1.3rem" />
            Lia's Shop
          </span>
        </template>

        <template #center>
          <SearchBarProductComponent />
        </template>

        <template #end>
          <Button icon="pi pi-shopping-cart" @click="sidebarVisible = !sidebarVisible" />
        </template>
      </Toolbar>

      <SideBar v-model:visible="sidebarVisible" position="right">
        <h2>
          <i class="pi pi-shopping-cart font-bold text-blue-500" style="font-size: 1.3rem" />
          Shopping Cart
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </SideBar>
      <div class="w-full md:w-8 m-auto">
        <CategoryListComponent />
      </div>
    </div>

    <div class="w-full h-auto" style="margin-top: 200px">
      <router-view v-slot="{ Component, route }">
        <!-- @see https://vuejs.org/guide/built-ins/transition.html#named-transitions -->
        <Transition v-if="route.meta.transition" :name="route.meta.transition">
          <component :is="Component" />
        </Transition>
        <component v-else :is="Component" />
      </router-view>
    </div>
  </div>
</template>
