<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="nav-item" v-if="!authStatus">
            <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li class="nav-item" v-if="authStatus">
            <router-link class="nav-link" :to="{ name: 'Dashboard' }">Dashboard</router-link>
          </li>
          <li class="nav-item dropdown" v-if="authStatus">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >{{ user.name }}</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown01">
              <li><a class="dropdown-item" href="#" @click.prevent="logout">Logout</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import authStore from '@/store/auth'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NavbarComponent',
  setup() {
    const router = useRouter()
    const authStatus = computed(() => authStore.state.authStatus)
    const user = computed(() => authStore.state.user)

    let logout = async () => {
      await authStore.dispatch('logout')
      router.replace({
        name: 'Home'
      })
    }

    return { authStatus, user, logout }
  }
}
</script>

<style></style>
