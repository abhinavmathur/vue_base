<template>
  <div>
    <v-card class="mt-4">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Preview</h3>
          <div v-html="" style="overflow: auto; white-space: nowrap; max-width:300px !important;"></div>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>

  import { eventBus } from "../main";

  export default {

  }
</script>
