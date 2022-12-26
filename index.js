const puppeteer = require('puppeteer')

async function start(){

  async function loadMore(){
      const moreButton= await page.$(selector)
      if(moreButton){
          console.log("Aqui")
          await moreButton.click()
          await page.waitFor(selector, {timeout: 5000}).catch(()=>{console.log("Fim")})
          await loadMore(page, selector)
      }
  }

  async function getComments(page, selector){
    const comments = await page.$$eval(selector, links => links.map(link => link.innerText))
    return comments
  } 

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://instagram.com/p/CChMVvQgYKK/')
  await loadMore(page, '.dCJp8')
  const comments = await getComments(page, '.C4VMK span a')
  console.log(comments)
}

arrobas = [
 "cleison_dev", 
 "victorcolucci",
 "lauratuttman",
 "victorcolucci",
 "paolamarinofc",
 "paolamarinofc",
"victorcolucci",
"paolamarinofc",
"cleison_dev",
"paolamarinofc",
"paolamarinofc",
]
function count(arrobas){
 const count = {}
 arrobas.forEach( arroba => { count[arroba] = (count[arroba] || 0)+1 } )
 return count
}

function sort(counted){
 /* 
 const entries = []
 for (prop in counted){
     entries.push([prop, counted[prop]])
 }
 */
  const entries= Object.entries(counted)
  console.log(entries)
  // const srt = entries.sort((a,b)=>b[1]-a[1])
  const srt = entries.sort((a,b)=> {return b[1]-a[1]}) 
  console.log(srt)
}
/*
x = count(arrobas)
console.log(x)
sort(x)
*/
start()
