<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900  dark:text-gray-100">
                        <div class="flex flex-wrap">


                            <div class="card bg-base-100 p-1 basis-2/6 image-full  shadow-xl">
                                <figure>
                                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div class="card-body">
                                    <h2 class="card-title">Title</h2>

                                    <div class="flex justify-between px-3">
                                    <p>Total:</p><p>100</p>
                                    </div>
                                    <div class="card-actions justify-stretch">
                                        <Link class="btn w-full btn-primary">Buy Now</Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
