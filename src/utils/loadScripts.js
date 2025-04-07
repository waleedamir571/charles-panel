import { useEffect } from "react";

const loadScriptsInOrder = async (scripts) => {
  for (const script of scripts) {
    const scriptElement = document.createElement("script");
    scriptElement.src = script;
    scriptElement.async = true;
    document.body.appendChild(scriptElement);

    await new Promise((resolve) => {
      scriptElement.onload = resolve;
      scriptElement.onerror = resolve;
    });
  }
};

const useScriptLoader = () => {
  useEffect(() => {
    const scripts = [
      "/assets/js/popper1.min.js",
      "/assets/js/bootstrap1.min.js",
      "/assets/js/metisMenu.js",
      "/assets/vendors/count_up/jquery.waypoints.min.js",
      "/assets/vendors/chartlist/Chart.min.js",
      "/assets/vendors/count_up/jquery.counterup.min.js",
      "/assets/vendors/niceselect/js/jquery.nice-select.min.js",
      "/assets/vendors/owl_carousel/js/owl.carousel.min.js",
      "/assets/vendors/datatable/js/jquery.dataTables.min.js",
      "/assets/vendors/datatable/js/dataTables.responsive.min.js",
      "/assets/vendors/datatable/js/dataTables.buttons.min.js",
      "/assets/vendors/datatable/js/buttons.flash.min.js",
      "/assets/vendors/datatable/js/jszip.min.js",
      "/assets/vendors/datatable/js/pdfmake.min.js",
      "/assets/vendors/datatable/js/vfs_fonts.js",
      "/assets/vendors/datatable/js/buttons.html5.min.js",
      "/assets/vendors/datatable/js/buttons.print.min.js",
      "/assets/vendors/datepicker/datepicker.js",
      "/assets/vendors/datepicker/datepicker.en.js",
      "/assets/vendors/datepicker/datepicker.custom.js",
      "/assets/js/chart.min.js",
      "/assets/vendors/chartjs/roundedBar.min.js",
      "/assets/vendors/progressbar/jquery.barfiller.js",
      "/assets/vendors/tagsinput/tagsinput.js",
      "/assets/vendors/text_editor/summernote-bs4.js",
      "/assets/vendors/am_chart/amcharts.js",
      "/assets/vendors/scroll/perfect-scrollbar.min.js",
      "/assets/vendors/scroll/scrollable-custom.js",
      "/assets/vendors/vectormap-home/vectormap-2.0.2.min.js",
      "/assets/vendors/vectormap-home/vectormap-world-mill-en.js",
      "/assets/vendors/apex_chart/apex-chart2.js",
      "/assets/vendors/apex_chart/apex_dashboard.js",
      "/assets/vendors/chart_am/core.js",
      "/assets/vendors/chart_am/charts.js",
      "/assets/vendors/chart_am/animated.js",
      "/assets/vendors/chart_am/kelly.js",
      "/assets/vendors/chart_am/chart-custom.js",
      "/assets/js/dashboard_init.js",
      "/assets/js/custom.js",
    ];

    loadScriptsInOrder(scripts).catch(console.error);
  }, []);
};

export default useScriptLoader;
