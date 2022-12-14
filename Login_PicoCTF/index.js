(async () => {
  await new Promise((e) => window.addEventListener("load", e)),
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const r = { u: "input[name=username]", p: "input[name=password]" },
        t = {};
      for (const e in r)
        t[e] = btoa(document.querySelector(r[e]).value).replace(/=/g, "");
      return "YWRtaW4" !== t.u
        ? alert("Incorrect Username")
        : "YWRtaW4" !== t.p
        ? alert("Incorrect Password")
        : void alert(
            `Correct Password! Your flag is "VEk0MDR7a2Vsb21wb2tfYWRpdF9kYW5fdG9uaX0="`
          );
    });
})();
