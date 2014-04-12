var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('url', function (event, payload) {
    if (event !== 'data') return;

    alert(payload);
  });

  c.inPorts.add('identity', function (event, payload) {
    if (event !== 'data') return ;

    c.outPorts.out.send(payload);
  });

  c.outPorts.add('out');
  return c;
};
