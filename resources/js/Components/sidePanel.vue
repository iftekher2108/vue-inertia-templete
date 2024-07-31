<script setup>
import { Link } from '@inertiajs/vue3';
import NavLink from '@/Components/NavLink.vue';


const icon_style = "p-2 border border-1 rounded-full";

</script>

<template>
    <div class="bg-neutral min-h-screen rounded-lg max-h-full p-1">
        <ul class="menu w-full rounded-box">
            <li>
                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                    <font-awesome-icon :class="icon_style" icon="fa-solid fa-house-chimney" />  Dashboard
                </NavLink>

            </li>

            <li>
                <NavLink href="">
                    Profile
                </NavLink>
            </li>
            <!-- <li><Link :href="route()" class="p-3 hover:bg-primary">Item 3</Link></li> -->

            <li class="p-2">
                <details>
                    <summary>User setting</summary>
            <li>
                <NavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                    <font-awesome-icon :class="icon_style" icon="fa-solid fa-user" />  Profile Settings
                </NavLink>
            </li>

            </details>
            </li>

            <li class="p-2">
                <details>
                    <summary> System settings</summary>

            <li>
                <NavLink :href="route('settings')" :active="route().current('settings')" >settings</NavLink>
            </li>
            <li>
                <NavLink href=""><font-awesome-icon icon="fa-solid fa-user-secret" /> setting 2</NavLink>
            </li>

            </details>
            </li>

            <li class="p-2">
                <details>
                    <summary>System settings</summary>

            <li>
                <NavLink :href="route('settings')" :active="route().current('settings')">
                    <font-awesome-icon :class="icon_style" icon="fa-solid fa-screwdriver-wrench" />
                     settings</NavLink>
            </li>

            <li>
                <NavLink href=""><font-awesome-icon :class="icon_style" icon="fa-solid fa-gears" /> setting 2</NavLink>
            </li>

            </details>
            </li>


        </ul>
    </div>
</template>

<style scoped></style>
