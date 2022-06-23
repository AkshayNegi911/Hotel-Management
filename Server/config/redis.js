import redis from "redis";
const client = redis.createClient({
  // this is our url on which redis-server runs
  url: "redis://127.0.0.1:6379",
});

client.on("error", console.log);

// asynchronus self invoking function
(async function () {
  await client.connect();
})();

export default redis;
