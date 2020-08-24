<template>
  <Layout>
      <div class="center">
        <div class="left">
            <g-link :to="parentUrl">
              <g-image class="nav-icon" src="~/assets/home.svg" width="32" />
            </g-link>
            <template v-for="(chunk, title) in sidebarChunks">
              <ul class="menu-list">
                <li><h3>{{title}}</h3></li>
                <li v-for="entry in chunk">
                  <g-link :to="entry.path">
                      {{entry.title}}
                  </g-link>
                  <ul v-if="entry.id == $page.post.id">
                    <li v-for="heading in entry.headings">
                        <span>{{heading.value}}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </template>
        </div>
        <div id="right" class="right">
          <div class="content">

            <h1>{{$page.post.title}}</h1>

            <VueRemarkContent />

            <div class="lesson-nav">
              <g-link :to="navPrevious">prev page</g-link>
              <g-link :to="navNext" class="next-page">next page</g-link>
            </div>

            <div class="content-bottom-filler"></div>
          </div>
        </div>
      </div>

  </Layout>
</template>

<script>

import RevealSlides from '~/components/RevealSlides.vue'

export default {
  components: {RevealSlides},
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: 'author', content: this.$page.post.author || "" }
      ],
    }
  },
  computed: {
    sidebarChunks () {
      // group by tutorial "chunk", so each will have its own header in sidebar
      const chunks = {}
      this.$page.allPosts.edges.forEach(({node}) =>  {
        if (!node.chunk) return
        const coll = chunks[node.chunk] || []
        coll.push(node)

        chunks[node.chunk] = coll
      })
      return chunks
    },
    parentUrl () {
      return this.$page.post.path.split("/").slice(0,-2).join("/")
    },
    crntNav () {
      const matches = this.$page.allPosts.edges.filter(({node}) =>  {

        return node.id == this.$page.post.id
      })

      return matches[0] || {}
    },
    navNext () {
      return this.crntNav?.next?.path
    },
    navPrevious () {
      return this.crntNav?.previous?.path
    }
  }
}

</script>

<page-query>
query Post ($path: String!) {


  metadata {
    siteName
    siteDescription
  }
   post: post (path: $path) {
    id
    title
    content
    path

    chunk
  }

  #allPosts: allPost(sortBy: "path", order: ASC, filter: { path: { regex: "/(demo|intro)" }, include: { ne: false }}) {
  allPosts: allPost(sortBy: "path", order: ASC, filter: { path: { regex: "/(intro)" }}) {
    edges {
      node {
        id
        path
        title
        chunk
        headings (depth: h2) {
          value
          anchor
        }
        fileInfo {
          directory
        }
      }
      next {
        path
      }
      previous {
        path
      }
    }
  }
}
</page-query>

<style>

/* sidebar */

.left {
  padding-left: 1em;
}

.left ul {
  list-style-type: none;
  margin: 0;
  line-height: 1.5em;
  padding-left: 0;
  /*padding-left: 1em;*/
}

.left a, .left a:visited, .left a:hover, .left a:active {
  color: inherit;
}

/*
.menu-list a.active {
    background-color: #7957d5;
    color: white;
}
*/

.left a {
    text-decoration: none;
}

/* Blanking out LHS menu */

@media screen and (min-width: 960px) {
    .left:not(:hover) a, .left:not(:hover) span {
        color: #e6e6e6;
        background: #e6e6e6;
    }        

    .left:not(:hover) .menu-list a.active {
        color: #a1ffbb;
        background: #a1ffbb;
    }

    .left:not(:hover) img {
      visibility: hidden;
    
      background-color: #e6e6e6;
      /*filter: opacity(0%);*/
    }

    .left:not(:hover) h3 {
        visibility: hidden;
    }



}

.left .menu-list a.active {
    background: #a1ffbb;
}

/* bulma overrides the style, and it's screwing up codemirror :/ */

.center{
    margin: 0;
    width: 100%;
    /*max-width: 1300px;*/
    position: relative;
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap-reverse;

    box-sizing: border-box;
}


.left{
    position: sticky;
    transition: border-color .3s;
    top: 20px;
    height: calc(100vh - 30px);
    width: 240px;
    order: 0;

    z-index: 10;
    overflow: auto;
}

.right{
    position: relative;
    /*width: 80%;
    flex: 1;
    */
    flex-grow: 1;
    box-sizing: border-box;
    overflow-wrap: break-word;
}

.content {
  margin: auto;
  max-width: 680px;
  overflow: visible;
}

.clear {
    clear: both;
}

/* Mobile stuff */
@media screen and (max-width: 960px) {
  .left {
    position: relative;
    width: 100%;
    height: auto;
  }

  .right {
    overflow-x: hidden;
  }

  .right .content {
    left: 0px !important;
    margin: auto !important;
  }
}

@media screen and (max-width: 1200px) {
  .right .content {
    margin: 0 auto 0 10px;
    left: 0px !important;
  }
}

.right .content {
    left: -120px;
    position: relative;
}



/* Bottom links */

a.next-page {
    float: right;
}

div.content-bottom-filler {
    height: 200px;
}

div.lesson-nav {
    margin-top: 50px;
}

div.lesson-nav a {
    font-size: var(--font-size-lg);
}

/* Markdown Content specific */

.content button {
  /*background-color: #fff;*/
  padding: .75rem 1rem;
  border-width: 1px;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
}


/* DataFrame */

table.dataframe {
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  color: black;
  font-size: 12px;
  table-layout: fixed;
}
table.dataframe thead {
  border-bottom: 1px solid black;
  vertical-align: bottom;
}
table.dataframe tr,
table.dataframe th,
table.dataframe td {
  text-align: right;
  vertical-align: middle;
  padding: 0.5em 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  min-width: 0;
  border: none;
  font-family: monospace;
}
table.dataframe th {
  font-weight: bold;
}
table.dataframe tbody tr:nth-child(odd) {
  background: #f5f5f5;
}
table.dataframe tbody tr:hover {
  background: rgba(66, 165, 245, 0.2);
}


/* Hide the number that counts outputs */
.jp-OutputArea-prompt {
  display: none;
}

</style>
