const list={ul:["bag",'pen','pencil',],ol:["1",'2','3']}
const {ul,ol}=list;

const postHtml=`<ul>
${ul.map(ele=>`<li>${ele}</li>`).join('\n  ')}
</ul>
<ol>
${ol.map(ele=>`<li>${ele}</li>`).join('\n  ')}
</ol>

`;
console.log(postHtml);