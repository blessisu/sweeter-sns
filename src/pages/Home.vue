<template>
    <div class="flex-1 border-r bodrer-gray-100 overflow-y-auto">
        <div class="flex flex-col">
        <!-- main title -->
        <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
        <!-- main sweet -->
        <div class="flex px-3 py-3 border-b-8 border-gray-100">
            <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full hover:opacity-70 cursor-pointer">
            <div class="ml-2 flex flex-1 flex-col">
            <textarea
                placeholder="무슨 일이 일어나고 있나요?"
                class="mb-3 w-full text-lg font-bold"
            ></textarea>
            <div class="text-right">
                <button class="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full hover:bg-dark">
                Sweet
                </button>
            </div>
            </div>
        </div>
        <!-- main sweet list -->
        <div 
            class="flex px-3 py-3 border-b border-gray-100" 
            v-for="sweet in 10"
            :key="sweet"
        >
            <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full hover:opacity-70 cursor-pointer">
            <div class="ml-3 flex-1 flex flex-col space-y-1">
            <!-- sweet list head -->
            <div class="text-sm space-x-1">
                <span class="font-bold">수현</span>
                <span class="text-gray-500 text-xs">@blessisu</span>
                <span>·</span>
                <span class="text-gray-500 text-xs">3분</span>
            </div>
            <!-- sweet list body -->
            <div>
                공부는 새벽해야 제 맛이다..
            </div>
            <!-- sweet list icons -->
            <div class="flex justify-between">
                <div class="text-gray-500 hover:text-blue-500">
                <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
                <span class="ml-1 text-sm">10</span>
                </div>
                <div class="text-gray-500 hover:text-green-500">
                <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
                <span class="ml-1 text-sm">10</span>
                </div>
                <div class="text-gray-500 hover:text-pink-500">
                <i class="far fa-heart hover:bg-pink-50 rounded-full p-2"></i>
                <span class="ml-1 text-sm">10</span>
                </div>
                <div class="text-gray-500 hover:text-blue-500">
                <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
                <span class="ml-1 text-sm">10</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <!-- trend section -->
    <Trends />
</template>

<script>
import Trends from '../components/Trends.vue'
export default {
  components: { Trends },
  setup() {},    
}
</script>