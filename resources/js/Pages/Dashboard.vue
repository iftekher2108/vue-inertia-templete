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


                        <div class="flex flex-wrap">

                            <div class="card p-1 basis-2/6 image-full  shadow-xl">
                                <!-- <figure>
                                    <img src=""
                                        alt="Shoes" />
                                </figure> -->
                                <div class="glass rounded-md bg-primary card-body">
                                    <h2 class="card-title">Title</h2>

                                    <div class="flex justify-between">
                                    <p>Total:</p><p>100</p>
                                    </div>
                                    <!-- <div class="card-actions justify-stretch">
                                        <Link class="btn w-full btn-primary">Buy Now</Link>
                                    </div> -->
                                </div>
                            </div>

                            <div class="card p-1 basis-2/6 image-full  shadow-xl">
                                <!-- <figure>
                                    <img src=""
                                        alt="Shoes" />
                                </figure> -->
                                <div class="glass rounded-md bg-success card-body">
                                    <h2 class="card-title">Title</h2>

                                    <div class="flex justify-between">
                                    <p>Total:</p><p>100</p>
                                    </div>
                                    <!-- <div class="card-actions justify-stretch">
                                        <Link class="btn w-full btn-primary">Buy Now</Link>
                                    </div> -->
                                </div>
                            </div>

                            <div class="card p-1 basis-2/6 image-full  shadow-xl">
                                <!-- <figure>
                                    <img src=""
                                        alt="Shoes" />
                                </figure> -->
                                <div class="glass rounded-md bg-accent card-body">
                                    <h2 class="card-title">Title</h2>

                                    <div class="flex justify-between">
                                    <p>Total:</p><p>100</p>
                                    </div>
                                    <!-- <div class="card-actions justify-stretch">
                                        <Link class="btn w-full btn-primary">Buy Now</Link>
                                    </div> -->
                                </div>
                            </div>
                        </div>

    </AuthenticatedLayout>
</template>
