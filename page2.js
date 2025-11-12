document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.timeline .step');
  const panels = {
    near: document.getElementById('panel-near'),
    mid:  document.getElementById('panel-mid'),
    far:  document.getElementById('panel-far')
  };

  function openPanel(id){
    Object.values(panels).forEach(p=>{
      p.classList.remove('active');
      p.setAttribute('hidden','');
    });
    steps.forEach(s => s.setAttribute('aria-pressed','false'));

    const panel = panels[id];
    if(panel){
      panel.removeAttribute('hidden');
      requestAnimationFrame(()=> panel.classList.add('active'));
    }
  }

  function activate(step){
    if(!step) return; // 保險：避免 undefined
    const controls = step.getAttribute('aria-controls');
    let id = '';
    if(controls === 'panel-near') id = 'near';
    if(controls === 'panel-mid')  id = 'mid';
    if(controls === 'panel-far')  id = 'far';

    openPanel(id);
    step.setAttribute('aria-pressed','true');
    panelScrollIntoView();
  }

  steps.forEach(step=>{
    const btn = step.querySelector('.step-btn');
    btn.addEventListener('click', ()=> activate(step));
    btn.addEventListener('keydown', e=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault(); activate(step);
      }
    });
  });

  // 預設開啟：近期
  if (steps.length) activate(steps[0]);

  function panelScrollIntoView(){
    const activePanel = document.querySelector('.panel.active');
    if(!activePanel) return;
    const rect = activePanel.getBoundingClientRect();
    if(rect.top < 0 || rect.bottom > window.innerHeight){
      activePanel.scrollIntoView({behavior:'smooth', block:'nearest'});
    }
  }
});
