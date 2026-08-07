const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());

const form=document.querySelector('#serviceForm');
if(form){
  const success=document.querySelector('#success');
  const error=document.querySelector('#formError');
  const submit=form.querySelector('button[type="submit"]');
  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    if(!form.checkValidity()){form.reportValidity();return;}
    const ref='SL-'+new Date().getFullYear()+'-'+crypto.getRandomValues(new Uint32Array(1))[0].toString(36).slice(0,6).toUpperCase();
    const refInput=document.querySelector('#reference');if(refInput)refInput.value=ref;
    if(success)success.style.display='none';if(error)error.style.display='none';
    const old=submit.textContent;submit.disabled=true;submit.textContent='Submitting securely…';
    try{
      const data=new URLSearchParams(new FormData(form));
      const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:data.toString()});
      if(!response.ok)throw new Error('Submission failed');
      document.querySelector('#refNo').textContent=ref;
      success.style.display='block';success.focus();form.reset();
    }catch(err){
      if(error){error.style.display='block';error.focus?.();}
    }finally{submit.disabled=false;submit.textContent=old;}
  });
}
