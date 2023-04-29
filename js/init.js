$(document).ready(function () {
  const data = 12.07;
  if (data < 0) {
    $("#profitdata").html(
      `<span  style="color:red; font-weight: 600;"><img src="img/up-icon.svg" alt=""> ${data} %</span>`
    );
    $("#profitdata2").html(
      `<span  style="color:red; font-weight: 600;"><img src="img/up-icon.svg" alt=""> ${data} %</span>`
    );
  } else {
    $("#profitdata").html(
      `<span style="color:#1EAA4B; font-weight: 600;"><img src="img/up-icon.svg"  alt=""> ${data} %</span>`
    );
    $("#profitdata2").html(
      `<span style="color:#1EAA4B; font-weight: 600;"><img src="img/up-icon.svg"  alt=""> ${data} %</span>`
    );
  }
});

const apiResult = [
  {
    title: "Sales",
    img: "Salesicon.svg",
  },
  {
    title: "Sales History",
    img: "sales-history.svg",
  },
  {
    title: "Dashboard",
    img: "dashboard.svg",
  },
  {
    title: "Leaderboards",
    img: "leaderboards.svg",
  },
  {
    title: "Attendance",
    img: "attendance.svg",
  },
  {
    title: "Stock",
    img: "stock.svg",
  },
  {
    title: "Offers & Coupons",
    img: "offers-coupons.svg",
  },
  {
    title: "Rewards",
    img: "rewards.svg",
  },
];
const container = document.getElementById("grid-servies-part");
apiResult.map((result, idx) => {
  var content = `
  <div class="circle-card" id="${idx}">
  <div class="icon-card">
      <img src="img/${result.img}" alt="${result.title}" srcset="">
  </div>
  <div class="circle-card-title">
      <p>${result.title}</p>
  </div>
</div>
  `;
  console.log(result);
  $("#grid-servies-part").html(content);
  // container.innerHTML = content;
});
