// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const Marked = require('marked')
var html = require('remark-html')

// from revealjs source code: 
// https://github.com/hakimel/reveal.js/blob/master/plugin/markdown/plugin.js
const CODE_LINE_NUMBER_REGEX = /\[([\s\d,|-]*)\]/;
const renderer = new Marked.Renderer()
renderer.code = ( code, language ) => {
	// Off by default
	let lineNumbers = '';

	// Users can opt in to show line numbers and highlight
	// specific lines.
	// ```javascript []        show line numbers
	// ```javascript [1,4-8]   highlights lines 1 and 4-8
	if( CODE_LINE_NUMBER_REGEX.test( language ) ) {
		lineNumbers = language.match( CODE_LINE_NUMBER_REGEX )[1].trim();
		lineNumbers = `data-line-numbers="${lineNumbers}"`;
		language = language.replace( CODE_LINE_NUMBER_REGEX, '' ).trim();
	}

	return `<pre><code ${lineNumbers} class="${language}">${code}</code></pre>`;
};


const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

// NOTE: gridsome overrides NODE_ENV. see https://github.com/gridsome/gridsome/pull/951/files
const pathPrefix = process.env.BUILD_ENV == "production"
                ? ''
                : '/staging'

const outputDir = process.env.BUILD_ENV == "production"
                  ? 'dist'
                  : 'dist/staging'

module.exports = {
  siteName: 'Siuba tutorials',
  //siteUrl: 'http://localhost:8080',
  siteUrl: 'https://learn.siuba.org',
  pathPrefix,
  outputDir,
  //pathPrefix: '/intro-to-siuba',
  settings: {
    nav: {
      links: [
        { path: '/tutorial/', title: 'Tutorials' }
      ]
    },
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './tutorial/intro-data-science/build',
        pathPrefix: '/intro-data-science',
        path: '**/*.md',
        typeName: 'Post',
        template: './src/templates/Post.vue',
        remark: {
          autolinkClassName: 'fa fa-link',
        },
        externalLinksTarget: '_blank',
        externalLinksRel: ['noopener', 'noreferrer'],
        allowDangerousHTML: true,
        plugins: [
          '@gridsome/remark-prismjs',
          ['gridsome-plugin-remark-youtube', {width: '250px'}],
        ]
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './tutorial',
        path: '*/index.md',
        typeName: 'CourseLanding',
        template: './src/templates/CourseLanding.vue',
        remark: {
          autolinkClassName: 'fa fa-link',
        }
      },
    },
//    {
//      use: '@gridsome/plugin-sitemap',
//      options: {
//        cacheTime: 600000, // default
//      }
//    },
  ],
  configureWebpack: {
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {loader: 'html-loader'}
            },

            {
              test: /\.markdown$/,
              use: [
                {
                  loader: 'html-loader',
                  options: {
                    esModule: true,
                  }
                },
                
                {
                  loader: "markdown-loader",
                  //options: {
                  //  renderer
                  //}
                }
              ]
            }

        ]
    }
  },
  //chainWebpack (config) {
  //  return config
  //    .plugin('BundleAnalyzerPlugin')
  //    .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
  //}
  css: {
    loaderOptions: {
      scss: {
        // sass-loader version >= 8
        sassOptions: {
          sassOptions: {
            indentedSyntax: true
          }
        }
      }
    }
  }
}
