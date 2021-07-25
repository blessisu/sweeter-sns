<template>
  <div class="flex-1 flex">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-auto">
      <div class="flex flex-col">
        <div class="p-3 font-bold text-lg border-b border-gray-100">쪽지</div>
        <!-- a chat list -->
        <div class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray-100 border-r bg-gray-200">
          <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full mr-2 cursor-pointer">
          <div>
            <div class="flex space-x-1">
              <div class="font-bold">blessisu</div>
              <div class="text-gray-500">@blessisu</div>
              <div class="text-gray-500">7월 26일</div>
            </div>
            <div class="text-gray-500">메시지</div>
          </div>
        </div>
        <div 
          class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray-100"
          v-for="message in 10"
          :key="message"
        >
          <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full mr-2 cursor-pointer">
          <div>
            <div class="flex space-x-1">
              <div class="font-bold">blessisu</div>
              <div class="text-gray-500">@blessisu</div>
              <div class="text-gray-500">7월 26일</div>
            </div>
            <div class="text-gray-500">메시지</div>
          </div>
        </div>
      </div>
    </div>
    <!-- chattting -->
    <div class="w-3/5 border-r border-gray-100"></div>
  </div>
</template>

<script>
export default {

};
</script>