/**
* SELECT REPORT
* DESC: Purpose of this module is for reseting all visible checkboxes in report list.
* TYPE: Module revealing
* @since 1.0.0
*/
const SelectReport = (function(){

		// Properties
		let reports_chkboxes = $('.StrCPVisits_db_list_chkbox');




		function uncheckAllCheckboxes(){
				reports_chkboxes.prop('checked', false); // Disable
		}




		return {
						reset : uncheckAllCheckboxes
		};


})();
