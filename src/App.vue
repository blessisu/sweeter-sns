<template>
  <div class="flex h-screen">
    <!-- app side bar start-->
    <div class="w-1/4 mt-5 ml-5 flex flex-col justify-between">
      <div>
        <!-- logo -->
        <i class="fas fa-candy-cane text-3xl text-primary"></i>
        <!-- side-bar menu -->
        <div class="flex flex-col items-start"> 
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-home fa-fw text-2xl"></i>
            <span class="ml-5 text-lg">Home</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-hashtag fa-fw text-2xl"></i>
            <span class="ml-5 text-lg">탐색</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-bell fa-fw text-2xl"></i>
            <span class="ml-5 text-lg">알림</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-envelope fa-fw text-2xl"></i>
            <span class="ml-5 text-lg">쪽지</span>
          </div>        <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-bookmark fa-fw text-2xl"></i>
            <span class="ml-5 text-lg">북마크</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-list-alt fa-fw text-2xl"></i>
            <span class="ml-5 text-lg">리스트</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-user fa-fw text-2xl"></i>
            <span class="ml-5 text-lg">프로필</span>
          </div>
          <div class="hover:text-primary hover:bg-lighter px-4 py-2 rounded-full">
            <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
            <span class="ml-5 text-lg">더보기</span>
          </div>
        </div>
        <!-- Sweet btn -->
        <div class="mr-3">
          <button class="mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark">
            Sweet
          </button>
        </div>
        <!-- Profile btn -->
      </div>
      <div class="mr-3 mb-3">
        <button class="flex items-center mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-lighter">
          <!-- Random size 100 picture site -->
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full">
          <div class="ml-2">
            <div class="text-sm font-bold">blessisu@github.com</div>
            <div class="text-xs text-gray-500 text-left">@blessisu</div>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs"></i>
        </button>
      </div>
    </div>
    <!-- app side bar end-->

    <div class="flex-1 bg-red-200">dd</div>
  </div>
</template>

<script>
export default {

};
</script>