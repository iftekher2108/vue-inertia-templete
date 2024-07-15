<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';



const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});


const active = computed(() =>
    props.active
        ? 'bg-primary'
        : 'bg-none'
);


</script>

<template>
    <div class="bg-neutral min-h-screen max-h-full p-2">
        <ul class="menu w-full rounded-box">
            <li>
                <Link :class="active" :active="route().current('dashboard')" :href="route('dashboard')"
                    class="p-3 text-base transition-all duration-150
                     ease-in-out font-bold hover:bg-primary">Dashboard
                </Link>

            </li>

            <li>
                <Link :class="active" :href="route('profile.edit')"
                    class="p-3 text-base font-bold transition-all
                     duration-150 ease-in-out hover:bg-primary">Profile
                </Link>
            </li>
            <!-- <li><Link :href="route()" class="p-3 hover:bg-primary">Item 3</Link></li> -->
            <li>
                <details>
                    <summary class="p-3 text-base font-bold
                 transition-all duration-150 ease-in-out
                  hover:bg-primary">System settings</summary>
                    <ul>
                        <li><Link :href="route('settings')" class="p-3 text-base font-bold transition-all duration-150 ease-in-out hover:bg-primary">settings</Link></li>
                        <li><Link class="p-3 text-base font-bold transition-all duration-150 ease-in-out hover:bg-primary">setting 2</Link></li>
                    </ul>
                </details>
            </li>

            <li>
                <details>
                    <summary class="p-3 text-base font-bold
                 transition-all duration-150 ease-in-out
                  hover:bg-primary">User setting</summary>
                    <ul>
                        <li><Link class="p-3 text-base font-bold transition-all duration-150 ease-in-out hover:bg-primary">Submenu 1</Link></li>

                        <li>
                            <details>
                                <summary class="p-3 text-base font-bold
                 transition-all duration-150 ease-in-out
                  hover:bg-primary">sub sub menu</summary>
                                <ul>
                                    <li><Link class="p-3 text-base font-bold transition-all duration-150 ease-in-out hover:bg-primary">Sub sub menu 1</Link></li>
                                    <li><Link class="p-3 text-base font-bold transition-all duration-150 ease-in-out hover:bg-primary">Sub sub menu 2</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
