<template>
    <div class="flex align-items-center justify-content-center" style="height: 100vh;">
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5"> 
                <img src="../../assets/bk-latinad.png" alt="Image" height="50" class="mb-3" />
                <div class="text-900 text-3xl font-medium mb-3">Welcome LATIN<strong>AD</strong></div>
               
            </div>

            <div>
                <RouterView />
            </div>
        </div>
    </div>
</template>
