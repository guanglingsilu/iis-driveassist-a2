const scenarios = {
  normal: [
    { title: 'A hazard ahead', label: 'DRIVER GOAL', heading: 'Avoid the obstacle safely', text: 'A stationary obstacle is ahead and a motorcycle is travelling on the right. The driver begins to steer right.', actions: [{ text: 'Continue', next: 1 }] },
    { title: 'Assistance intervenes', label: 'SIMULATED INTERVENTION', heading: 'Right turn restricted: motorcycle', text: 'The scripted system predicts a conflict with the motorcycle. Steering resistance and controlled braking are represented here, alongside a visual and spoken warning.', actions: [{ text: 'Stop steering right', next: 2 }] },
    { title: 'Review after stopping', label: 'EVENT REVIEW', heading: 'The motorcycle passed', text: 'In this scenario the car stops after low-speed contact with the obstacle. The review explains that the motorcycle’s predicted path conflicted with the requested turn.', actions: [{ text: 'Restart scenario', next: 0 }] }
  ],
  missed: [
    { title: 'A hazard was missed', label: 'DRIVER OBSERVATION', heading: 'The obstacle model is incomplete', text: 'The scripted system detects the lower obstacle but misses a sharp upper protrusion. The driver sees the protrusion and presses the brake.', actions: [{ text: 'Report “Sharp spikes ahead!”', next: 1 }] },
    { title: 'The report triggers a re-check', label: 'CORRECTION RECEIVED', heading: 'Reassessing the obstacle', text: 'The report is treated as evidence to investigate. The scripted re-check finds the protrusion, withdraws the earlier low-severity assessment and continues controlled braking.', reveal: true, actions: [{ text: 'Right path is clear and feasible', next: 2 }, { text: 'Right path cannot be confirmed', next: 3, secondary: true }] },
    { title: 'Clear path confirmed', label: 'SIMULATED OUTCOME', heading: 'Assistance around the obstacle', text: 'With enough time and a confirmed clear, feasible right-side path, the simulation assists around the protrusion after the motorcycle passes. The car stops for review.', reveal: true, actions: [{ text: 'Restart scenario', next: 0 }] },
    { title: 'No safe path confirmed', label: 'SIMULATED LIMITATION', heading: 'Continue controlled braking', text: 'The simulation cannot confirm a safe escape path. It continues the safest validated braking strategy and informs the driver that collision avoidance cannot be guaranteed.', reveal: true, actions: [{ text: 'Restart scenario', next: 0 }] }
  ]
};

let scenario = 'normal';
let step = 0;
const byId = id => document.getElementById(id);

function render() {
  const current = scenarios[scenario][step];
  byId('step-label').textContent = `SCENARIO ${scenario === 'normal' ? '01' : '02'} · STEP ${step + 1}`;
  byId('title').textContent = current.title;
  byId('status-label').textContent = current.label;
  byId('status-title').textContent = current.heading;
  byId('description').textContent = current.text;
  byId('road').classList.toggle('reveal', Boolean(current.reveal));
  byId('road').setAttribute('aria-label', current.reveal ? 'Scripted road scene with the upper protrusion revealed, an obstacle ahead and a motorcycle to the right' : 'Scripted road scene with an obstacle ahead and a motorcycle to the right');
  byId('progress-text').textContent = step === 0 ? 'Start of scenario' : 'Scenario in progress';
  const choices = byId('choices');
  choices.replaceChildren();
  current.actions.forEach(action => {
    const button = document.createElement('button');
    button.textContent = action.text;
    if (action.secondary) button.className = 'secondary';
    button.addEventListener('click', () => { step = action.next; render(); });
    choices.appendChild(button);
  });
  document.querySelectorAll('.scenario').forEach(button => {
    const active = button.dataset.scenario === scenario;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

document.querySelectorAll('.scenario').forEach(button => button.addEventListener('click', () => {
  scenario = button.dataset.scenario;
  step = 0;
  render();
}));
byId('restart').addEventListener('click', () => { step = 0; render(); });
render();
