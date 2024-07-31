<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class=" btn glass btn-warning bg-warning text-white"
    >
        <slot />
    </button>
</template>
