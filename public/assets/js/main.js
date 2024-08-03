$(".menu-button").on("click", function () {
  $(".menu").toggleClass("hidden");
});

let table = $("#customerTable").DataTable({
  dom: "tip",
  responsive: true,
  rowReorder: {
    selector: "td:nth-child(2)",
  },
  pagingType: "simple_numbers",
  lengthChange: false,
  pageLength: 8,
  searching: true,
  autoWidth: false,
  ordering: true,
  scrollX: true,
  fixedHeader: false,
  order: [],
  columnDefs: [{ orderable: false, targets: "_all" }],
});

$("#customSearch").on("keyup", function () {
  table.search(this.value).draw();
});

$("#sortOrder").on("change", function () {
  if (this.value === "newest") {
    table.order([0, "desc"]).draw();
  } else {
    table.order([0, "asc"]).draw();
  }
});
