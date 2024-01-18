document.getElementById("calc-btn").addEventListener("click", function () {
  const value = document.getElementById("value").value;
  const fee = document.getElementById("fee").value / 100;
  const time = document.getElementById("time").value;

  const total = value * (1 + fee) ** time;

  document.getElementById("total").innerHTML =
    "R$ " + total.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
});
