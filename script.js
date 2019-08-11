function lm317_calculate()
{
	var r1value = document.getElementById("res1").value;	
	var r2value = document.getElementById("res2").value;	

	var r1Unit = document.getElementById("lm317_res_multi_1").value;		
	var r2Unit = document.getElementById("lm317_res_multi_2").value;		
	var vout;
	var out
	
	switch(r1Unit)
	{
		case "1":
		break;

		case "2":
			r1value = r1value * 1000;
		break;

		case "3":
			r1value = r1value * 1000000;
		break;

		default:
		break;
	}
	switch(r2Unit)
	{
		case "1":
		break;

		case "2":
			r2value = r2value * 1000;
		break;

		case "3":
			r2value = r2value * 1000000;
		break;

		default:
		break;
	}
	vout = 1.25 * (1 + (r2value/r1value));

	out = document.getElementById("vout");


	out.value = vout;
}