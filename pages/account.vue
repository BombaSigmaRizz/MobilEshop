<template>
  <div class="account-page">
    <div class="account-info">
      <h1>Account Information</h1><br>
      <h2>Hello {{ auth.user?.name }},</h2><br><br><p> welcome to your account page. You can review all your personal data here.</p><br>
      <h3>Account details:</h3><br><br>
      <p>Name: {{ auth.user?.name }}</p><br>
      <p>Email: {{ auth.user?.email }}</p>
    </div>
    <button @click="auth.logout(); navigateTo('/')" class="logout-btn">Log out</button>
    <div class ="hidden">
      <div ref="logout-img" class="logout-img"></div>
    </div>  
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const auth = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (typeof window !== 'undefined') {
    const hiddenElements = document.querySelectorAll('.hidden');
    setTimeout(() => {
      hiddenElements.forEach((el) => el.classList.add('show'));
    }, 100);
  }
});
</script>

<style scoped lang="scss">
.hidden {
  opacity: 0;
  filter: blur(20px);
  transform: translateY(-35rem);
  transition: all 3s ease-in-out;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

.logout-img {
  background-image: url('../assets/img/page/logout.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 2rem;
  top: -27rem;
  width: 75vh;
  height: 75vh;
  opacity: 70%;
  rotate: -2deg;
}

.account-info {
  color: var(--text);
  padding-left: 3rem;
}

h1 {
  padding-top: 1rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
}

h2 {
  padding-top: 4rem;
  font-size: 1.6rem;
  font-weight: 600;
}

h3 {
  font-size: 2.4rem;
  padding-top: 7rem;
  padding-bottom: 2.7rem;
}

.logout-btn {
  position: absolute;
  bottom: 3.5rem;
  left: 2.5rem;
  background: rgb(114, 8, 236);
  box-shadow: 0 0 95px rgb(114, 8, 236);
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 2rem;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 1s;
  transition-property: box-shadow;
}

.logout-btn:hover {
  box-shadow: 0 0 5px rgb(114, 8, 236),
              0 0 25px rgb(114, 8, 236),
              0 0 50px rgb(114, 8, 236),
              0 0 100px rgb(114, 8, 236);
}

@media (max-width: 768px) {
    .hidden {
        transform: none !important;
        opacity: 0 !important;
        transition: none !important;
    }

    .logout-btn {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px 18px;
    }
}
</style>