const plan = require('flightplan');

const dockerImage = 'vasilenko/bering-client';

plan.target('deploy', []);

plan.local((t) => {
  t.log('Install dependencies localy');
  t.exec('npm install');
});

plan.local((t) => {
  t.log('Run test suit');
  t.exec('npm run test');
});

plan.local((t) => {
  t.log('Package');
  t.exec(`docker build . -t ${dockerImage}`);

  t.log('Push');
  t.exec(`docker push ${dockerImage}`);
});
