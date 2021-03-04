const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
let title = '=- stop bark -=';
let loop = "";

async function start() {
  while (true) {
    for (let char of title) {
      if (loop === title) {
        loop = "";
      }

      loop += char;
      window.document.title = loop;
      await sleep(500);
    }
  }
}
(async function() {
  start()
})();