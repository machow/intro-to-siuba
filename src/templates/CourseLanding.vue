<template>
  <Layout>
    <h1 class="course-title">{{$page.page.title}}</h1>
    <div class="container">
      <div class="main">
        <section class="chapter" v-for="(chapter, ii) in $page.page.chapters">
          <g-link :to="chapter.path">
            <div>
              <h3 class="box-title">{{chapter.title}}</h3>
              <p>{{chapter.description}}</p>
              <div>
                <template v-if="ii == 0">
                  <button class="btn-course-start">Start Course</button>
                </template>
              </div>
            </div>
          </g-link>
        </section>
      </div>
      <div class="sidebar">
        <div class="resources sidebar-box">
          <h3 class="box-title">resources</h3>
          <ul v-for="res in $page.page.resources">
            <li><a :href="res.url">{{res.name}}</a></li>
          </ul>
        </div>
        <div class="authors sidebar-box">
          <h3 class="box-title">authors</h3>
          <div v-for="author in $page.page.authors">
            <div class="author-image">
              <g-image src="~/assets/authors-michael.png" width="128" />
            </div>
            <p class="author-bio" v-html="author.bio" />
          </div>
        </div>
      </div>
    </div>
    <VueRemarkContent />
  </Layout>
</template>

<script>

export default {
  metaInfo() {
    return {
      title: this.$page.page.title,
      meta: [
        { name: 'author', content: this.$page.page.author || "" }
      ],
    }
  }
}

</script>

<page-query>
query CourseLanding ($path: String!) {


  metadata {
    siteName
    siteDescription
  }
  page: courseLanding (path: $path) {
    id
    title
    content
    chapters {
      path
      description
      title
    }
    authors {
      name
      bio
    }
    resources {
      name
      url
    }
  }
}
</page-query>

<style scoped>

.chapter {
  margin-bottom: 12px;
}

.chapter div {
  padding: 12px;
}

.box-title {
  margin-top: 0px;
}

.sidebar .box-title {
  text-align: center;
}

.container {
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.main {
  max-width: 680px;
  margin: auto;
}

.sidebar {
  max-width: 220px;
  padding-left: 20px;
}

.sidebar .sidebar-box {
  padding: 12px;
  margin-bottom: 12px;
}

.chapter {
  border-top: solid rgb(238, 238, 238) 1px;
  /*border-bottom: solid rgb(238, 238, 238) 1px;*/
  border-radius: 4px;
}

/*
.authors, .resources {
  border-left: solid rgb(238, 238, 238) 1px;
  border-radius: 4px;
}
*/

a {
  text-decoration: none;
  text-decoration-color: rgb(68, 68, 68);
  color: black;
}

a h3 {
  text-decoration: none;
  text-decoration-color: rgb(68, 68, 68);
}

.course-title {
  text-align: center;
}

.authors .author-bio {
  font-size: var(--font-size-sm);
  font-line-height: 1.2;
}

.author-image img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.resources a {
  color: darkblue;
}

.btn-course-start {
  padding: 15px 40px 15px 40px;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  cursor:pointer;
  font-size: var(--font-size-md);
  background: lightgreen;
  margin-left: auto;
  margin-right: 0;
  display: block;
}

</style>

