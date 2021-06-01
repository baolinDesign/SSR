<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <article-meta :article="article"></article-meta>

      </div>
    </div>
    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12" v-html="article.body">
        </div>
        <ul class="tag-list">
          <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList" :key="tag">
            {{tag}}
          </li>
        </ul>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article"></article-meta>
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <articleComment :article="article"></articleComment>

        </div>

      </div>

    </div>
  </div>

</template>

<script>
import { getArticle } from '@/api/article'
import MarkdownIt from 'markdown-it'
import articleMeta from './components/article-meta.vue'
import articleComment from './components/article-comment'
export default {
  components: { articleMeta, articleComment },
  name: 'ArticleIndex',
  async asyncData ({ params }) {
    const { data } = await getArticle(params.slug)
    const { article } = data
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    return {
      article: article
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>

</style>
