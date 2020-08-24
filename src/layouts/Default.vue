<template>
  <div class="layout">
    <!--
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/demo/01-minimal-code">Tutorials</g-link>
      </nav>
    </header>
    -->
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/*
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
*/

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /*
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  */
}

/*

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
*/

.nav__link {
  margin-left: 20px;
}
</style>
