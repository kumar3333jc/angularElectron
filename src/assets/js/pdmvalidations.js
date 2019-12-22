var offlineFieldValidations={"Form1_AO_Field1":{"type":"string","validations":[{"vtype":"mandatory","value1":"","value2":"","message":"This field is mandatory","i18nkey":"pdm.Form_10FA.Form1._lQZ4U","oldmessage":"This field is mandatory"}]},"Form1_AO_Field2":{"type":"string","validations":[]},"Form1_AO_Field3":{"type":"string","validations":[]},"Form1_Individual_Name":{"type":"string","validations":[]},"Form1_page2_fullname_address":{"type":"string","validations":[{"vtype":"mandatory","value1":"","value2":"","message":"This field is mandatory","i18nkey":"pdm.Form_10FA.Form1_page2._GS9nT","oldmessage":"This field is mandatory"}]},"Form1_page2_status":{"type":"string","validations":[]},"Form1_page2_nationality":{"type":"string","validations":[]},"Form1_page2_country":{"type":"string","validations":[]},"Form1_page2_address":{"type":"string","validations":[]},"Form1_page2_email_id":{"type":"string","validations":[]},"Form1_page2_pan_or_tan":{"type":"string","validations":[{"vtype":"mandatory","value1":"","value2":"","message":"This field is mandatory","i18nkey":"pdm.Form_10FA.Form1_page2.pan_FIiA5","oldmessage":"This field is mandatory"}]},"Form1_page2_number":{"type":"string","validations":[]},"Form1_page2_period":{"type":"string","validations":[]},"Form1_page2_purpose":{"type":"string","validations":[]},"Form1_page2_other_details":{"type":"string","validations":[]},"Form1_page3_individual_firstname":{"type":"string","validations":[{"vtype":"mandatory","value1":"","value2":"","message":"This field is mandatory","i18nkey":"pdm.Form_10FA.Form1_page3._4kqdS","oldmessage":"This field is mandatory"}]},"Form1_page3_individual_lastname":{"type":"string","validations":[{"vtype":"mandatory","value1":"","value2":"","message":"This field is mandatory","i18nkey":"pdm.Form_10FA.Form1_page3._R8Mdh","oldmessage":"This field is mandatory"}]},"Form1_page3_parent_name":{"type":"string","validations":[]},"Form1_page3_parent_designation":{"type":"string","validations":[]},"Form1_page3_day":{"type":"integer","validations":[]},"Form1_page3_month":{"type":"string","validations":[]},"Form1_page3_place":{"type":"string","validations":[]},"Form1_page3_name":{"type":"string","validations":[]}};
var pdm_validations = {

	nameFieldRegx : /^[a-zA-Z]{1,1}[a-zA-Z0-9-_]{0,29}$/,

	displayNameFieldRegx : /^[a-zA-Z]{1,1}[a-zA-Z0-9-_\s]{0,29}$/,

	entity : {},

	attribute : {},

	operation : {},

	relation : {},

	application : {
		enable : true,
		attribute : {
			"string" : [
					{
						"vtype" : "mandatory",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_checkMandatory"
					},
					{
						"vtype" : "alpha",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^[a-zA-Z]+$/
					},
					{
						"vtype" : "number",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^[0-9]+$/
					},
					{
						"vtype" : "alphanum",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^[a-zA-Z]+[a-zA-Z0-9]+$/
					},
					{
						"vtype" : "numalpha",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^[0-9]+[0-9a-zA-Z]+$/
					},
					{
						"vtype" : "email",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					},
					{
						"vtype" : "url",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
					},
					{
						"vtype" : "creditcard",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^\d{16}$/
					},
					{
						"vtype" : "pancard",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/
					},
					{
						"vtype" : "aadharcard",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^\d{12}$/
					},
					{
						"vtype" : "pincode",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : /^[0-9]{6}$/
					},
					{
						"vtype" : "ipaddress",
						"value1" : {
							"type" : "text"
						},
						"value2" : {
							"type" : "text"
						},
						"regex" : /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/
					}, {
						"vtype" : "ipaddressRange",
						"value1" : {
							"type" : "text"
						},
						"value2" : {
							"type" : "text"
						},
						"regex" : "",
						"method" : "_ipaddressRange"
					}, {
						"vtype" : "startsWith",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_startsWith"
					}, {
						"vtype" : "startsWithExactly",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_startsWithExactly"
					}, {
						"vtype" : "endsWith",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_endsWith"
					}, {
						"vtype" : "endsWithExactly",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_endsWithExactly"
					}, {
						"vtype" : "contains",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_contains"
					}, {
						"vtype" : "containsExactly",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_containsExactly"
					}, {
						"vtype" : "doesntContain",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_doesntContain"
					}, {
						"vtype" : "doesntContainExactly",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_doesntContainExactly"
					}, {
						"vtype" : "equals",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_equals"
					}, {
						"vtype" : "equalsExactly",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_equalsExactly"
					}, {
						"vtype" : "notEquals",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_notEquals"
					}, {
						"vtype" : "notEqualsExactly",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_notEqualsExactly"
					}, {
						"vtype" : "allowBlank",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_allowBlank"
					}, {
						"vtype" : "maxLength",
						"value1" : {
							"type" : "number"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_maxLength"
					}, {
						"vtype" : "minLength",
						"value1" : {
							"type" : "number"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_minLength"
					}, {
						"vtype" : "exactLength",
						"value1" : {
							"type" : "number"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_exactLength"
					}, {
						"vtype" : "regExp",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_regExp"
					} ],
			"integer" : [ {
				"vtype" : "mandatory",
				"value1" : {

				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_checkMandatory"
			}, {
				"vtype" : "maxValue",
				"value1" : {
					"type" : "number",
					"minValue" : -2147483648,
					"maxValue" : 2147483647
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_maxValue"
			}, {
				"vtype" : "minValue",
				"value1" : {
					"type" : "number",
					"minValue" : -2147483648,
					"maxValue" : 2147483647
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_minValue"
			}, {
				"vtype" : "range",
				"value1" : {
					"type" : "number",
					"minValue" : -2147483648,
					"maxValue" : 2147483647
				},
				"value2" : {
					"type" : "number",
					"minValue" : -2147483648,
					"maxValue" : 2147483647
				},
				"regex" : "",
				"method" : "_range"
			}, {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			}, {
				"vtype" : "notEquals",
				"value1" : {
					"type" : "number",
					"minValue" : -2147483648,
					"maxValue" : 2147483647
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_notEquals"
			}, {
				"vtype" : "equals",
				"value1" : {
					"type" : "number",
					"minValue" : -2147483648,
					"maxValue" : 2147483647
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_equals"
			} ],
			"short" : [ {
				"vtype" : "mandatory",
				"value1" : {

				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_checkMandatory"
			}, {
				"vtype" : "maxValue",
				"value1" : {
					"type" : "number",
					"minValue" : -32768,
					"maxValue" : 32767
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_maxValue"
			}, {
				"vtype" : "minValue",
				"value1" : {
					"type" : "number",
					"minValue" : -32768,
					"maxValue" : 32767
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_minValue"
			}, {
				"vtype" : "range",
				"value1" : {
					"type" : "number",
					"minValue" : -32768,
					"maxValue" : 32767
				},
				"value2" : {
					"type" : "number",
					"minValue" : -32768,
					"maxValue" : 32767
				},
				"regex" : "",
				"method" : "_range"
			}, {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			}, {
				"vtype" : "notEquals",
				"value1" : {
					"type" : "number",
					"minValue" : -32768,
					"maxValue" : 32767
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_notEquals"
			}, {
				"vtype" : "equals",
				"value1" : {
					"type" : "number",
					"minValue" : -32768,
					"maxValue" : 32767
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_equals"
			} ],
			"long" : [ {
				"vtype" : "mandatory",
				"value1" : {

				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_checkMandatory"
			}, {
				"vtype" : "maxValue",
				"value1" : {
					"type" : "number",
					"minValue" : -9223372036854775808,
					"maxValue" : 9223372036854775807
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_maxValue"
			}, {
				"vtype" : "minValue",
				"value1" : {
					"type" : "number",
					"minValue" : -9223372036854775808,
					"maxValue" : 9223372036854775807
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_minValue"
			}, {
				"vtype" : "range",
				"value1" : {
					"type" : "number",
					"minValue" : -9223372036854775808,
					"maxValue" : 9223372036854775807
				},
				"value2" : {
					"type" : "number",
					"minValue" : -9223372036854775808,
					"maxValue" : 9223372036854775807
				},
				"regex" : "",
				"method" : "_range"
			}, {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			}, {
				"vtype" : "notEquals",
				"value1" : {
					"type" : "number",
					"minValue" : -9223372036854775808,
					"maxValue" : 9223372036854775807
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_notEquals"
			}, {
				"vtype" : "equals",
				"value1" : {
					"type" : "number",
					"minValue" : -9223372036854775808,
					"maxValue" : 9223372036854775807
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_equals"
			} ],
			"float" : [ {
				"vtype" : "mandatory",
				"value1" : {

				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_checkMandatory"
			}, {
				"vtype" : "maxValue",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_maxValue"
			}, {
				"vtype" : "minValue",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_minValue"
			}, {
				"vtype" : "range",
				"value1" : {
					"type" : "number"
				},
				"value2" : {
					"type" : "number"
				},
				"regex" : "",
				"method" : "_range"
			}, {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			}, {
				"vtype" : "notEquals",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_notEquals"
			}, {
				"vtype" : "equals",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_equals"
			} ],
			"double" : [ {
				"vtype" : "mandatory",
				"value1" : {

				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_checkMandatory"
			}, {
				"vtype" : "maxValue",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_maxValue"
			}, {
				"vtype" : "minValue",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_minValue"
			}, {
				"vtype" : "range",
				"value1" : {
					"type" : "number"
				},
				"value2" : {
					"type" : "number"
				},
				"regex" : "",
				"method" : "_range"
			}, {
				"vtype" : "notEquals",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_notEquals"
			}, {
				"vtype" : "equals",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_equals"
			}, {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			} ],
			"char" : [ {
				"vtype" : "mandatory",
				"value1" : {

				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_checkMandatory"
			}, {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			} ],
			"boolean" : [ {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			} ],
			"clob" : [ {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			} ],
			"blob" : [ {
				"vtype" : "fileType",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_fileType"
			}, {
				"vtype" : "fileSize",
				"value1" : {
					"type" : "number"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_fileSize"
			}, {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			} ],
			"date" : [
					{
						"vtype" : "mandatory",
						"value1" : {

						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_checkMandatory"
					},
					{
						"vtype" : "dateformat",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_dateformat",
						"formats" : [ 'DD-MM-YY', 'DD-MM-YYYY', 'MM/DD/YY',
								'MM/DD/YYYY' ]
					}, {
						"vtype" : "daterange",
						"value1" : {
							"type" : "text"
						},
						"value2" : {
							"type" : "text"
						},
						"regex" : "",
						"method" : "_daterange"
					}, {
						"vtype" : "regExp",
						"value1" : {
							"type" : "text"
						},
						"value2" : {

						},
						"regex" : "",
						"method" : "_regExp"
					} ],
			"timestamp" : [ {
				"vtype" : "mandatory",
				"value1" : {

				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_checkMandatory"
			}, {
				"vtype" : "dateformat",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_dateformat"
			}, {
				"vtype" : "datetimeformat",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_datetimeformat"
			}, {
				"vtype" : "daterange",
				"value1" : {
					"type" : "text"
				},
				"value2" : {
					"type" : "text"
				},
				"regex" : "",
				"method" : "_daterange"
			}, {
				"vtype" : "regExp",
				"value1" : {
					"type" : "text"
				},
				"value2" : {

				},
				"regex" : "",
				"method" : "_regExp"
			} ]
		}
	}
};

var validations = pdm_validations.application.attribute;

function _checkMandatory(actualValue, value1, value2) {
	try {
		if (actualValue == null || actualValue == undefined
				|| actualValue.trim().length == 0) {
			return false;
		}
	} catch (e) {
		console.error(e);
	}
	return true;
}

function _startsWith(actualValue, value1, value2) {
	actualValue = actualValue.toUpperCase();
	value1 = value1.toUpperCase();
	return actualValue.startsWith(value1);
}

function _startsWithExactly(actualValue, value1, value2) {
	return actualValue.startsWith(value1);
}

function _endsWith(actualValue, value1, value2) {
	actualValue = actualValue.toUpperCase();
	value1 = value1.toUpperCase();
	return actualValue.endsWith(value1);
}

function _endsWithExactly(actualValue, value1, value2) {
	return actualValue.endsWith(value1);
}

function _contains(actualValue, value1, value2) {
	actualValue = actualValue.toUpperCase();
	value1 = value1.toUpperCase();
	if (actualValue.search(value1) != -1) {
		return true;
	}
	return false;
}

function _containsExactly(actualValue, value1, value2) {
	if (actualValue.search(value1) != -1) {
		return true;
	}
	return false;
}

function _doesntContain(actualValue, value1, value2) {
	return !_contains(actualValue, value1, value2);
}

function _doesntContainExactly(actualValue, value1, value2) {
	return !_containsExactly(actualValue, value1, value2);
}

function _equals(actualValue, value1, value2) {
	actualValue = actualValue.toUpperCase();
	value1 = value1.toUpperCase();
	return actualValue == value1;
}

function _equalsExactly(actualValue, value1, value2) {
	return actualValue == value1;
}

function _notEquals(actualValue, value1, value2) {
	return !_equals(actualValue, value1, value2);
}

function _notEqualsExactly(actualValue, value1, value2) {
	return !_equalsExactly(actualValue, value1, value2);
}

function _allowBlank(actualValue, value1, value2) {
	return true;
}

function _maxLength(actualValue, value1, value2) {
	actualValue = actualValue + "";
	return actualValue.length <= value1;
}

function _minLength(actualValue, value1, value2) {
	actualValue = actualValue + "";
	return actualValue.length >= value1;
}

function _exactLength(actualValue, value1, value2) {
	actualValue = actualValue + "";
	return actualValue.length == value1;
}

function _regExp(actualValue, value1, value2) {
	try {
		value1 = eval(value1);
		return value1.test(actualValue);
	} catch (e) {
		return false;
	}
}

function _maxValue(actualValue, value1, value2) {
	return actualValue <= value1;
}

function _minValue(actualValue, value1, value2) {
	return actualValue >= value1;
}

function _range(actualValue, value1, value2) {
	actualValue = parseFloat(actualValue);
	value1 = parseFloat(value1);
	value2 = parseFloat(value2);
	return (actualValue >= value1 && actualValue <= value2);
}

function _fileType(actualValue, value1, value2) {
	return actualValue.toUpperCase() == value1.toUpperCase();
}

function _fileSize(actualValue, value1, value2) {
	return actualValue <= value1;
}

function _daterange(actualValue, value1, value2) {
	try {

		var fromDate = new Date(value1);
		var toDate = new Date(value2);
		var actualDate = new Date(actualValue);

		var formDay = fromDate.getDate();
		var formMonth = fromDate.getMonth() + 1;
		var formYear = fromDate.getFullYear();

		var toDay = toDate.getDate();
		var toMonth = toDate.getMonth() + 1;
		var toYear = toDate.getFullYear();

		var actualDay = actualDate.getDate();
		var actualMonth = actualDate.getMonth() + 1;
		var actualYear = actualDate.getFullYear();

		if (formYear < actualYear && toYear > actualYear) {
			return true;
		} else if (formYear == actualYear) {
			if (actualMonth > formMonth && actualMonth < toMonth) {
				return true;
			} else if (actualMonth == formMonth) {
				if (actualDay >= formDay && actualDay <= toDay) {
					return true;
				}
			}
		} else if (toYear == actualYear) {
			if (actualMonth > formMonth && actualMonth < toMonth) {
				return true;
			} else if (actualMonth == toMonth) {
				if (actualDay >= formDay && actualDay <= toDay) {
					return true;
				}
			}
		}
	} catch (e) {
		console.error(e);
	}
	return false;
}

function _dateformat(actualValue, value1, value2) {
	return actualValue.toUpperCase() == value1.toUpperCase();
}

function _datetimeformat(actualValue, value1, value2) {
	return actualValue.toUpperCase() == value1.toUpperCase();
}

function _ipaddressRange(actualValue, value1, value2) {
	var actualArr = actualValue.split(".");
	var fromArr = value1.split(".");
	var toArr = value2.split(".");
	var isValid = true;
	for (i = 0; i < 4; i++) {
		if (fromArr[i] > actualArr[i]) {
			isValid = false;
			break;
		}
	}
	if (isValid) {
		for (i = 0; i < 4; i++) {
			if (toArr[i] < actualArr[i]) {
				isValid = false;
				break;
			}
		}
	}
	return isValid;
}

function validate(actualValue, datatype, vtype, value1, value2) {
	var vTypes = validations[datatype];
	var flag = true;
	for(var i=0;i<vTypes.length;i++){
		var type=vTypes[i];
		if (type.vtype == vtype && (vtype=="mandatory" || actualValue!="")) {
			if (type.hasOwnProperty("regex") && type.regex != "") {
				// internal defined regex case
				var regex = type.regex;
				flag = regex.test(actualValue);
				break;
			} else if (vtype == "regExp") {
				// external defined regex case
				var regex = new RegExp("^" + value1.trim() + "$");
				flag = regex.test(actualValue);
				break;
			} else if (type.hasOwnProperty("method") && type.method != "") {
				flag = window[type.method](actualValue, value1, value2);
				break;
			}
		}
	}
	return flag;
}

function validateField(key, userEnteredValue) {
	var result = [];
	var fieldObj = fieldValidations[key];
	if (fieldObj != null) {
		var validations = fieldObj["validations"];
		var datatype = fieldObj["type"];
		for (var i = 0; i < validations.length; i++) {
			var vtype = validations[i]["vtype"];
			var value1 = validations[i]["value1"];
			var value2 = validations[i]["value2"];
			var message = validations[i]["message"];
			var isValid = validate(userEnteredValue, datatype, vtype, value1,
					value2);
			if (!isValid) {
				result.push(message);
				return result;
			}
		}
	}
	return result;
}

function validateFormField(key, userEnteredValue){
	//console.log("inside validateFormField");
	var fieldObj = offlineFieldValidations[key];
	var validations = fieldObj["validations"];
		var datatype = fieldObj["type"];
	var errors=null;
	for (var i = 0; i < validations.length; i++) {
		var vtype = validations[i]["vtype"];
		var value1 = validations[i]["value1"];
		var value2 = validations[i]["value2"];
		var message = validations[i]["message"];
		var isValid = validate(userEnteredValue, datatype, vtype, value1,
				value2);
		//console.log("isValid:"+isValid);
		if (!isValid) {
			if(errors==null){
				errors={};
			}
			errors[vtype]=true;
			errors["msg"]=message;
			break;
		}
	}
	return errors;
}

function getFieldValidations(allPdms) {
	var result = {};
	for (var i = 0; i < allPdms.length; i++) {
		var pdm = allPdms[i];
		var pdmName = pdm["DataModelName"];
		var entities = JSON.parse(pdm["Entities"]);
		for (var j = 0; j < entities.length; j++) {
			var entity = entities[j];
			var entityName = entity["Name"];
			var fields = entity["Properties"];
			for (var k = 0; k < fields.length; k++) {
				var field = fields[k];
				// var key=pdmName+"."+entityName+"."+field["name"];
				var key = entityName + "." + field["name"];
				result[key] = field;
			}
		}
	}
	return result;
}
if (typeof (fieldValidations) !== 'undefined') {
	fieldValidations = getFieldValidations(fieldValidations);
}
