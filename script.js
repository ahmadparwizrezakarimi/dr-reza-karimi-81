document.addEventListener("DOMContentLoaded",()=>{
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 const intro=$("#intro"), enter=$("#enterWorld"), skip=$("#skipIntro");
 const closeIntro=()=>{intro.classList.add("leaving");sessionStorage.setItem("aprkIntroSeen","1");setTimeout(()=>intro.remove(),1100)};
 if(sessionStorage.getItem("aprkIntroSeen")==="1"){intro.remove()}else{enter.addEventListener("click",closeIntro);skip.addEventListener("click",closeIntro)}
 $("#year").textContent=new Date().getFullYear();
 const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
 // Ambient particle field: lightweight canvas, no external 3D dependency.
 const canvas=$("#universe"),ctx=canvas.getContext("2d");let w,h,dpr,particles=[];
 function resize(){dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+"px";canvas.style.height=h+"px";ctx.setTransform(dpr,0,0,dpr,0,0);particles=Array.from({length:Math.min(115,Math.floor(w*h/10500))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.4+.25,a:Math.random()*.65+.15,s:(Math.random()-.5)*.12,p:Math.random()*6.28}))}
 resize();addEventListener("resize",resize);
 let tick=0;function draw(){if(reduce)return;ctx.clearRect(0,0,w,h);tick+=.006;for(const p of particles){p.y-=.08;p.x+=p.s;if(p.y<0)p.y=h;if(p.x<0)p.x=w;if(p.x>w)p.x=0;const alpha=p.a*(.55+.45*Math.sin(tick+p.p));ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(224,190,122,${alpha})`;ctx.fill()}requestAnimationFrame(draw)}draw();
 const glow=$(".cursor-glow");if(matchMedia("(pointer:fine)").matches){addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"})}
 // Reveal on scroll
 const reveals=$$(".reveal");if("IntersectionObserver"in window&&!reduce){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(el=>io.observe(el))}else reveals.forEach(el=>el.classList.add("visible"));
 // Galaxy nodes
 const info=$("#planetInfo");$$(".planet").forEach(btn=>btn.addEventListener("click",()=>{$$(".planet").forEach(x=>x.classList.remove("active"));btn.classList.add("active");info.innerHTML=`<span class="info-star">✦</span><div><b>${btn.dataset.title}</b><p>${btn.dataset.desc}</p></div>`}));
 // language toggle: bilingual content is deliberately conservative; preserve identity and links.
 let english=false;$("#language").addEventListener("click",()=>{english=!english;document.documentElement.lang=english?"en":"fa";document.documentElement.dir=english?"ltr":"rtl";document.body.classList.toggle("en",english);$("#language").textContent=english?"دری":"EN";const h=$(".intro-screen h1");if(h)h.textContent=english?"Welcome to my world":"به جهان من خوش آمدید";});
 // Sound stays opt-in; no autoplay or hidden audio.
 $("#soundToggle").addEventListener("click",()=>toast("صدای سایت فعلاً خاموش است؛ هیچ صدایی بدون اجازهٔ شما پخش نمی‌شود."));
 // Native share with safe fallback.
 $("#shareSite").addEventListener("click",async()=>{const data={title:"_A.P.R.K_ — Ahmad Parwiz Reza Karimi",text:"جهان دیجیتالی احمد پرویز رضا کریمی",url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);toast("پیوند سایت کاپی شد.")}}catch(e){if(e.name!=="AbortError")toast("برای اشتراک‌گذاری، پیوند سایت را از نوار آدرس کاپی کنید.")}});
 const back=$("#backTop");addEventListener("scroll",()=>back.classList.toggle("show",scrollY>500),{passive:true});back.addEventListener("click",()=>scrollTo({top:0,behavior:reduce?"auto":"smooth"}));
 function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),3000)}
});