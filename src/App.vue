<template>
  <div class="flex h-screen">
    <!-- app side bar start-->
    <div class="w-1/4 pt-5 ml-5 flex flex-col justify-between border-r border-gray-200">
      <div class="flex flex-col items-center lg:items-start">
        <!-- logo -->
        <i class="fas fa-candy-cane text-3xl text-primary lg:ml-4 mb-3"></i>
        <!-- side-bar menu -->
        <div class="flex flex-col items-start"> 
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-home fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">Home</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">탐색</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-bell fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-envelope fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
          </div>        <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-bookmark fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-list-alt fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-user fa-fw text-2xl"></i>
            <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
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

    <div class="flex-1">dd</div>
  </div>
</template>

<script>
export default {

};
</script>