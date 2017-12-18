<template>
  <main class="tickets-layout">
    <h1>Your Support Tickets</h1>

    <div class="actions">
      <router-link
        v-if="$route.name !== 'tickets'"
        tag="button"
        class="secondary"
        :to="{name: 'tickets'}"
      >
        See All Tickets
      </router-link>
      <router-link
      v-if="$route.name !== 'new-ticket'"
      tag="button"
      :to="{ name: 'new-ticket' }"
      >
        New Ticket
      </router-link>
    </div>

    <router-view></router-view>
  </main>
</template>

<script>


</script>

