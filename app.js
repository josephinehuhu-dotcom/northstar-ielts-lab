const views = [...document.querySelectorAll('.view')];
const navItems = [...document.querySelectorAll('.nav-item')];
const toast = document.querySelector('#toast');
function showView(name){views.forEach(v=>v.classList.toggle('active-view',v.id===`${name}-view`));navItems.forEach(n=>n.classList.toggle('active',n.dataset.view===name));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-view]').forEach(el=>el.addEventListener('click',()=>showView(el.dataset.view)));
function notify(msg='已记录，做得漂亮！'){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelector('#start-plan').addEventListener('click',()=>{showView('listen');notify('今日训练开始，先从听力热身吧')});
document.querySelector('#mark-listen').addEventListener('click',e=>{e.currentTarget.innerHTML='已完成 <span>✓</span>';e.currentTarget.disabled=true;notify('听力打卡成功 +10 XP')});
document.querySelector('#check-answer').addEventListener('click',()=>notify('答对了！protected focus time = creating uninterrupted time'));
let shadowPlaying=false;document.querySelector('#shadow-play').addEventListener('click',e=>{shadowPlaying=!shadowPlaying;e.currentTarget.textContent=shadowPlaying?'Ⅱ':'▶';if(shadowPlaying)notify('正在播放示范音频（可跟读）')});
document.querySelector('#next-shadow').addEventListener('click',()=>{document.querySelector('#shadow-progress').style.width='68%';notify('很好！现在进入跟读环节')});
let seconds=600,timerId=null;const timerEl=document.querySelector('#timer'),timerBtn=document.querySelector('#timer-btn');function renderTime(){timerEl.textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`}timerBtn.addEventListener('click',()=>{if(timerId){clearInterval(timerId);timerId=null;timerBtn.innerHTML='继续计时 <span>▶</span>';return}timerBtn.innerHTML='暂停 <span>Ⅱ</span>';notify('专注模式已开启');timerId=setInterval(()=>{seconds=Math.max(0,seconds-1);renderTime();if(seconds===0){clearInterval(timerId);timerId=null;notify('10 分钟完成，休息一下吧！')}},1000)});
document.querySelector('#clip-play').addEventListener('click',()=>notify('音频示范：The present moment'));
