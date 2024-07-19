let d=document.getElementById('rng')
let e=document.getElementById('pl')
let but=document.getElementById('mb')
const pass=document.getElementById('in')
let up=document.getElementById('cond1')
let low=document.getElementById('cond2')
let num=document.getElementById('cond3')
let sym=document.getElementById('cond4')
let co=document.getElementById('cop')
let st=document.getElementById('str')
let cha=''
let f=(d.value-d.min)/(d.max-d.min)*100;
let va=0
let uppcha='ABCDEFHIJKLMNOPQRSTUWVXYZ'
let lowcha='abcdefghijklmnopqrstuwvxyz'
let nu='012356789'
let sy='!$@%^&*+-_/:;,'
d.style.background=`linear-gradient(to right, #a61add ${f}%,   #290238 ${f}%)`
function slidecolor()
{
       const per=(d.value-d.min)/(d.max-d.min)*100;
       const gradientColor = `linear-gradient(to right, #a61add ${per}%,   #290238 ${per}%)`
       d.style.background=gradientColor
       e.innerText=d.value;
}
d.addEventListener('input',function(){
         slidecolor();
}
)
function checkcon(){
if(up.checked)
{
      cha=cha+uppcha
}
if(low.checked)
{
      cha=cha+lowcha
}
if(num.checked)
{
      cha=cha+nu
}
if(sym.checked)
{
      cha=cha+sy
}
}
function genpass(va)
{
      const q=parseInt(va,10);
      let result=''
      for(let i=1;i<=q;i++)
      {
           result=result+cha.charAt(Math.floor(Math.random()*cha.length))
      }
      pass.textContent=result
}
but.addEventListener('click',function(){
      checkcon();
      console.log(cha)
      genpass(d.value)
      if(d.value >= 12)
      {
            if(up.checked && num.checked && sym.checked)
            {
               st.style.backgroundColor='#06D001'
            }
            else if(low.checked && num.checked && sym.checked )
            {
                  st.style.backgroundColor='#06D001'
            }
            else
            {
                  st.style.backgroundColor='red'
            }
      }
      else
      {
            st.style.backgroundColor='red'
      }
      cha=''
})
co.addEventListener('click',function(){
      navigator.clipboard.writeText(pass.textContent);
})
