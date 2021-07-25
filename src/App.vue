<template>
  <div class="flex h-screen">
    <!-- app side bar start-->
    <div class="w-1/4 mt-5 ml-5">
      <!-- logo -->
      <i class="fas fa-candy-cane text-2xl text-primary"></i>
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
      <button class="mt-3 bg-primary text-white w-60 h-12 rounded-full hover:bg-dark">
        Sweet
      </button>
    </div>
    <!-- app side bar end-->

    <div class="flex-1 bg-red-200">dd</div>
  </div>
</template>

<script>
export default {

};
</script>