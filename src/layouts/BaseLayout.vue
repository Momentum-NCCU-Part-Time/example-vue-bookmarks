<template>
  <div class="page-layout">
      <header class="w-full p-4 bg-rose-300 text-slate-700 drop-shadow-md">
        <slot name="header"></slot>
      </header>
      <main class="m-8 font-sans">
        <slot></slot>
      </main>
      <footer class="container flex flex-col items-center p-4 mx-auto mt-8 md:p-8 lg:flex-row text-smslack text-zinc-400">
        <slot name="footer"></slot>
      </footer>
  </div>
</template>
