/* Plain browser bootstrap. Loads game data before SystemJS executes business modules. */
(async function bootstrap() {
  async function readJSON(url) {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
    return response.json();
  }
  try {
    const config = await readJSON("data/config.json");
    const documents = await Promise.all(
      config.tables.map((name) => readJSON(`data/tables/${name}.json`)),
    );
    globalThis.WebGameConfig = config;
    globalThis.WebGameTables = Object.assign({}, ...documents);
    await System.import("./game/main.js");
  } catch (error) {
    console.error("Web game startup failed", error);
    const message = document.createElement("div");
    message.id = "startup-error";
    message.style.cssText =
      "position:fixed;inset:0;z-index:9999;background:#222;color:white;padding:32px;font:16px sans-serif;white-space:pre-wrap";
    message.textContent = `游戏启动失败：${error.message}\n请检查数据文件或网络后刷新重试。`;
    document.body.appendChild(message);
  }
})();
