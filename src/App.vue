<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

</script>

<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
 
</template>

<style>
/* ตั้งค่า SweetAlert2 ให้แสดงตรงกลางและไม่กระทบ content */
.swal2-container {
    position: fixed !important;
    padding: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background-color: rgba(0, 0, 0, 0.4) !important;
    z-index: 9999 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    overflow: hidden !important;
}

.swal2-popup {
    position: relative !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    max-width: 90% !important;
    padding: 1.25em !important;
    border-radius: 0.3125em !important;
    background: #fff !important;
    font-family: inherit !important;
    margin: 0 !important;
}

/* ป้องกันการเลื่อนของ content */
body.swal2-shown {
    overflow: hidden !important;
    padding-right: 0 !important;
}

/* ป้องกันการเพิ่ม padding  */
.swal2-shown {
    padding-right: 0 !important;
}

html.swal2-shown {
    overflow-y: hidden !important;
}
</style>
