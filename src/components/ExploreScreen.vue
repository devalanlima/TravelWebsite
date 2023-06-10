<template>
    <div id="explore" class=" max-w-full h-[500px] pl-14 px-20 mx-auto mr-auto overflow-y-scroll grid place-items-center">
        <div class="h-[500px] grid">
            <div class="font-Montserrat text-center flex flex-col gap-3 my-auto" >
                <h2 class="font-normal text-3xl text-white tracking-[0.8rem]">EXPLORE</h2>
                <h2 class=" font-bold text-9xl text-white/75">BRAZIL</h2>
            </div>
        </div>
        <div class="h-[500px] grid place-items-center">
            <div class="font-Montserrat text-center flex flex-col gap-3" >
                <h2 class="font-normal text-3xl text-white">EXPLORE</h2>
                <h2 class=" font-bold text-9xl text-white/75">BRAZIL</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
#explore {
    scrollbar-width: thin;
    scrollbar-color: white rgb(59, 59, 59);
}

#explore::-webkit-scrollbar {
    width: 1px;
}

#explore::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.342);
}

#explore::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    outline: 1px solid rgba(255, 255, 255, 0.486);
}

</style>