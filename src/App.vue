<template>
  <div class="flex h-screen container mx-auto">
    <!-- app side bar start-->
    <div class="w-20 lg:w-1/4 pt-5 lg:ml-5 flex flex-col justify-between border-r border-gray-100">
      <div class="flex flex-col items-center lg:items-start">
        <!-- logo -->
        <i class="fas fa-candy-cane text-3xl text-primary lg:ml-4 mb-3"></i>
        <!-- side-bar menu -->
        <div class="flex flex-col items-start"> 
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-home fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">Home</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">탐색</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-bell fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-envelope fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
          </div>        
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-bookmark fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-list-alt fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-user fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full cursor-pointer">
            <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">더보기</span>
          </div>
        </div>
        <!-- Sweet btn -->
        <div class="w-full lg:pr-3 flex justify-center">
          <button class="mt-3 bg-primary text-white lg:w-full w-12 h-12 rounded-full hover:bg-dark">
            <span class="hidden lg:block">Sweet</span>
            <i class="fas fa-plus lg:hidden"></i>
          </button>
        </div>
      </div>
      <!-- Profile btn -->
      <div class="lg:pr-3 mb-3">
        <button 
          class="hidden lg:flex items-center mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-lighter"
        >
          <!-- Random size 100 picture site -->
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full"> 
          <div class="lg:ml-2 hidden lg:block">
            <div class="text-sm font-bold">blessisu@github.com</div>
            <div class="text-xs text-gray-500 text-left">@blessisu</div>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden lg:block"></i>
        </button>
        <div class="lg:hidden flex justify-center">
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-70"> 
        </div>
      </div>
    </div>
    <!-- app side bar end-->

    <div class="flex-1">
      <div class="flex h-screen">
        <!-- main section -->
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
      </div>
    </div>
  </div>
</template>

<script>
import Trends from './components/Trends.vue'
export default {
  components: { Trends },
  setup() {},
};
</script>