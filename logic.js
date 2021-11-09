function prexvl(val, type) {
  // Kishor Gupta WTR-3(PARUL TEAM)
  var area = document.getElementById(type);
  area.value = area.value.replace(/[^0-9\^]/g, "");
  area.parentElement.parentElement.style.borderColor = "#e1f5e6";
  document.querySelectorAll("i")[0].className = "far fa-copy";
  document.getElementById("rtig").disabled = true;
  document.getElementById("ctig").disabled = true;
}

let mrng = document.getElementById("mrng").addEventListener("input", () => {
  let fval = document.getElementById("mrng").value;
  document.getElementById("optm1").innerText = `${fval}% Margin`;
});

function dychng(val_btn) {
  let val = val_btn.value;
  let per_day = document.getElementById("pr");
  let mrng = document.getElementById("mrng");

  let per_day_val = parseInt(per_day.value);
  let mrng_val = parseInt(mrng.value);
  let val_val = parseInt(val);

  if (val_val > 0) {
    if (parseInt(per_day.value) > 0) {
      let ttl_val = per_day_val * val_val * 12;
      document.getElementById("fval").innerText = `${numeral(ttl_val).format(
        "0,000000"
      )} ₹`;
      document.getElementById("mrpre").innerText = `${mrng_val} % Margin`;
      document.getElementById("paypre").innerText = `${
        100 - mrng_val
      } % Payable`;
      let f_ma_val = (mrng_val * ttl_val) / 100;
      document.getElementById("moptr").innerText = `${numeral(f_ma_val).format(
        "0,000000"
      )} ₹`;
      document.getElementById("poptr").innerText = `${numeral(
        ttl_val - f_ma_val
      ).format("0,000000")} ₹`;
      let cpvl = `${per_day_val} INR/per day for ${val_val} days and ${mrng_val}% margin is ${f_ma_val} INR, ${
        100 - mrng_val
      }% payable is ${ttl_val - f_ma_val} INR so total is ${ttl_val} INR.`;
      document.getElementById("rtig").disabled = false;
      document.getElementById("ctig").disabled = false;

      document.getElementById("cpyTxt").value = cpvl;
    } else {
      document.getElementById(
        "pr"
      ).parentElement.parentElement.style.borderColor = "red";
    }
  }
}

function reset() {
  document.getElementById("pr").value = "";
  document.getElementById("moptr").innerText = "0.00 ₹";
  document.getElementById("poptr").innerText = "0.00 ₹";
  document.getElementById("fval").innerText = "0.00 ₹";
}

function cpy() {
  var copyText = document.getElementById("cpyTxt");

  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  document.querySelectorAll("i")[0].className = "fas fa-copy";
}
