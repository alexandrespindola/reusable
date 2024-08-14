<template>
    <div class="container">
        <div class="auxbar">
            <AuxBar />
        </div>
        <div class="main-content-container">
            <div class="menu">
                <MenuSideBar />
            </div>
            <div class="main-content">
                <h1>
                    <slot name="main"></slot>
                </h1>
            </div>
            <div class="aux-content">
                <h2>
                    <slot name="aux"></slot>
                </h2>
            </div>
        </div>
    </div>
    <div @mousemove="useMouse">
        <p>Mouse X: {{ mouseX }}</p>
        <p>Mouse Y: {{ mouseY }}</p>
      </div>
</template>

<script lang="ts" setup>
import AuxBar from '@/components/AuxBar.vue';
import MenuSideBar from '@/components/MenuSideBar.vue';
import { useMouse } from '@/composables/useMouse';

const { mouseX, mouseY } = useMouse();
</script>