

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

{/* <script> */}
  // const ctx = document.getElementById("myChart");

  // new Chart(ctx, {
    // type: "bar",
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [12, 19, 3, 5, 2, 3],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });
  new Chart(document.getElementById("bar-chart-grouped"), {
    type: "bar",
    data: {
      labels: ["Total Employees", "Total Projects"],
      datasets: [
        {
          label: "Total",
          backgroundColor: "#3e95cd",
          data: [40, 22],
        },
        {
          label: "BIM",
          backgroundColor: " #16243d",
          data: [25, 14],
        },
        {
          label: "Tech",
          backgroundColor: "#F15C44",
          data: [15, 08],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Tathastu growth",
      },
    },
  });

  new Chart(document.getElementById("line-chart"), {
    type: "line",
    data: {
      labels: ["z","jan", "Feb", "Mar", "apr","may", "jun", "jul", "aug", "sep","oct", "nov","dec"],
      datasets: [
        {
          data: [0,7,5,11.13,9],
          label: "Total",
          backgroundColor: "#3e95cd",
          fill: false,
        },
        {
          data: [0,4,3,7,8,5],
          label: "BIM",
          backgroundColor: " #16243d",
          fill: false,
        },
        {
          data: [0,3,2,4,5,4],
          label: "Tech",
          backgroundColor: "#F15C44",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "World population per region (in millions)",
      },
    },
  });
// </script>