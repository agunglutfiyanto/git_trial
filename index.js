$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });

var PeriodJaminanPelaksanaanDanUangMuka = Array.from({length: 3}, (_, i) => i + 1);
var PeriodeEAR = Array.from({length: 6}, (_, i) => i + 1);
var PeriodeJaminanPemeliharaan = Array.from({length: 12}, (_, i) => i + 1);
console.log(PeriodJaminanPelaksanaanDanUangMuka);
console.log(PeriodeEAR);
console.log(PeriodeJaminanPemeliharaan);

$(document).on('change','.IdTOCBond',function(){
    
    $(".deleteIfChange").remove();
    if ($(".IdTOCBond option:selected").val() == "1") {
        $.each(PeriodJaminanPelaksanaanDanUangMuka, function (i, value) {
            console.log(i);
            $(".loopHere").append($("<option></option>")
                            .attr("value", value)
                            .attr("class", "deleteIfChange")
                            .text(value));
        });
    }
    else
    {
        $.each(PeriodeJaminanPemeliharaan, function (i, value) {
            console.log(i);
            $(".loopHere").append($("<option></option>")
                            .attr("value", value)
                            .attr("class", "deleteIfChange")
                            .text(value));
        });
    }
});


// $(".IdTOCBond").change(function () {
//         console.log("a");
//         $.each(PeriodJaminanPelaksanaanDanUangMuka, function (i, value) {
//             console.log(i);
//             _select.append($('<option>', { value: value, text: value }));
//         });
// })


