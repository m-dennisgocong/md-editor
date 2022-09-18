import { marked } from 'marked';
import Prism from 'prismjs';

const renderer = new marked.Renderer();
renderer.code = function(code, lang, escaped) {
  code = this.options.highlight(code, lang);
  if (!lang) {
    return `<pre><code>${code}</code></pre>`;
  }

  let langClass = "language-" + lang;
  return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
};

marked.setOptions({
    renderer,
    breaks: true,
    highlight: function (code, lang) {
        try{
            return Prism.highlight(code, Prism.languages[lang], lang);
        }
        catch{
            return code;
        }
    }
});

const PreviewText = ({inputText}) => {
    return(
        <div dangerouslySetInnerHTML={{__html: marked(inputText)}} id="preview"></div>
    );
}

export default PreviewText;