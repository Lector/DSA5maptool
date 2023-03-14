[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
{
	[selectID = getSelected()]
	[if(listCount(selectID) != 1), Code:
	{
		[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
	};{}]
	[switchToken(selectID)]
	[if(arg(0) != "all" && getPropertyType() != "Basic"), Code:
	{
		[h,macro("inputFail@Lib:macros"): "propertyTypeNotBasic"]
	};{}]
};
{
	[if(getImpersonated()==""), Code:
	{
		[h,macro("inputFail@Lib:macros"): "impersonate"]
	};{}]
}]