$(document).ready(function() {
	var top_company_names = $("#company-names").offset().top -80;
	$("#company-names").attr("data-offset-top",top_company_names);
	var top_trademarks_names = $("#trademark-names").offset().top -230;
	$("#trademark-names").attr("data-offset-top",top_trademarks_names);
	var top_taxes = $("#taxes").offset().top -350;
	$("#taxes").attr("data-offset-top",top_taxes);
});