<script setup></script>

<template>
  <div>
    <div class="flex h-full w-full items-center justify-center">
      <div class="w-[500px] rounded border-2 p-4">
        <h1 class="py-2 text-center text-3xl font-bold">Tailwind CSS</h1>

        <div class="grid grid-cols-1 gap-y-8">
          <div>
            <p class="text-lg font-bold text-cyan-500">@apply</p>
            <hr class="mb-3" />
            <div class="grid gap-y-4">
              <div class="flex justify-between gap-x-4">
                <input
                  type="text"
                  value="又臭又長的class"
                  class="flex-1 border rounded p-2 text-blue-900 leading-8 disabled:bg-gray-300 disabled:border-yellow-200 focus:bg-pink-100" />
                <input
                  type="text"
                  value="又臭又長的class"
                  class="flex-1 border rounded p-2 text-blue-900 leading-8 disabled:bg-gray-300 disabled:border-yellow-200 focus:bg-pink-100"
                  disabled />
              </div>
              <div class="flex justify-between gap-x-4">
                <input type="text" value="用@apply解決" class="demo-disabled" />
                <input
                  type="text"
                  value="用@apply解決"
                  class="demo-disabled"
                  disabled />
              </div>
            </div>
          </div>
          <div>
            <p class="text-lg font-bold text-cyan-500">@mixin、@include</p>
            <hr class="mb-3" />
            <div class="grid grid-cols-4 gap-x-2">
              <span class="demo-border-span-1">1</span>
              <span class="demo-border-span-2">2</span>
              <span class="demo-border-span-3">3</span>
              <span class="demo-border-span-4">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[50px]">
      <div class="border-2 rounded border-pink-200 mb-[50px] p-4">
        <p class="text-lg font-bold text-cyan-500">@apply</p>
        <hr class="my-3" />
        <img src="/src/assets/images/apply.png" />
      </div>
      <div class="border-2 rounded border-pink-200 p-4">
        <p class="text-lg font-bold text-cyan-500">@mixin、@include</p>
        <hr class="my-3" />
        <img src="/src/assets/images/mixin-include.png" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
