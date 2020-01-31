import trumbowyg from "trumbowyg";
import pdfMake from "pdfmake";
import htmlToPdfMake from "html-to-pdfmake";

import pdfFonts from "pdfmake/build/vfs_fonts";
import icons from "./assets/images/trumbowyg.svg";

import "trumbowyg/dist/ui/trumbowyg.css";
import "./assets/css/main.css";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


$(function(){
  $("#editor").trumbowyg({
    svgPath: icons
  });

  $(".form").on('submit', function(e){
    e.preventDefault();

    const text = $("#editor").val();

    createPDF(text);
  });
});

function createPDF(text) {
  const html = htmlToPdfMake(text);
  const docDefinition = {
    content: [ html ]
  }

  let pdf = pdfMake.createPdf(docDefinition);
  pdf.open();
}

