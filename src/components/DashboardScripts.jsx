import { useEffect } from "react";
import $ from "jquery";

const DashboardScripts = () => {
//   useEffect(() => {
//     // jQuery-based UI initializations
//     $("#sidebar_menu").metisMenu();
//     $("#admin_profile_active").metisMenu();

//     $(".open_miniSide").click(() => {
//       $(".sidebar").toggleClass("mini_sidebar");
//       $(".main_content").toggleClass("full_main_content");
//       $(".footer_part").toggleClass("full_footer");
//     });

//     $(window).on("scroll", () => {
//       const scroll = $(window).scrollTop();
//       $("#back-top").fadeToggle(scroll >= 400);
//     });

//     $("#back-top a").on("click", () => {
//       $("body,html").animate({ scrollTop: 0 }, 1000);
//       return false;
//     });

//     // Active Page Highlighting
//     $("#sidebar_menu").find("a").removeClass("active");
//     $("#sidebar_menu")
//       .find("li")
//       .removeClass("mm-active")
//       .find("ul")
//       .removeClass("mm-show");

//     const current = window.location.pathname;
//     $("#sidebar_menu >li a").filter(function () {
//       const link = $(this).attr("href");
//       if (link && current.includes(link)) {
//         $(this)
//           .parents()
//           .parents()
//           .children("ul.mm-collapse")
//           .addClass("mm-show")
//           .closest("li")
//           .addClass("mm-active");
//         $(this).addClass("active");
//       }
//     });

//     $(".bell_notification_clicker").on("click", () => {
//       $(".Menu_NOtification_Wrap").toggleClass("active");
//     });

//     $(document).click((e) => {
//       if (
//         !$(e.target).closest(
//           ".bell_notification_clicker, .Menu_NOtification_Wrap"
//         ).length
//       ) {
//         $(".Menu_NOtification_Wrap").removeClass("active");
//       }
//     });

//     $(".CHATBOX_open").on("click", () =>
//       $(".CHAT_MESSAGE_POPUPBOX").toggleClass("active")
//     );
//     $(".MSEESAGE_CHATBOX_CLOSE").on("click", () =>
//       $(".CHAT_MESSAGE_POPUPBOX").removeClass("active")
//     );

//     $(document).click((e) => {
//       if (
//         !$(e.target).closest(".CHAT_MESSAGE_POPUPBOX, .CHATBOX_open").length
//       ) {
//         $(".CHAT_MESSAGE_POPUPBOX").removeClass("active");
//       }
//     });

//     $(".serach_button").on("click", () =>
//       $(".serach_field-area").addClass("active")
//     );
//     $(document).click((e) => {
//       if (!$(e.target).closest(".serach_button, .serach_field-area").length) {
//         $(".serach_field-area").removeClass("active");
//       }
//     });

//     const bars = [
//       { id: "#bar1", color: "#FFBF43" },
//       { id: "#bar2", color: "#508FF4" },
//       { id: "#bar3", color: "#4BE69D" },
//       { id: "#bar4", color: "#3B5DE7" },
//       { id: "#bar5", color: "#3BE769" },
//       { id: "#bar6", color: "#3BE7E7" },
//       { id: "#bar7", color: "#FFB822" },
//     ];
//     bars.forEach(({ id, color }) => {
//       if ($(id).length) {
//         $(id).barfiller({ barColor: color, duration: 2200 });
//       }
//     });

//     $(".close_icon").click(function () {
//       $(this).parents(".hide_content").slideToggle(0);
//     });

//     const count = $(".counter");
//     if (count.length) {
//       count.counterUp({ delay: 100, time: 5000 });
//     }

//     const selects = [".nice_Select", ".nice_Select2", ".default_sel"];
//     selects.forEach((selector) => {
//       if ($(selector).length) $(selector).niceSelect();
//     });

//     const datePickers = ["#start_datepicker", "#end_datepicker"];
//     datePickers.forEach((id) => {
//       if ($(id).length) $(id).datepicker();
//     });

//     $(".progress-bar").each(function (i) {
//       const $this = $(this);
//       $this
//         .delay(500 * i)
//         .animate({ width: $this.attr("aria-valuenow") + "%" }, 500)
//         .prop("Counter", 0)
//         .animate(
//           { Counter: $this.text() },
//           {
//             duration: 500,
//             easing: "swing",
//             step(now) {
//               $this.text(Math.ceil(now) + "%");
//             },
//           }
//         );
//     });

//     $(".sidebar_icon").on("click", () =>
//       $(".sidebar").toggleClass("active_sidebar")
//     );
//     $(".sidebar_close_icon i").on("click", () =>
//       $(".sidebar").removeClass("active_sidebar")
//     );

//     $(".troggle_icon").on("click", () =>
//       $(".setting_navbar_bar").toggleClass("active_menu")
//     );

//     $(".custom_select").click(function () {
//       $(this)
//         .toggleClass("active")
//         .siblings(".custom_select")
//         .removeClass("active");
//     });

//     $(document).click((e) => {
//       if (!$(e.target).closest(".custom_select").length) {
//         $(".custom_select").removeClass("active");
//       }
//       if (!$(e.target).closest(".sidebar_icon, .sidebar").length) {
//         $(".sidebar").removeClass("active_sidebar");
//       }
//     });

//     $("#checkAll").click(function () {
//       $("input:checkbox").not(this).prop("checked", this.checked);
//     });

//     const summerNoteFields = ["#summernote", ".lms_summernote"];
//     summerNoteFields.forEach((selector) => {
//       const summerNote = $(selector);
//       if (summerNote.length) {
//         summerNote.summernote({
//           placeholder: "Lorem ipsum dolor sit amet...",
//           tabsize: 2,
//           height: 305,
//         });
//       }
//     });

//     $(".input-file").each(function () {
//       const $input = $(this),
//         $label = $input.next(".js-labelFile"),
//         labelVal = $label.html();

//       $input.on("change", function (e) {
//         const fileName = e.target.value.split("\\").pop();
//         fileName
//           ? $label.addClass("has-file").find(".js-fileName").html(fileName)
//           : $label.removeClass("has-file").html(labelVal);
//       });
//     });

//     $(".input-file2").each(function () {
//       const $input = $(this),
//         $label = $input.next(".js-labelFile1"),
//         labelVal = $label.html();

//       $input.on("change", function (e) {
//         const fileName = e.target.value.split("\\").pop();
//         fileName
//           ? $label.addClass("has-file").find(".js-fileName1").html(fileName)
//           : $label.removeClass("has-file").html(labelVal);
//       });
//     });

//     const bootstrapTag = $("#meta_keywords");
//     if (bootstrapTag.length) {
//       bootstrapTag.tagsinput();
//     }

//     if ($(".lms_table_active").length) {
//       $(".lms_table_active").DataTable({
//         bLengthChange: false,
//         bDestroy: true,
//         responsive: true,
//         searching: false,
//         language: {
//           search: "<i class='ti-search'></i>",
//           searchPlaceholder: "Quick Search",
//           paginate: {
//             next: "<i class='ti-arrow-right'></i>",
//             previous: "<i class='ti-arrow-left'></i>",
//           },
//         },
//         columnDefs: [{ visible: false }],
//       });
//     }

//     if ($(".lms_table_active2").length) {
//       $(".lms_table_active2").DataTable({
//         bLengthChange: false,
//         bDestroy: false,
//         responsive: true,
//         language: {
//           search: "<i class='ti-search'></i>",
//           searchPlaceholder: "Quick Search",
//           paginate: {
//             next: "<i class='ti-arrow-right'></i>",
//             previous: "<i class='ti-arrow-left'></i>",
//           },
//         },
//         columnDefs: [{ visible: false }],
//       });
//     }
//   }, []);

  return null;
};

export default DashboardScripts;
