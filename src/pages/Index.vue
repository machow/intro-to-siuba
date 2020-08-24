<template>
  <Layout>


  Redirecting to...  <a href="intro-data-science">intro data science</a>


  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
        title: `Redirecting to intro course`,
        meta: [
            { 'http-equiv': 'refresh', content: `0; URL=/intro-data-science/`}
        ],
        link: [
            { rel: 'canonical', href: `https://learn.siuba.org/intro-data-science/` }
        ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
