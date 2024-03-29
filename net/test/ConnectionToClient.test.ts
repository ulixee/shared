import ITransport from '../interfaces/ITransport';
import ConnectionToClient from '../lib/ConnectionToClient';
import EmittingTransportToClient from '../lib/EmittingTransportToClient';

test('should route messages from client to the right API', () => {
  const apis = { 'Api.test': jest.fn() };
  const clientTransport = new EmittingTransportToClient();
  const connection = new ConnectionToClient(clientTransport, apis);

  connection.transport.emit('message', {
    command: 'Api.test',
    args: [],
    messageId: '1',
    sendTime: Date.now(),
  });
  expect(apis['Api.test']).toHaveBeenCalledTimes(1);
});

test('should call disconnect once on a connection', async () => {
  const clientTransport: ITransport = new EmittingTransportToClient();
  const connection = new ConnectionToClient(clientTransport, {});
  clientTransport.disconnect = jest.fn();

  await connection.disconnect();
  expect(clientTransport.disconnect).toHaveBeenCalledTimes(1);
});
