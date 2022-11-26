<script setup>

</script>

<template>
  <nav class="border-t-2 border-gray-600">
    <ul class="flex justify-between px-8 py-6">
      <li><router-link active-class="text-amber-500" to="/"><font-awesome-icon icon="fa-solid fa-film" size="xl"/></router-link></li>
      <li><router-link active-class="text-amber-500" to="series"><font-awesome-icon icon="fa-solid fa-tv" size="xl"/></router-link></li>
      <li><router-link active-class="text-amber-500" to="/search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl"/></router-link></li>
      <li><router-link active-class="text-amber-500" to="/discover"><font-awesome-icon icon="fa-solid fa-lightbulb" size="xl"/></router-link></li>
      <li><router-link active-class="text-amber-500" to="/profile"><font-awesome-icon icon="fa-solid fa-user" size="xl"/></router-link></li>
    </ul>

  </nav>
</template>