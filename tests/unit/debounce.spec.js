import { Debouncer } from '../../src/lib';

const promiseTimeout = (cb , timeout) => new Promise( res => {
   setTimeout(() => { cb(); res(); }, timeout);
})


describe('Debounce function', () => {
  it('debounce action', async () => {
    let counter = 0;

    const callback = () => {
      counter ++;
    }

    const d = new Debouncer();

    d.debounce(callback, 1000);

    for (let i=0;i < 10; i++) {
      await promiseTimeout(()=> {
        d.debounce(callback, 1000)
      }, 10)

    }
    await promiseTimeout(function(){
      expect(counter).toEqual(1);
    }, 1000)

  });
});
